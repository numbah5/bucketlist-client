curl "http://localhost:4741/list-items" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "list-item": {
      "title": "'"${TITLE}"'",
      "description": "'"${DESCRIPTION}"'",
      "boolean": "'"${BOOL}"'"
    }
  }'

echo
