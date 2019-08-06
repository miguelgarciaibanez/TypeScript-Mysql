"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MySQL {
    constructor() {
        this.connected = false;
        console.log('class initialized');
        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'node_user',
            password: '123456',
            database: 'node-db'
        });
        this.connectDB();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    static executeQuery(query, callback) {
        this.instance.cnn.query(query, (err, results, fields) => {
            if (err) {
                console.log('Error in query');
                console.log(err);
                return callback(err);
            }
            if (results.length === 0) {
                callback('Requested record does not exist');
            }
            callback(null, results);
        });
    }
    connectDB() {
        this.cnn.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            else {
                this.connected = true;
                console.log('BD online');
            }
        });
    }
}
exports.default = MySQL;
