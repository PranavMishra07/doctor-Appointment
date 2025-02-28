function savedata() {

    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)
}
function signin() {
    let sign = {
        semail: document.querySelector("#semail").value,
        spassword: document.querySelector("#spassword").value
    }

    localStorage.setItem("sign", JSON.stringify(sign))
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
    <td>${e.aname}</td>
    <td>${e.aemail}</td>
    <td>${e.acontact}</td>
    <td>${e.aservice}</td>
    <td>${e.adate}</td>
    <td>${e.atime}</td>
    <td><button onclick="mydel('${e.id}')" >delete </button></td>
    <td><button onclick="myedit('${e.id}')" >edit </button></td>
    </tr>
    `).join("")
    let a = document.querySelector("#display")
    a.innerHTML = tdata
}
data()


function mydel(id) {
    fetch(`http://localhost:3000/Doctor/${id}`, {
        method: "DELETE"
    })
        .then(r => alert("deleted"))
}



async function myedit(id) {
    let edata = await fetch(`http://localhost:3000/Doctor/${id}`)
    let fdata = await edata.json()
    let frm = `
    <input type="text" value="${fdata.id}" id="id1"  ><br><br>
    <input type="text" value="${fdata.aname}" id="name1"  ><br><br>
    <input type="text"  value="${fdata.aemail}" id="age1" ><br><br>
    <input type="text"  value="${fdata.acontact}" id="contact1"><br><br>
    <input type="text" value="${fdata.aservice}" id="service1"  ><br><br>
    <input type="text" value="${fdata.adate}" id="date1"  ><br><br>
    <input type="text" value="${fdata.atime}" id="time1"  ><br><br>
    <input type="submit" onclick="finalupdate('${fdata.id}')">
    `
    document.querySelector("#showfrm").innerHTML = frm
}
function finalupdate(id) {
    let final = {
        id: document.querySelector("#id1").value,
        name: document.querySelector("#name1").value,
        age: document.querySelector("#age1").value,
        contact: document.querySelector("#contact1").value,
        service: document.querySelector("#service1").value,
        date: document.querySelector("#date1").value,
        time: document.querySelector("#time1").value,
    }
    fetch(`http://localhost:3000/Doctor/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(final)
    }).then(r => alert("updated"))
}