import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Tutorappointments()  {
    
const [appointments, getAppointment] = useState([]);
const [userData, getUser] = useState([]);
var courseName, date, time, totalHours;
var details = [];
const temp = JSON.parse(localStorage.getItem('tutor'))
let navigate = useNavigate();

function Logout() {
    // localStorage.removeItem('user')
    localStorage.removeItem('tutor')
    navigate(`/`)
}
//   const localstorage_user = JSON.parse(localStorage.getItem('user'))

  useEffect( () => {
    const localstorage_user = JSON.parse(localStorage.getItem('tutor'))
    // document.getElementById('app').onclick = function() {
    fetch('http://localhost:3000/tutorappointments/' + localstorage_user._id, {
      headers : { 
        'Content-Type': 'application/json',
         'Accept': 'application/json'
      }
    })
    .then( res => res.json() )
    .then( (data) => { 
        console.log('Got the appointments');
        getAppointment(data);
    })
    .catch((error) => {
      console.log(error.message);

    })

    // fetch('http://localhost:3000/tutors/' + localstorage_user._id, {
    //   headers : { 
    //     'Content-Type': 'application/json',
    //      'Accept': 'application/json'
    //   }
    // })
    // .then( res => res.json() )
    // .then( (data) => { 
    //     console.log('Got the tutor info');
    //     getUser(data);
    // })
    // .catch((error) => {
    //   console.log(error.message);

    // })
// }
  }, []);

  appointments.map(list => {
      courseName = list.courseName;
      date = list.date;
      time = list.time;
      details.push([courseName, date, time])
})

userData.map(list => {
    totalHours = list.totalHours;
})


      // http://localhost:3000/authentication
    //   console.log(appointments)
      return(
          <div>
              <button type='button' id="logout" onClick = {Logout}>Logout</button>
              <h4>Your appointments are as follows</h4>
              {details.map(appointment => {
                  return(
                    <div>
                        <h6>{appointment[0]}</h6>
                        <p>{appointment[1]}:{appointment[2]}</p>
                        <br>
                        </br>
                    </div>
                  )
              })}
              <p>The total hours completed for you is: {totalHours}hrs</p>

              {/* <Link to={`/`}><button class="btn btn-outline-dark">Return to Home</button></Link> */}
              {/* <Link to={`/`}><button class="btn btn-outline-dark">Log</button></Link>  */}
          </div>
      )
     
      
}

export default Tutorappointments;
