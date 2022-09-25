import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import Focus from './focus';

import {useParams} from 'react-router-dom';
import { render } from 'react-dom';
import {Link} from 'react-router-dom';


function Signup()  {
    
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
            console.log(JSON.stringify( {  // you will get user information from login form
                name: name,
                email: em,
                ssignuppswd: pass,
      
              } ))
              console.log('form submitted succesfully')
              fetch('http://localhost:3000/studentsignup', {
                method: "POST",
                body: JSON.stringify( {  // you will get user information from login form
                    name: name,
                    email: em,
                    ssignuppswd: pass,
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
                      alert('User already exists. Try a different email address')
                  }
                  else if(data.mess === "blank")
                  {
                    alert('Fill all the fields!')
                }
                else{
                    let inMemoryToken = data.token;
                    console.log(inMemoryToken)
          
                    localStorage.setItem('user', JSON.stringify(data));
                    setFlag(true);
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
                <div className="d-flex justify-content-center">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Student signup</h5>
                                <form>
                                    <div className="form-inline">
                                        <label for="name">Name:</label>
                                        <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="Enter your name"/>
                                    </div>
                                    <div class="form-inline">
                                        <label for="email">Email:</label>
                                        <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Enter email"/>
                                    </div>
                                    <div class="form-inline">
                                        <label for="password">Password:</label>
                                        <input type="password" className="form-control" id="password" placeholder="Enter password"/>
                                    </div>
                                    <button type="submit" id ="submit" className="btn btn-primary">Submit</button>
                                    <Link to={`/`}><button class="btn btn-outline-dark">Return Home</button></Link>
                                </form>
                        </div>
                    </div>
                </div>      
            </div> 
  
        );}
        else{
            navigate(`/`);
            <Link to={`/`}><button class="btn btn-outline-dark">Return Home</button></Link>
        }

      }
  
}

export default Signup;
