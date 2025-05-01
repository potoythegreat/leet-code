/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(!checkLen(s)){
    return false;
  }else{
    return isValidBracket(s);
  }
};

var checkLen = function(s){
  return s.length % 2 != 0 ? false : true; 
}

var isValidBracket = function(s){
  let isValid = true;
  for(let i = 0; i<s.length/2; i++){
    if(checkPair(s[i]) != ""){
      for(let j = s.length-i-1; j>i; j--){
        if(checkPair(s[i]) == s[j]){
          if((j-i)%2 == 0){
            console.log(j);
            console.log(i);
            console.log("a");
            return false
          }else{
            break;
          }
        }else{
          if(j == s.length-1){
            console.log("b");

            return false
          }
        }
      }
    }else{
      console.log(i);
      console.log("c");
      return false;
    }
  }
  return "isValid";
}



var checkPair = function(s){
  switch(s){
    case "(":
      return ")";
    case "{":
      return "}";
    case "[":
      return "]";
    default:
      return "";
  }
}

console.log(isValid("[)"));
