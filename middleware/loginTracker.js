// middleware/loginTracker.js

const useragent = require('express-useragent');
const LoginHistory = require('../Model/loginHistory');

const loginTracker = (req, res, next) => {
    const { browser, os, isMobile } = req.useragent;
    const deviceType = isMobile ? 'Mobile' : 'Desktop';
    const ipAddress = req.ip;
    const loginTime = new Date();

    const loginInfo = new LoginHistory({
        loginTime,
        browser,
        os,
        deviceType,
        ipAddress
    });

    loginInfo.save()
        .then(() => next())
        .catch(err => {
            console.error('Error saving login info:', err);
            next(err); // Pass error to the error handler middleware
        });
};

module.exports = loginTracker;
