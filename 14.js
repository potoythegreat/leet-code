/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let strsIndex = 1;
  let strIndex = 0;
  let isNotDone = true;
  let currStr = "";
  let prevStr = strs[0][0];
  let commonPrefix = "";
  while(isNotDone){
    if(strs.length == 1){
      return strs[0];
    }
    if(strsIndex == strs.length){
      return commonPrefix;
    }
    if(strIndex == strs[strsIndex].length){
      return commonPrefix;
    }
    if(strs[strsIndex].length == 0){
      return commonPrefix;
    }
    currStr = strs[strsIndex][strIndex];
    if(currStr != prevStr){
      return commonPrefix;
    }else{
      if(strsIndex == strs.length-1){
        commonPrefix += currStr;
        strIndex ++;
        strsIndex = 1;
        prevStr = strs[0][strIndex];
      }else{
        strsIndex ++;
      }

    }
  }
};

let asd = longestCommonPrefix(["sdaf","sdaf","sdaf"]);
console.log(asd);
// console.log(longestCommonPrefix(["sd","sd","sd"]));