function countdown (callback) {
  window.setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue,n) {
  return () => n * multiplierValue
}

function multiplier() {


}
