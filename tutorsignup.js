import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import Focus from './focus';

import {useParams} from 'react-router-dom';
import { render } from 'react-dom';


function Tutorsignup()  {
    
  const [tutors, setTutors] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [flag, setFlag] = useState(false);
  let navigate = useNavigate();

  useEffect( () =>{
    // document.getElementById('submit').onclick = function() {console.log('submitted')}
    document.getElementById('submit').onclick = function() {
            var name = document.getElementById('name').value
              var em = document.getElementById('email').value
              var pass = document.getElementById('password').value
              var phone = document.getElementById('phone').value
              var img = document.getElementById('image').value
              var loc = document.getElementById('location').value
              var about = document.getElementById('aboutme').value
              var details = document.getElementById('details').value
            console.log(JSON.stringify( {  // you will get user information from login form
                name: name,
                email: em,
                tsignuppswd: pass,
                phoneNo: phone,
                image: img,
                location: loc,
                aboutMe: about,
                details: details
      
              } ))
              console.log('tutor signup form submitted succesfully')
              fetch('http://localhost:3000/tutorsignup', {
                method: "POST",
                body: JSON.stringify( {  // you will get user information from login form
                    name: name,
                    email: em,
                    tsignuppswd: pass,
                    phoneNo: phone,
                    image: img,
                    location: loc,
                    aboutMe: about,
                    details: details
                  } ),
                headers : { 
                  'Content-Type': 'application/json',
                   'Accept': 'application/json'
                }
              })
              .then( res => res.json() )
              .then( (data) => {
                  if(data.mess === "exists")
                  {
                      alert('Tutor already exists. Try a different email address')
                  }
                  else if(data.mess === "blank")
                  {
                      alert('Please fill all fields')
                  }
        
                  
              })
              .catch((error) => {
                console.log(error.message);
              
              });
          }
  }, [])

      // http://localhost:3000/authentication


      if (isLoading){
        return(
          <div>Loading...</div>

        );

      }
      else if (error){
        return(
          <div>Error: {error.message }</div>

        );
      }
      else{
        if(flag === false)
        {
            return (
            <div>
                <div class="d-flex justify-content-center">

        <div class="card" >
            <div class="card-body">
              <h5 class="card-title" >Tutor signup</h5>

              <form>
                <div class="form-inline">
                    <label for="name">Name:</label>
                    <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Enter your name"/>
                  </div>
                <div class="form-inline">
                  <label for="email">Email:</label>
                  <input type="email" class="form-control" id="email" aria-describedby="email" placeholder="Enter email"/>
                </div>
                <div class="form-inline">
                  <label for="password">Password:</label>
                  <input type="password" class="form-control" id="password" placeholder="Enter password"/>
                </div>
                <div class="form-inline">
                    <label for="password">Phone:</label>
                    <input type="number" class="form-control" id="phone" placeholder="Enter your phone"/>
                </div>
                <div class="form-inline">
                    <label for="image">Image:</label>
                    <input type="file" class="form-control" id="image" placeholder="Upload your photo"/>
                </div>
                <div class="form-inline">
                    <label for="location">Location:</label>
                    <input type="text" class="form-control" id="location" placeholder="Enter location"/>
                </div>
                <div class="form-inline">
                    <label for="aboutme">About me:</label>
                    <input type="text" class="form-control" id="aboutme" placeholder="Tell about yourself"/>
                </div>
                <div class="form-inline">
                    <label for="details">Details:</label>
                    <input type="text" class="form-control" id="details" placeholder="Enter details"/>
                </div>

                <button type="submit" id ="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>


    </div>  
            </div> 
  
        );}
        else{
            navigate(`/tutorappointments`)
        }

      }
  
}

export default Tutorsignup;
