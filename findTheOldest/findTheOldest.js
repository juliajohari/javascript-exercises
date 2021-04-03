let findTheOldest = function(people) {
    let oldest = people[0];
      for (let i = 0; i < people.length; i++) {
              if (!people[i].yearOfDeath) {
                  people[i].age = 2021 - people[i].yearOfBirth
              } else {
                  people[i].age = people[i].yearOfDeath - people[i].yearOfBirth;
              }//end else
              if (oldest.age < people[i].age) {
                  oldest = people[i];
              }//end if
      }//end i loop
      return oldest;
  }//end findTheOldest

module.exports = findTheOldest
