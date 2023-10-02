const findTheOldest = function(people) {

  let greatestAge = -1; // Initialize with a small value
  let personWithGreatestAge = null;
  
  const currentYear = new Date().getFullYear();

  for (const name of people) {
    const age = name.yearOfDeath ? name.yearOfDeath - name.yearOfBirth : currentYear - name.yearOfBirth;
  
    if (age > greatestAge) {
      greatestAge = age;
      personWithGreatestAge = name;
    }
  }
return personWithGreatestAge;
};




//return array.map((book) => book.title);
//You should return the whole person object
//, but the tests mostly just check to make
// sure the name is correct.

//This can be done with a couple of chained
// array methods, or by using reduce.
//One of the tests checks for people with 
//no death-date.. use JavaScript's 
//Date function to get their age as of today.
// Do not edit below this line
module.exports = findTheOldest;
