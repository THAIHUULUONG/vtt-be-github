const User = require("../models/run/user")
const HesUser = require("../models/hes/hesUser")
const ErrorHandler = require("../utils/errorHandler")
const jwt = require('jsonwebtoken')

exports.isAuthenticatedUser = async (req, res, next) => {
    const { token } = req.headers;
    if(!token) {
        return next(new ErrorHandler('Login first to access this resource', 401))
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET) 
    req.user - await User.findById(decoded.id);

    next()
}

exports.isAuthenticatedHesUser = async (req, res, next) => {
    const { token } = req.headers;
    if(!token) {
        return next(new ErrorHandler('Login first to access this resource', 401))
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET) 
    req.user - await HesUser.findById(decoded.id);

    next()
}