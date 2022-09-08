const newArray = [18, 25, 29, 32, 45, 48, 55];
const min = 26;

filterByMinimalNumber = (newArray, min) => newArray.filter(item => item > min);
const filteredArray = filterByMinimalNumber(newArray, min);
console.log(filteredArray);