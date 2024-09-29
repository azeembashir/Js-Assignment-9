var numbers = [1, 2, 3, 5]; 


var n = numbers.length + 1; 
var expectSum = (n * (n + 1)) / 2;


var actualSum = 0;
for (var i = 0; i < numbers.length; i++) {
    actualSum += numbers[i];
}


var missingNumber = expectSum - actualSum;

console.log(missingNumber);