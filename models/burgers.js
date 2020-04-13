const orm = require('../config/orm');


const burger = {
    selectAll: (cb) => {
        orm.selectAll('burgers', (results)=> {
            cb(results)
        })
    }, 
    insertOne: (cb, burger_name) => {
        orm.insertOne('burgers', 'burger_name, devoured',`'${burger_name}', true`, (results) => {
            cb(results)
        })
    },
    updateOne: (cb, id) => {
        orm.updateOne('burgers', 'devoured', id, (results) => {
            cb(results)
        })
    }
}




module.exports = burger;

