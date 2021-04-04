const ftoc = function(inputTemp) {
  return parseFloat(((inputTemp - 32) * 5/9).toFixed(1));
}//end ftoc

const ctof = function(inputTemp) {
  return parseFloat(((inputTemp * 9/5) + 32).toFixed(1));
}//end ctof

module.exports = {
  ftoc,
  ctof
}
