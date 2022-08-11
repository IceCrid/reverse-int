module.exports = function reverse (n) {
  const numberToAbs = Math.abs(n);
  const numberToString = numberToAbs.toString();
  const stringToArray = numberToString.split("");
  const reverseArray = stringToArray.reverse();
  const arrayToString = reverseArray.join("");
  return arrayToString;
}
