const sumAll = function(integer1, integer2) {
    if (((typeof integer1) != "number") || ((typeof integer2) != "number") || ((integer1 <= 0) || (integer2 <= 0))) {
        return "ERROR";
    }//end guard clause

    let smallerNumber = integer1;
    let biggerNumber = integer2;
    let sum = 0;

    if (integer2 < integer1) {
        smallerNumber = integer2;
        biggerNumber = integer1;
    }//end if
    for (i = 0; i <= biggerNumber - smallerNumber; i++) {
        sum += smallerNumber + i;
    }//end loop
    return sum;
}//end sumAll

module.exports = sumAll
