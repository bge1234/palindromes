function isPalindrome (text) {
  //convert to lowercase in order to ignore capitals
  var small = text.toLowerCase();
  //split into array
  var charArr = small.split('');
  //remove spaces
  for (var i = 0; i < charArr.length; i++) {
    if (charArr[i] === ' ')
      charArr.splice(i, 1);
  }
  //reverse
  var rev = charArr.reverse();
  //comparison
  if (rev.join('') === charArr.join(''))
    return true
  else
    return false;
};
