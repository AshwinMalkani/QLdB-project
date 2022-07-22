require("dotenv").config();
const {qldbConnect, Ledger, DataTypes} = require('qldb-serialiser');

let qldbSettings = {
    maxConcurrentTransactions: 10,
    retryLimit: 4,
    region: process.env.aws_region,
    sslEnabled: true
};
let qldb = new qldbConnect("quick-start", qldbSettings);
qldb.getTableNames()
    .then(() => {
        console.log("Database has been connected")
    })
    .catch((err) => {
        console.log("Unable to connect to Database");
    });

module.exports = {
    qldb,
    Ledger,
    DataTypes
}