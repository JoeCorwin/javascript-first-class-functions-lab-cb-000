function countdown (callback) {
  window.setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue,n) {
  return () => parseInt(n) * parseInt(multiplierValue)
}

function multiplier() {


}
