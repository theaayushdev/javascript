const convertCurrency = (baseAmount,exchangeRate,targetCurrencySymbol = "NPR") => 
    {
    baseAmount = parseFloat(baseAmount);
    exchangeRate = parseFloat(exchangeRate);

  if (isNaN(baseAmount) || isNaN(exchangeRate))
     {
    return "invalid money";
  }

  const convertedAmount = baseAmount * exchangeRate;

  return console.log(`${targetCurrencySymbol} ${convertedAmount.toFixed(2)}`);
};

console.log(convertCurrency(100, 134.5));
console.log(convertCurrency("100", "134.5"));
console.log(convertCurrency(100, 134.5, "USD"));
console.log(convertCurrency("abc", 134.5));
