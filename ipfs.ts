var ipfsClient = require('ipfs-http-client');
var exampleCID = 'QmS4ustL54uo8FzR9455qaxZwuMiUhyvMcX9Ba8nUH4uVv';
var jwt = process.env.TEMPORAL_JWT;
// specify how we will connect the ipfs client
var ipfs = ipfsClient({
    // the hostname (or ip address) of the endpoint providing the ipfs api
    host: 'dev.api.ipfs.temporal.cloud',
    // the port to connect on
    port: '443',
    'api-path': '/api/v0/',
    // the protocol, https for security
    protocol: 'https',
    headers: {
        authorization: 'Bearer ' + jwt
    }
});

let resval: any;

ipfs.dag.get(exampleCID, function (err, response) {
    if (err) {
        console.error(err);
        return
    }
    resval = response.value;
    console.log(response);
})

console.log(resval);