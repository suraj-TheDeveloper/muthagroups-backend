require("dotenv").config({});
const http = require("http");
const app = require("./app");

const port = 4000 || process.env.PORT

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on ${process.env.HOST}:${process.env.PORT}`)
})