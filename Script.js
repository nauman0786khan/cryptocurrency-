
let p=fetch("https://api.coincap.io/v2/assets")
p.then((value)=>{

return value.json();

}).then((ct)=>{
console.log(ct)
let crptdata=""
ct.data.forEach((crp)=>{
    crptdata+=`<div class="crptraw">
    <div><h2>${crp.rank}</h2></div>
    <div><h2>${crp.name} ${crp.symbol}</h2></div>
     <div><h2 class="per">${parseFloat(crp.changePercent24Hr).toFixed(2)}%</h2></div>
    <div><h2 class="pp">$${parseFloat(crp.priceUsd).toFixed(2)}</h2>
    </div>
    <div><button class="btn"><a href="${crp.explorer}"target="_blank"> Track </a></button></div>
    </div>`
})
document.getElementById("datacrp").innerHTML=crptdata;
});

$(".scan").on("keyup", function() {
    var ff1 = $(this).val().toLowerCase();
    
    if(ff1 === "") {
      // Show all rows if input is empty
      $(".crptraw").show();
    } else {
      // Filter the rows based on search input
      $("#datacrp .crptraw").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(ff1) > -1);
      });
    }
  });


  