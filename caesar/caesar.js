//Notes RE: Unicode:
//64 < A to Z < 91;
//90 < 6 punctuation symbols < 97
//96 < a to z < 123

//we want punctuation and spaces to remain punctuation and spaces

//we want Upper Case letters to remain Upper Case letters, and lower Case letters to remain Lower Case letters.

const capitalsArray = function() {
    let reply = [];
    for (let i = 65; i < 91; i++) {
      reply.push(i);
    }//end loop
    return reply;
  }//end capitalsArray
  
  const lowerCaseArray = function() {
    let reply = [];
    for (let i = 97; i < 123; i++) {
      reply.push(i);
    }//end loop
    return reply;
  }//end lowerCaseArray
  
  const caesar = function(inputString, cipher) {
      let reply = "";
      let newLetter = "";
      if (cipher > 26) {
        cipher = cipher % 26;
      }//end if
      for (let i = 0; i < inputString.length; i++) {
        let uniValue = inputString.charCodeAt(i) + cipher;
          if (capitalsArray().includes(inputString.charCodeAt(i))) {
            if (uniValue > 90) {
              uniValue -= 26;
            }//end if
            if (uniValue < 65) {
              uniValue += 26;
            }//end if
            newLetter = String.fromCharCode(uniValue);
          } else if (lowerCaseArray().includes(inputString.charCodeAt(i))) {
            if (uniValue > 122) {
              uniValue -= 26;
            }//end if
            if (uniValue < 97) {
              uniValue += 26;
            }//end if
            newLetter = String.fromCharCode(uniValue);
          } else {
              newLetter = inputString[i];
          }//end else
          reply += newLetter;
      }//end loop
      return reply;
  }//end caesar

module.exports = caesar
