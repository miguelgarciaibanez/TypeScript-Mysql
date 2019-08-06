import mysql = require('mysql');

export default class MySQL {

    private static _instance: MySQL; //Singleton

    cnn:mysql.Connection;

    connected: boolean = false;

    constructor (  ) {
        console.log('class initialized');

        this.cnn = mysql.createConnection({
            host     : 'localhost',
            user     : 'node_user',
            password : '123456',
            database : 'node-db'
        });
        this.connectDB();

    }

    public static get instance() {
        return this._instance || (this._instance = new this() );
    }

    static executeQuery ( query: string, callback: Function) {

        this.instance.cnn.query(query, ( err, results: Object[], fields) =>{

            if ( err ) {
                console.log('Error in query');
                console.log(err);
                return callback( err );
            }

            if ( results.length === 0 ){
                callback('Requested record does not exist');
            }

            callback( null, results );

        });

    }


    private connectDB () {
        this.cnn.connect( ( err: mysql.MysqlError ) => {
            if ( err ){
                console.log(err.message);
                return;
            } else {
                this.connected = true;
                console.log('BD online');
            }
        });
    }
}