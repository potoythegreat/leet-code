/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    if(s.length == 1){
      return getIntVal(s);
    }

    let intVal = 0;

    for(let i = 0; i < s.length; i++){
      if(i == s.length-1){
        intVal = intVal + getIntVal(s[i]);
        return intVal;
      }else{
        if(getIntVal(s[i]) < getIntVal(s[i+1])){
          intVal += getIntVal(s[i+1]) - getIntVal(s[i]);
          if(i+1 == s.length-1){
            return intVal;
          }
          i++;
        }else{
          intVal += getIntVal(s[i]);

        }

      }
    }
};

var getIntVal = function(l){
    switch(l){
      case "I":
        return 1
      case "V":
        return 5
      case "X":
        return 10
      case "L":
        return 50
      case "C":
        return 100
      case "D":
        return 500
      case "M":
        return 1000
    }
}

console.log(romanToInt("LVIII"));
