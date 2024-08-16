// Initialize the array
let numbers = [5, 3, 8, 1, 2];

// Function to add a number to the array
function addNumber(array, number) {
    array.push(number);
}

// Function to remove a number from the array
function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index !== -1) {
        array.splice(index, 1);
    } else {
        console.log('Number not found in the array.');
    }
}

// Function to sort the numbers in ascending order
function sortNumbers(array) {
    return array.slice().sort((a, b) => a - b);
}

// Function to calculate the sum of the numbers
function calculateSum(array) {
    return array.reduce((sum, current) => sum + current, 0);
}

// Function to calculate the average of the numbers
function calculateAverage(array) {
    if (array.length === 0) return 0;
    const sum = calculateSum(array);
    return sum / array.length;
}

// Main Program
console.log('Initial array:', numbers);

console.log('After adding 4:');
addNumber(numbers, 4);
console.log(numbers);

console.log('After removing 3:');
removeNumber(numbers, 3);
console.log(numbers);

console.log('Sorted array:');
const sortedArray = sortNumbers(numbers);
console.log(sortedArray);

console.log('Sum of numbers:');
const sum = calculateSum(numbers);
console.log(sum);

console.log('Average of numbers:');
const average = calculateAverage(numbers);
console.log(average);
