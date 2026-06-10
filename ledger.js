
const activeTransactions =
 [

  { receiptId: "TX_01", totalBill: 1250 },
  { receiptId: "TX_02", totalBill: 3400 },
  { receiptId: "TX_03", totalBill: 900 },
  { receiptId: "TX_04", totalBill: 5100 }
];
const products = activeTransactions.reduce((acc , money)=> acc + money.totalBill , 0)
console.log(`Company ledger total balance: ${products}`);

