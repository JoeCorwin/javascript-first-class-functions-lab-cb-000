function countdown (callback) {
  window.setTimeout(callback, 2000);
}

// function createMultiplier(multiplierValue,n) {
//   var num = Number(n);
//   var mult = Number(multiplierValue);
//   return () => num * mult
// }


function createMultiplier(multiplierValue,n) {
  return () => {
    var num = Number(n);
    var mult = Number(multiplierValue);
    num * mult
  }
  
}



function multiplier() {


}
