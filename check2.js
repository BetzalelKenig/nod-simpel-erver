// let myfile = require("./check");
// myfile.myprint();

// let events = require("events");
// let eventEmitter = new events.EventEmitter();

// //function for event handler
// let myEventHandler = (name) => {
//   console.log(`Hello ${name}!`);
// };

// // assign the function to the event
// eventEmitter.on("gretting", myEventHandler);

// // emit the event
// eventEmitter.emit("gretting", "Betzalel");

// var url = require('url');
// var adr = '<a href="http://localhost:8082/default.htm?year=2019&month=april">http://localhost:8082/default.htm?year=2019&month=april</a>';
// var q = url.parse(adr, true);
// console.log('host  ',q.host); //returns 'localhost:8082'

// console.log('pathnmae  ',q.pathname); //returns  %3Ca%20href=%22http://localhost:8082/default.htm
// console.log('search   ',q.search); //returns?year=2019&month=april%22%3Ehttp://localhost:8082/default.htm?year=2019&month=april%3C/a%3E

//  console.log('query  ',  q.query);  return  " [Object: null prototype] {
// //     year: '2019',
// //     month: [ 'april">http://localhost:8082/default.htm?year=2019', 'april</a>' ]"

// //Create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder created...");
// });

// //Create and write to file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World!",
//   (err) => {
//     if (err) throw err;
//     console.log("File written to...");

//     // File append
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       " I love Node.js",
//       (err) => {
//         if (err) throw err;
//         console.log("File written to...");
//       }
//     );
//   }
// );

// //Read file
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// //Rename file
// fs.rename(
//   path.join(__dirname, "/test", "hello.txt"),
//   path.join(__dirname, "/test", "helloworld.txt"),
//   (err) => {
//     if (err) throw err;
//     console.log("File renamed...");
//   }
// );

// let http = require("http");

// process.env.bali = 'humus';

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     if (process.env.bali === "humus") {
//       res.write("בא לי חומוס😀");
//     }
//     res.end();
//   })
//   .listen(8080);


let events = require("events");
let eventEmitter = new events.EventEmitter();

//function for event handler
let myEventHandler = (name) => {
  console.log(`Hello ${name}!`);
};

// assign the function to the event
eventEmitter.on("gretting", myEventHandler);

// emit the event
eventEmitter.emit("gretting", "Betzalel");
