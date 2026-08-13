const data={products:0,customers:0,invoices:0};
document.getElementById("add").onclick=()=>{
  data.products=12; data.customers=8; data.invoices=5;
  for(const key of Object.keys(data)) document.getElementById(key).textContent=data[key];
};
