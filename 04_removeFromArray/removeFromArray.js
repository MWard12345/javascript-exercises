const removeFromArray = function(array, stringToRemove, string2ToRemove = "", string3ToRemove = "", string4ToRemove = "" ) {
    const indexToRemove = array.indexOf(stringToRemove);
    if (indexToRemove !== -1) {
        array.splice(indexToRemove, 1);
    }
    const index2ToRemove = array.indexOf(string2ToRemove);
    if (index2ToRemove !== -1) {
        array.splice(index2ToRemove, 1);
    }
    const index3ToRemove = array.indexOf(string3ToRemove);
    if (index3ToRemove !== -1) {
        array.splice(index3ToRemove, 1);
    }
    const index4ToRemove = array.indexOf(string4ToRemove);
    if (index4ToRemove !== -1) {
        array.splice(index4ToRemove, 1);
    }
    return array;
};



//tests:
      //expect(removeFromArray([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
      //expect(removeFromArray([1, 2, 3, 4], 3, 2)).toEqual([1, 4]);
      //expect(removeFromArray([1, 2, 3, 4], 7, "tacos")).toEqual([1, 2, 3, 4]);
      //expect(removeFromArray([1, 2, 3, 4], 7, 2)).toEqual([1, 3, 4]);
      //expect(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)).toEqual([]);
      //expect(removeFromArray(["hey", 2, 3, "ho"], "hey", 3)).toEqual([2, "ho"]);
      //expect(removeFromArray([1, 2, 3], "1", 3)).toEqual([1, 2]);


// Do not edit below this line
module.exports = removeFromArray;
