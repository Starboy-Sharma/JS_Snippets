const memoize = func => {
  const results = {};
  return (...args) => {
    const argsKey = JSON.stringify(args);
    if (!results[argsKey]) {
      results[argsKey] = func(...args);
    }
    return results[argsKey];
  };
};

const inefficientSquare = memoize(num => {
  let total = 0;
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      total++;
    }
  }
  return total;
});

const start = new Date();
inefficientSquare(40000);
console.log(new Date() - start);
// 1251

const start2 = new Date();
inefficientSquare(40000);
console.log(new Date() - start2);
// 0

// https://dev.to/nas5w/an-introduction-to-memoization-59o?utm_source=digest_mailer&utm_medium=email&utm_campaign=digest_email
