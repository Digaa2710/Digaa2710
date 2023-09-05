async function divya(){
    let delhiwhether=new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("22 degree")
        })
    })
    let mumbaiwhether=new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("23 degree")
        })
    })  
    console.log("Fetching delhiwhether so u plz wait")
    let delhiw=await delhiwhether
    console.log("Fetched delhiwhether so u plz wait" + delhiw)

    console.log("Fetching mumwhether so u plz wait")

    let mumbaiw=await mumbaiwhether 
    console.log("Fetched mumwhether so u plz wait" + mumbaiw)

    return [delhiw,mumbaiw]
}
let a=divya()
a.then((value)=>{
    console.log(value)
})
