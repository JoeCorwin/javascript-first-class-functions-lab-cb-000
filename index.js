function countdown (callback) {
  window.setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue) {
  return (n) => {
    return n * multiplierValue
  }
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);




function multiplier(n1, n2) {
  return n * i
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
