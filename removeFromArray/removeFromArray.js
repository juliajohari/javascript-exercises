const removeFromArray = function(arrayInput, ...numberInput) {
    let finalArray = [];
    for (let i = 0; i < arrayInput.length; i++) {
        if (!numberInput.includes(arrayInput[i])) {
            finalArray.push(arrayInput[i]);
        }//end if
    }//end loop
    return finalArray;
}//end removeFromArray

module.exports = removeFromArray
