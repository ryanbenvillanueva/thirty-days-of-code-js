function processData(input) {
  const arr = input.split('\n');
   
  for (let i = 1; i < arr.length; i++) {
    let str = arr[i];
    let even = "";
    let odd = "";
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 === 0) {
        even += str[j];
      } else {
        odd += str[j];
      }
    }
    console.log(even + " " + odd);
  }
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
