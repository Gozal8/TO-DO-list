// const { error } = require("node:console");
// const fileSystem = require("node:fs");
// const { readFile } = require("node:fs/promises");
// const { dirname } = require("node:path");

// console.log("Malumotlarni o'qish")

// const data = fileSystem.readFileSync("./files/data.txt", "utf-8");

// console.log(data);


// console.log(__dirname)

// const newUser = {
//     id: 19875,
//     name: "Gozal",
//     age: 19,
// };


// try {
//     const filePath = __dirname + "\\files\\newuser.json";

//     console.log(filePath);

//     fileSystem.appendFileSync(filePath,JSON.stringify(newUser,null,4))
//     // console.log(5+5)
// } catch (error) {
//   console.log(error, "Xatolar bor");
//  }


// try {
//     const userData = JSON.parse(readFile("./files/users.json"));

//     console.log(userData);
// }
// catch(error){
//     console.log(error, "err");
// }


// const fileSystem = require("node:fs");
// const { dirname } = require("node:path");

// console.log("Malumotlarni o'qish")

// const data = fileSystem.readFileSync("./files/data.txt", "utf-8");

// console.log(data);


// console.log(__dirname)

// const newUser = {
//     id: 19875,
//     name: "Gozal",
//     age: 19,
// };


// try {
//     const filePath = __dirname + "\\files\\newuser.json";

//     console.log(filePath);

//     fileSystem.appendFileSync(filePath,JSON.stringify(newUser,null,4))
//     // console.log(5+5)
// } catch (error) {
//   console.log(error, "Xatolar bor");
//  }r

// ==============amaliyot====================

const { createServer } = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    try {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello world');
    } catch (error) {
        console.log(error);
    }
})
server.listen(port, hostname, () => {
    console.log("Server 3000-portda ishga tushdi")
});


