const getTheTitles = function(books) {
    let result = [];
    for (let i = 0; i < books.length; i++) {
        result.push(books[i].title);
    }//end loop
    return result;
}//end getTheTitles

module.exports = getTheTitles;
