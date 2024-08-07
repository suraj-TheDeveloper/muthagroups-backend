const sendMessage = (res, statusCode, message) => {
    return res.status(statusCode).json(message);
}

module.exports = { sendMessage }