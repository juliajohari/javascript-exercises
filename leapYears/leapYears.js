const leapYears = function(year) {
    let reply = false;
    if (year % 4 === 0 && year % 100 != 0 || (year % 100 === 0 && year % 400 === 0)) {
      reply = true;
    }//end if
    return reply;
}//end leapYears

module.exports = leapYears
