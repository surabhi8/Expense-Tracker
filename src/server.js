'use strict';

const Hapi = require('hapi');

const setupServer = () => {

    const server = new Hapi.Server();

    server.connection({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply(`You say ping, I say d!`);
        }
    });

    return server;
};

module.exports = setupServer;