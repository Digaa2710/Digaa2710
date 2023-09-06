window.addEventListener("load",async ()=>{
    const res=await fetch("https://se-tasks.vercel.app/events")
    const data=await res.json();
    console.log(data)
})