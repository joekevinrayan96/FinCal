var amount = 500;
var profit = 0;
var period = 120;
var invest = amount * period;
var totalamount = 0;
var totalincome = 0;

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calculate = () => {
  for (var i = 1; i <= period; i++) {
    profit = amount * 0.1;
    totalamount = amount + profit;

    if (i === 12) {
      if (totalamount > 18200 && totalamount < 45000) {
        totalamount = totalamount - 0.19 * (totalamount - 18200);
      } else if (totalamount > 45000 && totalamount < 120000) {
        totalamount = totalamount - (0.325 * (totalamount - 45000) + 10184);
      } else if (totalamount > 120000 && totalamount < 180000) {
        totalamount = totalamount - (0.37 * (totalamount - 120000) + 64026);
      } else if (totalamount > 180000) {
        totalamount = totalamount - (0.45 * (totalamount - 180000) + 86226);
      }
    }
    if (i === 24) {
      if (totalamount > 18200 && totalamount < 45000) {
        totalamount = totalamount - 0.19 * (totalamount - 18200);
      } else if (totalamount > 45000 && totalamount < 120000) {
        totalamount = totalamount - (0.325 * (totalamount - 45000) + 10184);
      } else if (totalamount > 120000 && totalamount < 180000) {
        totalamount = totalamount - (0.37 * (totalamount - 120000) + 64026);
      } else if (totalamount > 180000) {
        totalamount = totalamount - (0.45 * (totalamount - 180000) + 86226);
      }
    }
    if (i === 36) {
      if (totalamount > 18200 && totalamount < 45000) {
        totalamount = totalamount - 0.19 * (totalamount - 18200);
      } else if (totalamount > 45000 && totalamount < 120000) {
        totalamount = totalamount - (0.325 * (totalamount - 45000) + 10184);
      } else if (totalamount > 120000 && totalamount < 180000) {
        totalamount = totalamount - (0.37 * (totalamount - 120000) + 64026);
      } else if (totalamount > 180000) {
        totalamount = totalamount - (0.45 * (totalamount - 180000) + 86226);
      }
    }
    if (i === 48) {
      if (totalamount > 18200 && totalamount < 45000) {
        totalamount = totalamount - 0.19 * (totalamount - 18200);
      } else if (totalamount > 45000 && totalamount < 120000) {
        totalamount = totalamount - (0.325 * (totalamount - 45000) + 10184);
      } else if (totalamount > 120000 && totalamount < 180000) {
        totalamount = totalamount - (0.37 * (totalamount - 120000) + 64026);
      } else if (totalamount > 180000) {
        totalamount = totalamount - (0.45 * (totalamount - 180000) + 86226);
      }
    }
    if (i === 60) {
      if (totalamount > 18200 && totalamount < 45000) {
        totalamount = totalamount - 0.19 * (totalamount - 18200);
      } else if (totalamount > 45000 && totalamount < 120000) {
        totalamount = totalamount - (0.325 * (totalamount - 45000) + 10184);
      } else if (totalamount > 120000 && totalamount < 180000) {
        totalamount = totalamount - (0.37 * (totalamount - 120000) + 64026);
      } else if (totalamount > 180000) {
        totalamount = totalamount - (0.45 * (totalamount - 180000) + 86226);
      }
    }
    if (i === 72) {
      if (totalamount > 18200 && totalamount < 45000) {
        totalamount = totalamount - 0.19 * (totalamount - 18200);
      } else if (totalamount > 45000 && totalamount < 120000) {
        totalamount = totalamount - (0.325 * (totalamount - 45000) + 10184);
      } else if (totalamount > 120000 && totalamount < 180000) {
        totalamount = totalamount - (0.37 * (totalamount - 120000) + 64026);
      } else if (totalamount > 180000) {
        totalamount = totalamount - (0.45 * (totalamount - 180000) + 86226);
      }
    }
    if (i === 84) {
      if (totalamount > 18200 && totalamount < 45000) {
        totalamount = totalamount - 0.19 * (totalamount - 18200);
      } else if (totalamount > 45000 && totalamount < 120000) {
        totalamount = totalamount - (0.325 * (totalamount - 45000) + 10184);
      } else if (totalamount > 120000 && totalamount < 180000) {
        totalamount = totalamount - (0.37 * (totalamount - 120000) + 64026);
      } else if (totalamount > 180000) {
        totalamount = totalamount - (0.45 * (totalamount - 180000) + 86226);
      }
    }
    if (i === 96) {
      if (totalamount > 18200 && totalamount < 45000) {
        totalamount = totalamount - 0.19 * (totalamount - 18200);
      } else if (totalamount > 45000 && totalamount < 120000) {
        totalamount = totalamount - (0.325 * (totalamount - 45000) + 10184);
      } else if (totalamount > 120000 && totalamount < 180000) {
        totalamount = totalamount - (0.37 * (totalamount - 120000) + 64026);
      } else if (totalamount > 180000) {
        totalamount = totalamount - (0.45 * (totalamount - 180000) + 86226);
      }
    }
    if (i === 108) {
      if (totalamount > 18200 && totalamount < 45000) {
        totalamount = totalamount - 0.19 * (totalamount - 18200);
      } else if (totalamount > 45000 && totalamount < 120000) {
        totalamount = totalamount - (0.325 * (totalamount - 45000) + 10184);
      } else if (totalamount > 120000 && totalamount < 180000) {
        totalamount = totalamount - (0.37 * (totalamount - 120000) + 64026);
      } else if (totalamount > 180000) {
        totalamount = totalamount - (0.45 * (totalamount - 180000) + 86226);
      }
    }
    if (i === 120) {
      if (totalamount > 18200 && totalamount < 45000) {
        totalamount = totalamount - 0.19 * (totalamount - 18200);
      } else if (totalamount > 45000 && totalamount < 120000) {
        totalamount = totalamount - (0.325 * (totalamount - 45000) + 10184);
      } else if (totalamount > 120000 && totalamount < 180000) {
        totalamount = totalamount - (0.37 * (totalamount - 120000) + 64026);
      } else if (totalamount > 180000) {
        totalamount = totalamount - (0.45 * (totalamount - 180000) + 86226);
      }
    }
    amount = totalamount + 500;
  }
  var numb = totalamount.toFixed(2);
  console.log(numb);
  console.log(invest);
};

calculate();
