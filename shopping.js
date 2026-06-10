

function calculateTieredDiscount(unitPrice, quantity) {

  if (unitPrice <= 0 || quantity <= 0 || isNaN(unitPrice) ||isNaN(quantity)) 
    {
    return null;
    }

  let total = unitPrice * quantity;

  if (quantity >= 50 && quantity <= 99)
    {
    total = total - (total * 10 / 100);
    }
  else if (quantity >= 100 && quantity <= 499) 
    {
    total = total - (total * 20 / 100);
     }
  else if (quantity >= 500)
     {
    total = total - (total * 30 / 100);

    if (unitPrice * quantity > 100000) {
      total = total - 5000;
    }
  }

  return total.toFixed(2);
}

console.log(calculateTieredDiscount(1000, 75));
