
let p=fetch("https://api.coincap.io/v2/assets")
p.then((value)=>{

return value.json();

}).then((ct)=>{
console.log(ct)
});