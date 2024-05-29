const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
const path = require('path');



router.post('/get',(req,res)=>{
    res.send('hello');
})
// Register User
router.post('/register', (req, res) => {
    console.log(req.body);
    const { name, email, dateOfBirth, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    console.log(hashedPassword);

insertQuery = 'INSERT INTO users (name, email, dateOfBirth, password) VALUES (?, ?, ?, ?)';

    db.query(insertQuery, 
    [name, email, dateOfBirth, hashedPassword],
     (err, results) => {
        if (err) return res.status(500).send('Server error');
        res.status(200).send('User registered successfully');
        if(results){
            console.log(results);
                res.redirect('/login');
        }
    });
});


// ***********Login User********************/

router.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public','login.html'));
    // res.render('login.ejs');
})

router.post('/login',(req,res)=>{
    console.log(req.body);

})



module.exports = router;
