function processData(input) {
  const arr = input.split('\n');
  let phonebook = [];
  let queries = [];
  arr.forEach(str => {
    if (str === arr[0]) {
      return;
    } else if (str.includes(" ")) {
      let parts = str.split(" ");
      let entry = {
        name: parts[0],
        phoneNumber: parts[1]
      };
      phonebook.push(entry);
    } else {
      queries.push(str);
    }
  });
  
  queries.forEach(query => {
    let found = false;
    for(let i = 0; i < phonebook.length; i++) {
      if (query === phonebook[i].name) {
        found = true;
        console.log(phonebook[i].name + '=' + phonebook[i].phoneNumber);
        break;
      }
    }
    if (!found) {
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
