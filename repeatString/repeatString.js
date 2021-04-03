const repeatString = function(str, num) {
    let reply = "";
    if (num < 0) {
        return "ERROR";
    }//end if
    if (!str) {
        return "";
    }//end if
    for (let i = 0; i < num; i++) {
        reply += str;
    }//end loop
    return reply;
}//end repeatString

module.exports = repeatString
