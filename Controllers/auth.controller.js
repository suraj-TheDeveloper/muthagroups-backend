// services
const { sendMessage, responseMessage,  statusCode, findData, findOne, Insert, update, deleteData } = require("../Config");

// models
const AuthModel = require("../models/admin.model");

// packages
const bcrypt = require("bcryptjs");

exports.login = async (req, res) => {
    try {
        const data = req.body;
        let findEmail = await findOne(AuthModel, { email: data.email });
        console.log("findEmail", findEmail);
        // let response = { status: true, message: insertData }
        // return response;
    } catch (err) {
        let response = { status: false, message: responseMessage("ServerError") };
        return sendMessage(res, statusCode("server error"), response);
    }
}

exports.forgotPassword = async (req, res) => {
    try {
        
    } catch (err) {
        let response = { status: false, message: responseMessage("ServerError") };
        return sendMessage(res, statusCode("server error"), response);
    }
}

exports.resetPassword = async (req, res) => {
    try {
        
    } catch (err) {
        let response = { status: false, message: responseMessage("ServerError") };
        return sendMessage(res, statusCode("server error"), response);
    }
}