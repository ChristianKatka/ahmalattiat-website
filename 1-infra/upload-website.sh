#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "$0")/common.sh"
ahma_check_account
AHMA_DIST_DIR="$AHMA_INFRA_DIR/../ahma-site/dist"
[[ -f "$AHMA_DIST_DIR/index.html" ]] || { echo 'Run npm run build in ahma-site first.' >&2; exit 1; }
# Upload assets before the entry point. Keep older assets for open browser sessions.
aws s3 sync "$AHMA_DIST_DIR/assets/" "s3://$AHMA_BUCKET/assets/" --region "$AHMA_REGION" \
  --cache-control 'public,max-age=31536000,immutable'
aws s3 sync "$AHMA_DIST_DIR/" "s3://$AHMA_BUCKET/" --region "$AHMA_REGION" \
  --exclude 'assets/*' --exclude 'index.html' --cache-control 'public,max-age=3600'
aws s3 cp "$AHMA_DIST_DIR/index.html" "s3://$AHMA_BUCKET/index.html" --region "$AHMA_REGION" \
  --content-type text/html --cache-control 'no-cache,max-age=0,must-revalidate'
