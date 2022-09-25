import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import Focus from './focus';

import {useParams} from 'react-router-dom';
import { render } from 'react-dom';


function Auth()  {
    
  const [tutors, setTutors] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [flag, setFlag] = useState(false);
  let navigate = useNavigate();

  useEffect( () =>{
    // document.getElementById('submit').onclick = function() {console.log('submitted')}
    document.getElementById('submit').onclick = function() {
              var em = document.getElementById('email').value
              var pass = document.getElementById('pass').value
            //   console.log(JSON.stringify(em))
            //   console.log(JSON.stringify(pass))
            console.log(JSON.stringify( {  // you will get user information from login form
        
                email: em,
                sloginpswd: pass,
      
              } ))
              console.log('form submitted succesfully')
              fetch('http://localhost:3000/studentlogin', {
                method: "POST",
                body: JSON.stringify( {  // you will get user information from login form
        
                    email: em,
                    sloginpswd: pass,
          
                  } ),
                headers : { 
                  'Content-Type': 'application/json',
                   'Accept': 'application/json'
                }
              })
              .then( res => res.json() )
              .then( (data) => {
                  if(data.mess === "blank")
                  {
                      alert('Please fill all the detaiils')
                  }
                  else if(data.mess === "incorrect")
                  {
                      alert('Incorrect login credentials. Please check email/password')
                  }
                  else
                  {
                    console.log(data);
        
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
        {return (
            <div>
                <form>
                    <label for="email">Email address</label><br/>
                    <input type="text" id="email" name="fname" /><br/>
                    <label for="pass">Password</label><br/>
                    <input type="text" id="pass" name="lname" /><br/><br/>
                    {/* <input type="submit" id="submit" value="Submit"/> */}
                    <button type='button' id="submit" >Login</button>
                </form>
          </div> 
  
        );}
        else{
            navigate(`/`)
        }

      }
     
      
}

export default Auth;
