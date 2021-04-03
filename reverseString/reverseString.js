const reverseString = function(userInput) {
    let reverse = "";
    for (let i = userInput.length-1; i>=0; i--) {
        reverse += userInput.charAt([i]);
    }//end loop
    return reverse;
}//end reverseString

module.exports = reverseString
