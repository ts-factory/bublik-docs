#!/bin/bash
# SPDX-License-Identifier: Apache-2.0
# SPDX-FileCopyrightText: 2024-2025 OKTET LTD
CWD=$(pwd)
BUBLIK_UI_DOCS_LOCATION=$BUBLIK_UI_DOCS_LOCATION

echo "------------------------"
echo "Current working directory: $CWD"
echo "Bublik DOCS location: $BUBLIK_UI_DOCS_LOCATION"
echo "------------------------"

rm -r "$CWD"/dist/*
mkdir -p "$CWD"/dist

JSON_ARRAY=$(cat "$CWD"/config.json | jq -c '.[]')

cd "$BUBLIK_UI_DOCS_LOCATION" || exit

while IFS= read -r ITEM; do
  BASE_URL=$(echo "$ITEM" | jq -r '.base')
  URL=$(echo "$ITEM" | jq -r '.url // "http://localhost"') # Default to localhost if URL is empty or null
  OUTPUT_FOLDER=$(echo "$ITEM" | jq -r '.output')

  echo "#############################################"
  echo -e "\e[1;34mStarting build for $BASE_URL\e[0m"
  echo -e "\e[1;34mURL for $URL\e[0m"
  echo -e "\e[1;33mOutput folder is $OUTPUT_FOLDER\e[0m"
  echo "#############################################"

  BASE_URL="$BASE_URL" URL="$URL" pnpm build && mv build ../dist/$OUTPUT_FOLDER && rm -rf ./build

done <<<"$JSON_ARRAY"
