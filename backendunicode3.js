const container = document.querySelector(".container")
window.addEventListener("load", async () => {
    const res = await fetch("https://se-tasks.vercel.app/events")
    const data = await res.json();
    console.log(data)
    data.forEach((user) => {
        createuser(user);
    });
});
function createuser(user) {
    const { _id, name, description, date } = user;
    const userDiv = document.createElement("div")
    userDiv.className = "user"
    const nameDiv = document.createElement("h2")
    nameDiv.innerHTML = "Name:"+ name;
    const idDiv = document.createElement("h3")
    idDiv.innerHTML = "Id No.:"+_id;
    const dateDiv=document.createElement("h3");
    dateDiv.innerHTML="Date:" + date;
    const des=document.createElement("h5")
    des.innerHTML="Desc:"+ description
    userDiv.appendChild(nameDiv)
    userDiv.appendChild(idDiv)
    userDiv.appendChild(dateDiv)
    userDiv.appendChild(des)
    container.appendChild(userDiv)
}