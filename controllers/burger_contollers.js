const express = require('express');
const burger = require('../models/burgers');
const router = express.Router();

router.get(
    '/',
    (req, res) => {
        res.send('Hello World')
    }
)

router.get(
    '/all',
    (req, res) => {
        // console.log(req);
        // console.log(res);
        console.log('Here are the burgs!')
        burger.selectAll(
            results => {
                res.json(results)
            }
        )
    }
);

router.get(
    '/burgers/:burger_name',
    (req, res) => {
        console.log(req.params);
        // console.log(res);
        burger.insertOne(
            results => {
                res.json(results)
            },
            req.params.burger_name
        )
    }
)

router.get(
    '/burgers/:id',
    (req,res) => {
        // console.log(req);
        // console.log(res);
        const condition = `ID = ${req.params.id}.`
        console.log(condition);
        // console.log(req.params)
        burger.updateOne(
            results => {
                console.log(results);
            },
            req.params.id
        )
    }
)


module.exports = router;