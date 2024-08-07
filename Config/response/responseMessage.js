const responseMessage = (message) => {
    let key = {
        "loginSucc": "Logged In Successfully",
        "inValidPass": "Password Is Invalid",
        "inValidMail": "Email Is Invalid",
        "ServerError": "Internal Server Error"
    }
    return key[message] || "Something went wrong!"
}

module.exports = { responseMessage }