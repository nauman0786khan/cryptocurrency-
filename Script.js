
let p=fetch("https://api.coincap.io/v2/assets")
p.then((value)=>{

return value.json();

}).then((ct)=>{
console.log(ct)
let crptdata=""
ct.data.map((crp)=>{
    crptdata+=`<div class="crptraw">
    <div><h2>${crp.rank}</h2></div>
    <div><h2>${crp.name} ${crp.symbol}</h2></div>
    <div><h2>${crp.changePercent24Hr}%</h2>
    </div>
    <div><h2>₹${crp.priceUsd}</h2>
    </div>
    <div><button><a href="${crp.explorer}" target="_blank"> Track </a></button></div>
    </div>`
})
document.getElementById("datacrp").innerHTML=crptdata;

});