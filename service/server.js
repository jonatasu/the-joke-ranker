const http = require('http');
const awsLambda = require('aws-lambda');

const redis = require('redis');
const client = redis.createClient();

client.on('connect', () => {
  console.log('Conectado ao Redis');
});

const server = http.createServer((req, res) => {
  const lambda = awsLambda.createServer({
    handler: (event, context) => {
      // Código do AWS Lambda aqui
    }
  });

  lambda.proxy(req, res);
});

server.listen(3000, () => {
  console.log('Servidor Node.js em execução na porta 3000');
});