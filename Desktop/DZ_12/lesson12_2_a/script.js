const newArray = [16, 18, 24, 27, 33, 47];
const min = 22;

filterByMinimalNumber = (newArray, min) => newArray.filter(item => item > min);
const filteredArray1 = filterByMinimalNumber(newArray, min);
console.log(filteredArray1);