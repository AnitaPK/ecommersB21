const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');



router.post('/get',(req,res)=>{
    res.send('hello');
})
// Register User
router.post('/register', (req, res) => {
    const { name, email, dateOfBirth, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

insertQuery = 'INSERT INTO users (name, email, dateOfBirth, password) VALUES (?, ?, ?, ?)';

    db.query(insertQuery, 
    [name, email, dateOfBirth, hashedPassword],
     (err, results) => {
        if (err) return res.status(500).send('Server error');
        res.status(200).send('User registered successfully');
    });
});

module.exports = router;
