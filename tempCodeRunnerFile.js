let p1=new  Promise((resolve,reject)=>{
setTimeout(()=>{
    console.log("Resolved after 2 seconds")
    resolve(56)
},2000)
})
p1.then((value)=>{
    console.log(value)
})