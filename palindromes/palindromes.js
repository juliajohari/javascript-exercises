const lowerCaseArray = function() {
  let arr = [];
  for (let i = 97; i < 123; i++) {
    arr.push(i);
  }//end loop
  return arr;
}//end lowerCaseArray

const palindromes = function(inputString) {
  let str = inputString.toLowerCase();
  let arr = [];
  let reverseArr = [];
  let reply = true;
  for (let i = 0; i < inputString.length; i++) {
      if (lowerCaseArray().includes(str.charCodeAt(i))){
        arr.push(str.charCodeAt(i));
      }//end if
  }//end loop
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }//end loop
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != reverseArr[i]){
      reply = false;
    }//end if
  }//end loop
  return reply;
}//end palindromes

module.exports = palindromes
