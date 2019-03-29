curl "http://localhost:4741/list-items/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "listItem": {
      "title": "'"${TITLE}"'",
      "description": "'"${DESCRIPTION}"'",
      "boolean": "'"${BOOLEAN}"'"
    }
  }'

echo
