const test=()=>{
    console.log("hello nodeJs");
}
test();


// blocking and non-blocking requests

console.log("biryani ordered");
console.log("water bottle ordered");

setTimeout(()=>{
    console.log('biryani delivered');
},10000);

setTimeout(()=>{
    console.log('water bottle delivered');
},5000);
