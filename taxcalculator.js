const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const taxCalculator = () => {
  rl.question("what's your annual income? : ", function (totalamount) {
    // totalamount = +totalamount;
    if (totalamount > 18200 && totalamount < 45000) {
      totalamount = totalamount - 0.19 * (totalamount - 18200);
    } else if (totalamount > 45000 && totalamount < 120000) {
      //   totalamount = totalamount - ((32.5 * (income-))+5092+())
      totalamount =
        totalamount - (0.325 * (totalamount - 45000) + 0.19 * 26800 + 5092);
    } else if (totalamount > 120000 && totalamount < 180000) {
      totalamount =
        totalamount -
        (0.37 * (totalamount - 120000) + 0.325 * 75000 + 0.19 * 26800 + 29467);
    } else if (totalamount > 180000) {
      totalamount =
        totalamount -
        (0.45 * (totalamount - 180000) +
          0.37 * 60000 +
          0.325 * 75000 +
          0.19 * 26800 +
          29467);
    }
    console.log(typeof totalamount);
    console.log(totalamount);
  });
};

taxCalculator();
