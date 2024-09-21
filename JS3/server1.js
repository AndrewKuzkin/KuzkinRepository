import { Server } from 'node:http';
Server((req, res) => res.end('Good morning!')).listen(1234);