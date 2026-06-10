const formatCurrency = (amountValue, currencySign) => {
    if (typeof amountValue !== "number") {
        return "Error: only numbers allowed";
    }

    return `${currencySign} ${amountValue}`;
};
console.log(formatCurrency("100000" , "rs"));   