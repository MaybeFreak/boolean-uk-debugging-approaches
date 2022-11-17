function factorial(n) {

  let product = 1

  while (n > 0) {
    product *= n
    n -= 1
  }
  return product
}

console.log(factorial(5))

// Expected output:
//
// > factorial(5)
// => 120
