function countPrimeNumbers() {
  let count = 0;
  const prime = new Array(100).fill(true);

  for (let i = 2; i < 100; i++) {
    if (prime[i] === true) {
      count++;
      for (let j = 2; i * j < 100; j++) {
        prime[i * j] = false;
      }
    }
  }

  return count;
}

let t0 = performance.now();
for (let i = 0; i < 100; i++) {
  setTimeout(countPrimeNumbers, 0);
}
let t1 = performance.now();

console.log(
  `Execution time of calculating prime numbers 100 times was ${
    t1 - t0
  } milliseconds.`
);
