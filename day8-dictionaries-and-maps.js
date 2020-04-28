function processData(input) {
  const arr = input.split('\n');
  let phonebook = [];
  let queries = [];
  arr.forEach(str => {
    if (str === arr[0]) {
      return;
    } else if (str.includes(" ")) {
      let parts = str.split(" ");

      phonebook.push(parts);
    } else {
      queries.push(str);
    }
  });
  
  let myPhonebook = new Map(phonebook);

  queries.forEach(query =>{
    if (myPhonebook.has(query)) {
      console.log(query + "=" + myPhonebook.get(query));
    } else {
      console.log('Not found');
    }
  });
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
