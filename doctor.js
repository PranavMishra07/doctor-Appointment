function savedata() {

    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)
}

function appoint() {
    let appointdata = {
        aname: document.querySelector("#name").value,
        aemail: document.querySelector("#email").value,
        acontact: document.querySelector("#contact").value,
        aservice: document.querySelector("#service").value,
        adate: document.querySelector("#date").value,
        atime: document.querySelector("#time").value,
    }
    fetch("http://localhost:3000/Doctor", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(appointdata)
    }).then(r => alert("Inserted"))
}
async function data() {
    let data = await fetch("http://localhost:3000/Doctor")
    let fdata = await data.json()
    let tdata = fdata.map((e) => `
    <tr>
    <td>${e.id}</td>
    <td>${e.name}</td>
    <td>${e.email}</td>
    <td>${e.contact}</td>
    <td>${e.service}</td>
    <td>${e.date}</td>
    <td>${e.time}</td>
    <td><button onclick="mydel('${e.id}')" >delete </button></td>
    <td><button onclick="myedit('${e.id}')" >edit </button></td>
    </tr>
    `).join("")
    let a = document.querySelector("#display")
    a.innerHTML = tdata
    console.log(tdata)
}
data()



// localStorage.setItem("aname", aname)
// localStorage.setItem("aemail", aemail)
// localStorage.setItem("acontact", acontact)
// localStorage.setItem("aservice", aservice)
// localStorage.setItem("adate", adate)
// localStorage.setItem("atime", atime)