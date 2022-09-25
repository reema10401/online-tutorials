import React, {useState, useEffect} from 'react';
import Subject from './subject';

import {useParams} from 'react-router-dom';
import { useLocation } from 'react-router-dom'


function Course()  {
    
  const [courses, setCourse] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

      // http://localhost:3000/api/tutors/id/courseId

      var {id, subjectId} = useParams();
    //   console.log("The course ID is: " + subjectId)
      console.log("The ID is: " + subjectId)

      useEffect( () => {

        setLoading(true);
        fetch('http://localhost:3000/tutors/' + id + '/' + subjectId, {
          headers : { 
            'Content-Type': 'application/json',
             'Accept': 'application/json'
          }
        })
        .then( res => res.json() )
        .then( (data) => { 
            console.log('The data was passed into the course.js file');
            setCourse(data);
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
            <Subject 
            courses = {courses}
            courseId = {subjectId}
            tutorId = {id}/>
          );
      }
     
      
}

export default Course;
