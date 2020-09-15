const fs = require("fs");

arr = [{ id: "a" }, { id: "c" }];
id = "c";
arr.map((element, i) => {
  arr[i] = element.id === id ? { id: "b" } : element;
});
// console.log(arr);

// console.log(global);
// console.log(process);
// console.log(__filename);

fs.readFile('./hello.txt','utf8', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data);
})


const myprint = () => {
  console.log('Hani Yodeha NODEJS\nאני יודע NODEJS');
}
module.exports.myprint = myprint;