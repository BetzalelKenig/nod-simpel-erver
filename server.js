let http = require("http");
let fs = require("fs");
let url = require("url");
let events = require("events");

let eventEmitter = new events.EventEmitter();

let server = http.createServer((req, res) => {
  r = JSON.stringify(req.headers);

  fs.appendFile("requests.log", r, "utf8", (err) => {});
  re = JSON.stringify(req.headers);

  fs.appendFile("respondes.log", re, "utf8", (err) => {});

  let q = url.parse(req.url, true);
  let filename = "." + q.pathname;
  fs.readFile(filename, (err, data) => {
    if (err) {
      fs.readFile("not-found.html", function (err, data) {
        res.writeHead(404, {
          "Content-Type": "text/html",
          "Access-Control-Allow-Origin": "*",
        });
        res.write(data);
        return res.end();
      });
    } else {
      switch (q.pathname.split(".")[-1]) {
        case "html":
          res.writeHead(200, {
            "Content-Type": "text/html",
            "Access-Control-Allow-Origin": "*",
          });
          break;
        case "css":
          eventEmitter.emit("add-css");
          break;
        case "json":
          res.writeHead(200, {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          });
          break;
      }

      res.write(data);
      return res.end();

      // console.log(typeof cssHandler(res));
    }
  });

  eventEmitter.on("add-css", cssHandler(res));
});
server.on("connection", (socket) => {
  //console.log(socket);
});
server.listen(8080);

function cssHandler(res) {
  return function () {
    return fs.readFile("style.css", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/css" });
      return data;
    });
  };
}
