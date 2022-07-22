require("dotenv").config();
const express = require('express')
const {qldb, Ledger, DataTypes} = require('./config/connect');
const user = require('./models/user_schema')
//const data = require("./user.json")
//const createUser = require('./controllers/add')
const app = express()
app.use(express.json())

user.sync()
    .then(() =>{
        console.log('Table Added')
    })
    .catch((err) => {
        console.log(err)
    });

// the sync function is very useful, it checks if the table and indexes exist before adding them so we don't have to

async function createUser(data){
    let userResult = await user.add(data);
    if(userResult) return userResult;
    return false
}

/*async function getUser(){
    let result = await user.getBy({"" : ""});
    //console.log(result)
    if(result) return result;
    return false
}
*/
app.get('/users', (req, res) => {
    // returns all users as a response because args is empty
    user.getBy({"" : ""})
        .then(response =>{
            res.send(response);
        }) 
 });

app.post('/add', (req, res) => {
    // adds a user
    createUser(req.body)
    res.send('Success')
})


app.listen(3000);