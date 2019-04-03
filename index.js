require('dotenv').config();

const express = require('express');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const app = express();
const port = 3000;

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `${process.env.ISSUER}.well-known/jwks.json`
    }),
    audience: process.env.AUDIENCE, // api identifier
    issuer: process.env.ISSUER,
    algorithms: ['RS256']
  });

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/home', checkJwt, (req, res) => res.send('Hello Secret World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
