const express = require('express');
const router = express.Router();
const LoginHistory = require('../Model/loginHistory');

// GET all login history entries
router.get('/', (req, res) => {
    console.log("GET request to /login-history received");
    LoginHistory.find()
        .then(loginHistory => {
            console.log("Login history found: ", loginHistory);
            res.json(loginHistory);
        })
        .catch(err => {
            console.error("Error fetching login history: ", err);
            res.status(400).json('Error: ' + err);
        });
});

// POST login history entry (example)
router.post('/', (req, res) => {
    console.log("POST request to /login-history received");
    const { loginTime, browser, os, deviceType, ipAddress } = req.body;
    const newLoginEntry = new LoginHistory({
        loginTime: loginTime || Date.now(), // Use provided loginTime or default to curre
        browser,
        os,
        deviceType,
        ipAddress
    });

    newLoginEntry.save()
        .then(() => {
            console.log('Login history saved:', newLoginEntry);
            res.status(201).json('Login history saved');
        })
        .catch(err => {
            console.error('Error saving login history:', err);
            res.status(400).json('Error: ' + err);
        });
});

module.exports = router;
