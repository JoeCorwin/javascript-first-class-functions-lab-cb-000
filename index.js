function countdown (callback) {
  window.setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue,n) {
  return () => parseInt(n,10) * parseInt(multiplierValue,10)
}

function multiplier() {


}
