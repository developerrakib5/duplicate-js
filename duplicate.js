
// 
const names = ['abul', 'babul', 'cabul', 'dabul', 'abul', 'babul', 'kabul', 'babul', 'cabul'];
function removeDup (names){
    const unique = [];
 for (let i = 0; i < names.length; i++){
    const name =names[i];
   // console.log(name);
   if (unique.includes(name)=== false){
    unique.push(name);
   }
 }
 return unique;
}
const uniqueName = removeDup (names);
console.log(uniqueName);
