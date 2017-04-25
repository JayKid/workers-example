'use strict';

let currentIndex = 1;
const UPPER_BOUND = 10000000;
let numbersToPrimes = new Array(UPPER_BOUND).fill(true);
let primes = [];

while (currentIndex < Math.sqrt(UPPER_BOUND)) {
  ++currentIndex;
  if (numbersToPrimes[currentIndex]) {
    for (let multiple = currentIndex*currentIndex; multiple <= UPPER_BOUND; multiple += currentIndex) {
      numbersToPrimes[multiple] = false;
    }
  }
}

numbersToPrimes.map(function (elementValue, index) {
  if(elementValue) {
    primes.push(index);
  };
});

postMessage({ primes: primes });
