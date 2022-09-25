import React from 'react';
import {Link} from 'react-router-dom';

const Focus = (props) => {
  // function Focus(props)  {

    return (
        <div>
            <h1>Tutor List</h1>
         { props.tutorlist.map( (tutors, id) => (

          <div className="card-body">
          <div className="row">
          <div className="col-3">
            <img class="card-img-top-2" src={tutors.image} alt="Card image cap"/>       
          </div>
          <div className="col-7">
          <div className="row-2">
            <h5 className={"card-title-2"}>{ tutors.name }</h5>
            <h6 className="card-subtitle-2 mb-2">Rating: { tutors.rating }</h6>
            <h6 className="card-subtitle-2 mb-2">{ tutors.email } </h6>
            <h6 className="card-subtitle-2 mb-2">{ tutors.location}</h6> 
          </div>
                
          </div>
          </div>
          <hr></hr>

          <h5 className={"card-title"}>About Me:</h5>
          <p className="card-text">{ tutors.aboutMe } </p>  

          <hr></hr>

          <h5 className={"card-title"}>Education</h5>
          <div className="card-text">
          {tutors.details}
          </div>
          {/* <div className="card-text">{ tutors.details.map((d, i) =>(
            <ul>
                <li  key = {i}>{ d.name }</li>
            </ul>
          )) }
          </div> */}

          <hr></hr>

          <h5 className={"card-title"}>Courses</h5>
          <div className="card-text">{ tutors.course.map((c, i) =>(
            <div key = {i}>
            <ul>
                {/* change the referene to right routing */}
                {/* <li><Link to={`/course/${tutors._id}/${c._courseId}`}>{ c.courseName }</Link></li> */}
                <li><Link to={`/course/${tutors._id}/${c.courseId}`}>{ c.courseName }</Link></li>
                <ul>
                    <li>Description: { c.courseDesciption }</li>
                    <li>Course Rating: { c.rating }</li>
                </ul>
            </ul>
            </div>
          )) }
          </div>
          <button id="fav" class="btn btn-outline-dark">Add to favourites</button>
          <Link to={`/`}><button id="back" class="btn btn-outline-dark">Return to Search List</button></Link>
          </div>
         ))};
                  </div>
    
      );

}


export default Focus;