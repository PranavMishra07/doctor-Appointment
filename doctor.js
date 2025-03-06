function toggleMenu() {
    document.querySelector(".menu").classList.toggle("active");
}

// localStorage.setItem("logindata", JSON.stringify(logindata))
// let admincheck = JSON.parse(localStorage.getItem("logindata"))
// console.log(admincheck);
function adminlogin() {
    let admin_email = document.querySelector("#admin_email").value
    let admin_password = document.querySelector("#admin_password").value
    if (admin_email != "pranav072003@gmail.com") {
        alert("Email is wrong")
        return false
    }
    if (admin_password != "pranav@123") {
        alert("Wrong Password")
        return false
    }
}
function register() {
    let registry = {
        regemail: document.querySelector("#remail").value,
        regpassword: document.querySelector("#rpassword").value
    }

    localStorage.setItem("registry", JSON.stringify(registry))

}
let registerdata = JSON.parse(localStorage.getItem("registry"))
console.log(registerdata)

function pateintlogin() {
    let pateintlogindata = {
        loginemail: document.querySelector(".pemail").value,
        loginpassword: document.querySelector(".ppassword").value
    }
    if (registerdata.regemail != pateintlogindata.loginemail || registerdata.regpassword != pateintlogindata.loginpassword) {
        alert("User Not Found")
        return false
    }
}

// function appoint() {
//     let appointdata = {
//         aname: document.querySelector("#name").value,
//         aemail: document.querySelector("#email").value,
//         acontact: document.querySelector("#contact").value,
//         aservice: document.querySelector("#service").value,
//         adate: document.querySelector("#date").value,
//         atime: document.querySelector("#time").value,
//     }
//     fetch("http://localhost:3000/Doctor", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(appointdata)
//     }).then(r => alert("Inserted"))
// }
// async function data() {
//     let data = await fetch("http://localhost:3000/Doctor")
//     let fdata = await data.json()
//     let tdata = fdata.map((e) => `
//     <tr>
//     <td>${e.id}</td>
//     <td>${e.aname}</td>
//     <td>${e.aemail}</td>
//     <td>${e.acontact}</td>
//     <td>${e.aservice}</td>
//     <td>${e.adate}</td>
//     <td>${e.atime}</td>
//     <td><button id="delbtn" onclick="mydel('${e.id}')" >delete </button></td>
//     <td><button id="edbtn" onclick="myedit('${e.id}')" >edit </button></td>
//     </tr>
//     `).join("")
//     let a = document.querySelector("#display")
//     a.innerHTML = tdata
// }
// data()


// function mydel(id) {
//     fetch(`http://localhost:3000/Doctor/${id}`, {
//         method: "DELETE"
//     })
//         .then(r => alert("deleted"))
// }



// async function myedit(id) {
//     let edata = await fetch(`http://localhost:3000/Doctor/${id}`)
//     let fdata = await edata.json()
//     let frm = `
//     <input type="text" value="${fdata.id}" id="id1"  ><br><br>
//     <input type="text" value="${fdata.aname}" id="name1"  ><br><br>
//     <input type="text"  value="${fdata.aemail}" id="email" ><br><br>
//     <input type="text"  value="${fdata.acontact}" id="contact1"><br><br>
//     <input type="text" value="${fdata.aservice}" id="service1"  ><br><br>
//     <input type="text" value="${fdata.adate}" id="date1"  ><br><br>
//     <input type="text" value="${fdata.atime}" id="time1"  ><br><br>
//     <input type="submit" onclick="finalupdate('${fdata.id}')">
//     `
//     document.querySelector("#showfrm").innerHTML = frm
// }

// function finalupdate(id) {
//     let final = {
//         id: document.querySelector("#id1").value,
//         name: document.querySelector("#name1").value,
//         email: document.querySelector("#email").value,
//         contact: document.querySelector("#contact1").value,
//         service: document.querySelector("#service1").value,
//         date: document.querySelector("#date1").value,
//         time: document.querySelector("#time1").value,
//     }
//     fetch(`http://localhost:3000/Doctor/${id}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(final)
//     }).then(r => alert("updated"))
// }