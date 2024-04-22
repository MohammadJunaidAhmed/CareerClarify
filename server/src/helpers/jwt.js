const { expressjwt: jwt } = require("express-jwt");
require('dotenv/config');


function authJwt() {
    const secret = process.env.SECRET;
    const api = process.env.API_URL;
    return jwt({
        secret,
        algorithms: ['HS256'],
        isRevoked: isRevoked
    }).unless({
        path: [
            // {url: /\/public\/uploads(.*)/ , methods: ['GET', 'OPTIONS'] },
            {url: `${api}/prof/login/`},
            {url: `${api}/exp/allcompanies/`},
            {url: `/api/v1/prof/getexp/662536f877ecdfa33a8105b2`}, //TODO: REMOVE THIS. ONLY FOR TESTING PURPOSE
            {url: `/^\/api\/v1\/exp\/(.*)$/`, methods: ['DELETE']}, //TODO: REMOVE THIS. ONLY FOR TESTING PURPOSE
            `${api}/exp/unqcompanies`,
            `${api}/prof/register`,
        ]
    })
}

async function isRevoked(req, jwt) {

    const payload = jwt.payload
    // if(req.method == 'POST'){
    //     return true;
    // }
    // if (req.method === 'POST' && req.originalUrl.startsWith(`localhost:3000${process.env.api}/products`)) { //You can freely see products TODO: Remove this
    //   return true
    // }
    return false
  }



module.exports = authJwt