function palindrome(str) {
    var str = str.toLowerCase().split(/[^A-Za-z0-9]/gi).join('');
    var inter = str.split('');
    if (inter.join('') === inter.reverse().join('')){
      return true;
    }
  
    return false;
  }