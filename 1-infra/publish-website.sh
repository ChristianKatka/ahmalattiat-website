#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "$0")/common.sh"
bash "$AHMA_INFRA_DIR/upload-website.sh"
AHMA_DISTRIBUTION_ID="$(ahma_stack_output ahmalattiat-website-cloudfront "$AHMA_REGION" DistributionId)"
[[ "$AHMA_DISTRIBUTION_ID" != None && -n "$AHMA_DISTRIBUTION_ID" ]]
aws cloudfront create-invalidation --distribution-id "$AHMA_DISTRIBUTION_ID" --paths '/*'
