function binaryAgent(str) {
  const myStr = str.split(" ")
  const newArr = [];
  for (let i = 0; i < myStr.length; i++) {
    newArr.push(String.fromCharCode(parseInt(myStr[i], 2)))
  }
  return newArr.join("")
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

          //soln
         //Aren't bonfires fun!?
