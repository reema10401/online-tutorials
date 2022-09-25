import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Subject = (props) => {
    // function Subject(props){
        // console.log(props.courses[0].course)
    // var courses = props.courses[0]
    // console.log(courses)
    // var course = courses.course
    // console.log(props.courses['0'])
    // console.log(props.courses['0'].course[0])

    const [courses, setCourse] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [comments, setComments] = useState([]);

    var courseName;
    var courseDescription;
    var rating;
    var reviews;
    // var comments;
    const localstorage_user = JSON.parse(localStorage.getItem('user'))
    let navigate = useNavigate();
    // // console.log("Inside Subject")
    // // console.log('oops' + props.courseId)
    props.courses.map(course => {
        course.course.forEach( element => {
            if(element.courseId == props.courseId)
            {
                console.log('found')
                courseName = element.courseName
                courseDescription = element.courseDescription
                rating = element.courseRating.CourseStars
                reviews = element.courseRating.courseReviews
            }
            // console.log("ele" + element._courseId)
            // console.log("props" + props.courseId)
        })
    })

    useEffect(() =>{
    document.getElementById('sub').onclick = function() {
        if(localstorage_user === null)
        {
            alert('Please login to access the appointment feature')
            navigate(`/`)
        }
        fetch('http://localhost:3000/appointments', {
        method: "POST",
          headers : { 
            'Content-Type': 'application/json',
             'Accept': 'application/json'
          },
          body: JSON.stringify({
            userId : localstorage_user._id,
            userName : localstorage_user.name,
            userEmail : localstorage_user.email,
            tutorId : props.tutorId,
            courseId : props.courseId,
            courseName : courseName,
            date : document.getElementById('d').value,
            time : document.getElementById('t').value,
            isScheduled : true
          } ),
        })
        .then( res => res.json() )
        .then( (data) => { 
            console.log('appointment posted');
            setCourse(data);
            setLoading(false);
        })
        .catch((error) => {
          console.log(error.message);
          setError(error);
          setLoading(false);

        })
    }

        fetch('http://localhost:3000/comments/'+ props.tutorId + '/' + props.courseId, {
            method: 'GET',
          headers : { 
            'Content-Type': 'application/json',
             'Accept': 'application/json'
          },
        })
        .then( res => res.json() )
        .then( (data) => { 
            console.log('appointment posted');
            setComments(data);
            setLoading(false);
        })
        .catch((error) => {
          console.log(error.message);
          setError(error);
          setLoading(false);

        })
},[]);
    // console.log(Object.keys(subject))
    // console.log(subject.courseName)
    console.log(comments)
    
    return (
        <div className="col">
      <h3>{courseName}</h3>
      <h4>{courseDescription}</h4>
      <h6>{rating} ({reviews})</h6>
      <br/>
      <form>
        <input type="date" min="2022-05-16" max="2022-05-17" id="d"/>
        <input type="time" min="09:00:00" max="18:00:00" id="t"/>
        <button id="sub" class="btn btn-outline-dark">Book Appointment</button>
      </form> 
      <textarea id="comment">Add your comments please</textarea>
      {/* {comments.map(comment =>{console.log(comment)})} */}
      <Link to={`/details/${props.tutorId}`}><button id="back" class="btn btn-outline-dark">Back</button></Link>
    </div>
    )

}


export default Subject;