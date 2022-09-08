const increasedArray = [16, 19, 27, 29, 35,41];

function increaseNumbersByOne(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i]++;
    }
    return (numbers);
}
const increasdArray = increaseNumbersByOne(increasedArray);
console.log(increasdArray);