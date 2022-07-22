const {qldb, Ledger, DataTypes} = require('../config/connect');

const user = new Ledger(qldb, 'users', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.NUMBER,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    timestamps: true
});

module.exports = user;
