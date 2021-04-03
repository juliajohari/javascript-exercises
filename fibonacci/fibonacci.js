const fibonacci = function(numberInput) {
    let fibonacciArray = [1, 1];
    let reply = 1;
    if (parseInt(numberInput) <= 0) {
        return "OOPS"
    }//end guard clause
    for (let i = 3; i <= parseInt(numberInput); i++) {
        reply += fibonacciArray[i-3];
        fibonacciArray.push(reply);
    }//end loop
    return reply;
}//end fibonacci

module.exports = fibonacci
