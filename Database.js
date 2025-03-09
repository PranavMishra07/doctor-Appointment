function appoint() {
    let appointdata = {
        aname: document.querySelector("#name").value,
        aemail: document.querySelector("#email").value,
        acontact: document.querySelector("#contact").value,
        aservice: document.querySelector("#service").value,
        adate: document.querySelector("#date").value,
        atime: document.querySelector("#time").value,
    }
    localStorage.setItem("apoointdata", JSON.stringify(appointdata))
    fetch("http://localhost:3000/Doctor", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(appointdata)
    }).then(r => alert("Appoointment Submitted"))



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
    <td id="aservice" >${e.aservice}</td>
    <td>${e.adate}</td>
    <td>${e.atime}</td>
    <td><button id="delbtn" onclick="mydel('${e.id}')" >delete </button></td>
    <td><button id="edbtn" onclick="myedit('${e.id}')" >edit </button></td>
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
    <input type="text"  value="${fdata.aemail}" id="email1" ><br><br>
    <input type="text"  value="${fdata.acontact}" id="contact1"><br><br>
    <select  value="${fdata.aservice}" id="service1" >
      <option value="">Select Service</option>
      <option value="surgery">Surgery & Radiology</option>
      <option value="neurology">Neurology</option>
      <option value="angiography">Angiography</option>
      <option value="children-care">Children Care</option>
      <option value="orthopedics">Orthopedics</option>
      <option value="nuclear-magnetic">Nuclear Magnetic</option>
      <option value="eye-treatment">Eye Treatment</option>
      <option value="x-ray">X-Ray</option>
    </select>
    <input type="date" value="${fdata.adate}" id="date1" required  ><br><br>
   <select   value="${fdata.atime}"    id="time1" required>
       <option>Select Time</option>
       <option>09.00 AM - 10.00 AM</option>
       <option>10.00 AM - 11.00 AM</option>
       <option>11.00 AM - 12.00 PM</option>
       <option>12.00 PM - 01.00 PM</option>
       <option>01.00 PM - 03.00 PM</option>
       <option>04.00 PM - 06.00 PM</option>
       <option>07.00 PM - 10.00 PM</option>
     </select>

    
    <input type="submit" onclick="finalupdate('${fdata.id}')">

    `
    document.querySelector("#showfrm").innerHTML = frm

}

function finalupdate(id) {
    let final = {
        id: document.querySelector("#id1").value,
        aname: document.querySelector("#name1").value,
        aemail: document.querySelector("#email1").value,
        acontact: document.querySelector("#contact1").value,
        aservice: document.querySelector("#service1").value,
        adate: document.querySelector("#date1").value,
        atime: document.querySelector("#time1").value,
    }
    fetch(`http://localhost:3000/Doctor/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(final)
    }).then(r => alert("Data updated"))
}





















