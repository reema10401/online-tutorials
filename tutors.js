// const { json } = require("express");

fetch('http://localhost:3000/tutors')
.then(response => response.json())
.then(json => {
    let tr = `<tr><th>Name</th><th>Education</th><th>Course</th><th>Rating</th></tr>`

    json.forEach(element => {
        tr += `<tr>
            <td style = "border: 1px solid black; border-collapse: collapse;padding: 5px;">${element.name}</td><td style = "border: 1px solid black; border-collapse: collapse;padding: 5px;">`;
        element.details.forEach(level => {
            tr+=`<pre>${level.name}</pre>`
        });
        tr += `</td><td style = "border: 1px solid black; border-collapse: collapse;padding: 5px;">`
        element.course.forEach(courses => {
            tr+=`<pre>${courses.courseName}: ${courses.courseDesciption}</pre>`
        });
        tr +=`</td><td style = "border: 1px solid black; border-collapse: collapse;padding: 5px;">${element.rating}</td>
        </tr>`;
    })

    document.getElementById("tutorlist").innerHTML = tr;
});

document.getElementById("add").onclick = function(){
    let str = document.getElementById("loc").value.split(",");
    fetch('http://localhost:3000/tutors', {
    method: 'POST',
    body: JSON.stringify({
        name: document.getElementById("name").value,
        rating: document.getElementById("rating").value,
        aboutMe: document.getElementById("desc").value,
        details: {name:str},
        course: document.getElementById("edu").value
    }),
    headers: {
        "Content-type":"application/json"
    }
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(e => console.log(e));
}

document.getElementById("del").onclick = function(){

    fetch('http://localhost:3000/tutors', {
        method: 'DELETE',
        headers: {
        "Content-type":"application/json"}
    })
    .then(() => console.log('Delete successful'));
}