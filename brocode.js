

const storeWorkspace =

 {
  id: "shop_88329",
  meta: 
  {
    businessName: "Persolyn Tech",
    location: "Kathmandu, Nepal",
    settings: {
    isSslEnabled: false,
    allowedCurrencies: ["NPR", "USD"],
    }
  },
  inventorySummary: {
    totalItemsCount: 450,
    categories: ["electronics", "peripherals"]
  }
};
console.log(storeWorkspace.meta.businessName)
    console.log( storeWorkspace.meta.settings.allowedCurrencies[1])

 
 storeWorkspace.meta.settings.isSslEnabled=true;
 storeWorkspace.inventorySummary.totalItemsCount +=50 ;
storeWorkspace.meta.settings.theme = "dark-mode";
storeWorkspace.meta.settings.theme