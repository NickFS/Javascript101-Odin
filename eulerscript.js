function multiples() {
  var suma = 0;
  var inputTaker = document.getElementById('textToChange').value;
  for (var i = 1; i < inputTaker; i++) {

    if ((i % 5 === 0) || (i % 3 === 0)) {
      suma += i;
      document.getElementById('paragraph').innerHTML = suma;

    }
  }
}

function evenFibonacci() {

  var inputTaker = parseInt(document.getElementById('textToChange2').value);

  var sumEven = 0;
  var a = 2;
  var b = 1;
  var b1 = 1;

  while (a < inputTaker) {

    if (a % 2 === 0) {

      sumEven += a;
    }

    b = b1;
    b1 = a;
    a = a + b;

  }
  document.getElementById('paragraph2').innerHTML = sumEven;

}

function sieve(n) {
  var a = new Int8Array(n + 1);
  var max = Math.floor(Math.sqrt(n));
  var p = 2;
  var prime_factors = [];
  var original_n = n;
  while (p <= max) {
    for (var i = 2 * p; i <= n; i += p)
      a[i] = 1;
    while (a[++p]);
  }
  while (n > 1) {
    if (!a[n] && original_n % n === 0) {
      prime_factors.push(n);
    }
    n--;
  }
  return prime_factors;

}

var prime_factors = function() {
  var input3 = document.getElementById("problem3_input");
  var array_answer = document.getElementById("answer3_array");
  var answer3 = document.getElementById("answer3");
  var result = sieve(parseInt(input3.value));
  array_answer.innerHTML = result;
  var max = 0;
  result.forEach(function(i) {
    if (max < i) {
      max = i;
    }
  });
  answer3.innerHTML = max;
};
