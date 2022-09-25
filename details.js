import React, {useState, useEffect} from 'react';
import Focus from './focus';

import {useParams} from 'react-router-dom';


function Details()  {
    
  const [tutors, setTutors] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

      // http://localhost:3000/api/tutors/id

      let {id} = useParams();
      console.log(id);

      useEffect( () => {

        setLoading(true);
        fetch('http://localhost:3000/tutors/' + id, {
          headers : { 
            'Content-Type': 'application/json',
             'Accept': 'application/json'
          }
        })
        .then( res => res.json() )
        .then( (data) => { 
            console.log(data);
            setTutors(data);
            setLoading(false);
        })
        .catch((error) => {
          console.log(error.message);
          setError(error);
          setLoading(false);

        })
      }, []);

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
        return (
          <Focus tutorlist={ tutors } />
  
        );

      }
     
      
}

export default Details;
