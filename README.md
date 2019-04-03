1. get access token
curl --request POST \
  --url https://dev-xixf597q.eu.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"<client_id>","client_secret":"<client_secret>","audience":"https://AUTH0_URL/api/v2/","grant_type":"client_credentials"}'

2. use access token
curl --request GET \
  --url http://localhost:3000/home \
  --header 'authorization: Bearer < token >'
