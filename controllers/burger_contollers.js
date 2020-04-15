const express = require('express');
const burger = require('../models/burgers');
const router = express.Router();

// router.get(
//     '/',
//     (req, res) => {
//         res.send('Hello World')
//     }
// )

router.get(
    '/api/all',
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

router.post(
    '/api/burgers/add',
    (req, res) => {
        // console.log(req.params);
        console.log(req.body);
        burger.insertOne(
            req.body.burger_name,
            results => {
                res.json(results)
            }
        )
    }
);

router.put(
    '/api/burgers/:id',
    (req,res) => {
        // console.log(req);
        // console.log(res);
        const condition = `ID = ${req.params.id}.`
        console.log(condition);
        // console.log(req.params)
        burger.updateOne(
            req.params.id,
            results => {
                console.log(results);
                res.json(results);
            }
        )
    }
);

router.get('/',(req,res) => {
    
    burger.selectAll(results => {
        const renderObject = {
            'burgers': results
        }
        res.render('index', renderObject)
    })
    
})

module.exports = router;