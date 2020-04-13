const connection = require('./connection.js');

const orm = {
    selectAll: (burgers, cb) => {
        const query = `SELECT * FROM ${burgers};`;
        connection.query(
            query,
            (err,results) => {
                if (err) throw err;
                cb(results);
            }
        )
    },
    insertOne: (table, cols, values, cb) => {
        const query = `INSERT INTO ${table} (${cols}) VALUES (${values});`;
        connection.query(
            query,
            (err,results) => {
                if (err) throw err;
                cb(results);
            }
        )
    },
    updateOne: (table, col, id, cb) => {
        const query = `UPDATE ${table} SET ${col} = true WHERE id = ${id};`;
        connection.query(
            query, 
            (err,results) => {
                if (err) throw err;
                cb(results);
            }
        )
    }   
}; 

module.exports = orm;