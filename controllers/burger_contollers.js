const express = require('express');
const burger = require('../models/burgers');
const router = express.Router();

router.get(
    '/',
    (req,res) => {
        res.send('Hello World')
    }
)

router.get(
    '/all',
    (req,res) => {
        burger.selectAll( results => {
            res.json(results)
        })
    }
);

router.post(
    '/insert/:burgerName',
    (req,res) => {
        burger.insertOne(
            results => res.json(results),
            burgerName
        )
    }
)


module.exports = router;