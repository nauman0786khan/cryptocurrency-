
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
    <div><h2 class="pp">₹${parseFloat(crp.priceUsd).toFixed(2)} USD</h2>
    </div>
    <div><button><a href="${crp.explorer}" target="_blank"> Track </a></button></div>
    </div>`
})
document.getElementById("datacrp").innerHTML=crptdata;

});

// let p = fetch("https://api.coincap.io/v2/assets");
// p.then((value) => {
//     return value.json();
// }).then((ct) => {
//     console.log(ct);
//     let crptdata = "";
//     ct.data.forEach((crp) => {
//         // Applying toFixed() to format priceUsd with 2 decimal places
//         let formattedPrice = parseFloat(crp.priceUsd).toFixed(2);
//         // Applying toFixed() to format changePercent24Hr with 2 decimal places
//         let formattedPercentage = parseFloat(crp.changePercent24Hr).toFixed(2);
//         crptdata += `<div class="crptraw">
//             <div><h2>${crp.rank}</h2></div>
//             <div><h2>${crp.name} ${crp.symbol}</h2></div>
//             <div><h2 class="per">${formattedPercentage}%</h2></div>
//             <div><h2 class="pp">₹${formattedPrice} USD</h2></div>
//             <div><button><a href="${crp.explorer}" target="_blank">Track</a></button></div>
//         </div>`;
//     });
//     document.getElementById("datacrp").innerHTML = crptdata;
// });