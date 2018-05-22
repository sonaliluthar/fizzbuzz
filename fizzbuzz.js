function fizzbuzz(numbers) {
  let newnums = numbers.map(function(number) {
    if (number % 15 == 0) {
      return "FizzBuzz";
    } else if (number % 5 == 0) {
      return "Buzz";
    } else if (number % 3 == 0) {
      return "Fizz";
    } else {
      return number;
    }
  });

  return newnums;
}

// here's a test case to see if you got it right
// DON'T CHANGE THIS
function test() {
  let arr = [];
  for (let i = 1; i < 101; i++) {
    arr.push(i);
  }
  let updatedArray = fizzbuzz(arr);
  updatedArray.forEach(element => {
    console.log(element);
  });
}

test();
