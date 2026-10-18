#!/usr/bin/env bash
set -euo pipefail
AHMA_SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
bash "$AHMA_SCRIPT_DIR/deploy-ahmalattiat-website-certificate.sh"
bash "$AHMA_SCRIPT_DIR/deploy-ahmalattiat-website-s3-bucket.sh"
# Seed content before DNS is switched to the new distribution.
(cd "$AHMA_SCRIPT_DIR/../ahma-site" && npm run lint && npm run build)
bash "$AHMA_SCRIPT_DIR/upload-website.sh"
bash "$AHMA_SCRIPT_DIR/deploy-ahmalattiat-website-cloudfront.sh"
