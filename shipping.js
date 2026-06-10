

function calculateShippingCost(n)
{
   if (typeof n !== "number" || isNaN(n) || n < 0)
   {
    return null;
   }
    console.log(`the total basket/cart value : ${n}`);
    if (n>=5000)
    {
        console.log(`your purchasing is ${n} so the shipping cost is free`);
    }
    else if (n>2000 && n<4999.99)
    {
        console.log(`your purchasing is ${n} so the shipping cost is Rs. 150`);
    }
    else
    {
        console.log(`your purchasing is ${n} so the shipping cost is Rs. 300`);
    }
}
calculateShippingCost(500);

calculateShippingCost(1000); 
calculateShippingCost(2000);
calculateShippingCost(3000);
calculateShippingCost(6000);
calculateShippingCost("hello");