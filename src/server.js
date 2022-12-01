const http = require("http");
const app = require("./app");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
console.log("port: " + PORT);
server.listen(PORT, console.log(`Server is runing on port ${PORT}`));
