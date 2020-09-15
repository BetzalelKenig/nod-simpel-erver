let http = require("http");
let fs = require("fs");
let url = require("url");

let server = http.createServer(function (req, res) {
  let q = url.parse(req.url, true);
  r = JSON.stringify(req.headers);

  fs.appendFile("requests.log", r, "utf8", (err) => {});
  re = JSON.stringify(req.headers);

  fs.appendFile("respondes.log", re, "utf8", (err) => {});

  if (q.pathname == "/api") {
    res.writeHead(200, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
    switch (q.query.type) {
      case "getTodoList":
        res.write(readTodo());
        return res.end();
      case "getTodo":
        let list = JSON.parse(readTodo());
        res.write(JSON.stringify(list.filter((t) => t.id === q.query.id)[0]));
        return res.end();
      case "addTodo":
        let list2 = JSON.parse(readTodo());
        list2.push(q.query.newTodo);
        writeTodo(list2);
        return res.end();
      case "updateTodo":
        let list3 = JSON.parse(readTodo());
        list3.map(
          (td, i) => (list3[i] = td.id === q.query.id ? q.query.newTodo : td)
        );
        writeTodo(list3);
        return res.end();
      case "deleteTodo":
        let list4 = JSON.parse(readTodo());
        list4 = list4.filter((td) => td.id !== id);
        writeTodo(list4);
        return res.end();

      default:
        return res.end();
    }
  }
});

server.listen(8080);

readTodo = () => {
  return fs.readFileSync("todo.json", "utf8", (err, data) => {
    if (err) {
      throw err;
    }

    return data;
  });
};

writeTodo = (todoList) => {
  fs.writeFile("todo1.json", JSON.stringify(todoList), (err) => {
    if (err) throw err;
  });
};
