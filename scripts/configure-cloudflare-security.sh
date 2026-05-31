#!/usr/bin/env bash
set -euo pipefail

# Enable Cloudflare security recommendations for medriox.com:
# - Bot Fight Mode
# - AI Labyrinth
# - Managed security.txt
#
# Usage:
#   export CLOUDFLARE_API_TOKEN="your-token-with-zone-edit-permissions"
#   export CLOUDFLARE_ZONE_ID="your-zone-id"   # optional if ZONE_NAME is set
#   ./scripts/configure-cloudflare-security.sh
#
# Create an API token at: https://dash.cloudflare.com/profile/api-tokens
# Required permissions: Zone > Bot Management > Edit, Zone > Security Center > Edit

ZONE_NAME="${CLOUDFLARE_ZONE_NAME:-medriox.com}"
API_BASE="https://api.cloudflare.com/client/v4"

if [[ -z "${CLOUDFLARE_API_TOKEN:-}" ]]; then
  echo "Error: CLOUDFLARE_API_TOKEN is required." >&2
  exit 1
fi

auth_header=( -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" -H "Content-Type: application/json" )

if [[ -z "${CLOUDFLARE_ZONE_ID:-}" ]]; then
  echo "Looking up zone ID for ${ZONE_NAME}..."
  CLOUDFLARE_ZONE_ID="$(
    curl -fsS "${auth_header[@]}" \
      "${API_BASE}/zones?name=${ZONE_NAME}" \
      | python3 -c 'import json,sys; data=json.load(sys.stdin); print(data["result"][0]["id"])'
  )"
  echo "Zone ID: ${CLOUDFLARE_ZONE_ID}"
fi

echo "Enabling Bot Fight Mode and AI Labyrinth..."
curl -fsS -X PUT "${auth_header[@]}" \
  "${API_BASE}/zones/${CLOUDFLARE_ZONE_ID}/bot_management" \
  --data '{"fight_mode": true, "crawler_protection": "enabled"}' \
  | python3 -c 'import json,sys; data=json.load(sys.stdin); print("OK" if data.get("success") else data)'

echo "Enabling Cloudflare-managed security.txt..."
curl -fsS -X PUT "${auth_header[@]}" \
  "${API_BASE}/zones/${CLOUDFLARE_ZONE_ID}/security-center/securitytxt" \
  --data "$(cat <<'EOF'
{
  "enabled": true,
  "contact": ["mailto:contact@medriox.com"],
  "expires": "2027-05-31T23:59:59.000Z",
  "preferred_languages": "en",
  "canonical": ["https://medriox.com/.well-known/security.txt"]
}
EOF
)" \
  | python3 -c 'import json,sys; data=json.load(sys.stdin); print("OK" if data.get("success") else data)'

echo "Done. Verify at:"
echo "  https://medriox.com/.well-known/security.txt"
echo "  Cloudflare dashboard > Security > Settings"
