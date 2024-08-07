const statusCode = (message) => {
    let key = {
        "success": 200,
        "created": 201,
        "no content": 204,
        "bad request": 400,
        "un authorized": 401,
        "server error": 500
    }
    return key[message] || "Something went wrong!"
}

module.exports = { statusCode };