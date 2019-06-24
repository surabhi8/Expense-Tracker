const setupServer = require('./src/server');

const server = setupServer();

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});