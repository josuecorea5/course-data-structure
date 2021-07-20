const inputArray = ['aba','aa','ad','vcd','aba'];

function allLongestStrings(inputArray) {
  const lenghs = inputArray.map(el => el.length);
  const longestString = Math.max(...lenghs);
  return inputArray.filter(el => el.length === longestString); 
}

console.log(allLongestStrings(inputArray))