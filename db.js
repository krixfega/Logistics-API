"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
var pg_1 = require("pg");
var pool = new pg_1.Pool({
    user: 'logistics_user',
    host: 'localhost',
    database: 'logistics',
    password: 'logistics_password',
    port: 5432,
});
exports.pool = pool;
