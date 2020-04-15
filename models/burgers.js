const orm = require('../config/orm');


const burger = {
    selectAll: (cb) => {
        orm.selectAll('burgers', (results)=> {
            cb(results)
        })
    }, 
    insertOne: (burger_name, cb) => {
        orm.insertOne('burgers', 'burger_name, devoured',`'${burger_name}', false`, (results) => {
            cb(results)
        })
    },
    updateOne: (id, cb) => {
        orm.updateOne('burgers', 'devoured', id, (results) => {
            cb(results)
        })
    }
}




module.exports = burger;

