const router = require('express').Router()
let Result = require('../models/result.model.js')

router.route('/').get((req,res)=>{
    Result.find()
        .then(result => res.json(result))
        .catch(err => res.status(400).json("Error: "+ err))
})

router.route('/add').post((req,res)=> {
    const newResult = new Result({
        username: req.body.username,
        prediction: req.body.prediction,
        pdist: req.body.pdist,
        class: req.body.class
    }) 
    newResult.save()
        .then(()=> res.json("Result added"))
        .catch(err => res.status(400).json("Error: "+ err))
})

router.route('/:id').get((req,res)=>{
    Result.findById(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.status(400).json("Error: "+err))
})

router.route('/:id').delete((req,res)=>{
    Result.findByIdAndDelete(req.params.id)
        .then(()=> res.json("Result deleted"))
        .catch(err => res.status(400).json("Error: "+err))
})

module.exports = router