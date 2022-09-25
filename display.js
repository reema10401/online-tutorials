import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import "./videos.css";

import {Link} from 'react-router-dom';

const Display = (props) => {
    let navigate = useNavigate();

    const [appointments, getAppointment] = useState([]);
    const localstorage_user = JSON.parse(localStorage.getItem('user'))
    // const [favourites, getFavourites] = useState([]);
    function Logout() {
        localStorage.removeItem('user')
        localStorage.removeItem('tutor')
        navigate(`/`)
    }

    if(JSON.parse(localStorage.getItem('user')) === null)
    {
        return (
        <div>
            <Link to={`authentication`} className='col-4' ><button type='button'>User Login</button></Link>
            <Link to={`tutorauthentication`} className='col-4' ><button type='button'>Tutor Login</button></Link>
            <Link to={`signup`} ><button type='button'>User Sign-up</button></Link>
            <Link to={`tutorsignup`} ><button type='button'>Tutor Sign-up</button></Link>
        <h1 classNem = "top-title">Tutor List</h1>
        <hr></hr>

        <div class="topnav">
            <input className="top-input" type="text" name="search" size="large" value={props.search || ""} onChange={(e) => props.handleChange(e)} placeholder="Search for tutors" />
        </div>

        <div class="row pad">
        { props.tutorslist.map( (tutors, id) => (

                <div className="col-md-4 pad" key={ id }>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4">
                            <img class="card-img-top-1" src={tutors.image} alt="Card image cap"/>
                            </div>
                            <div className="col-8">
                            <div className="row">
                                <h5 className={"card-title-1"}>{ tutors.name }</h5>
                            </div>
                            <div className="row">
                            <h6 className="card-subtitle-1 mb-2 text-muted">Rating :{ tutors.rating } </h6>
                            </div>
                            <div className="row">
                            <h6 className="card-subtitle-1 mb-2 text-muted">{ tutors.location}</h6>
                            </div>
                            <div className="row">
                            <h6 className="card-subtitle-1 mb-2 text-muted">{ tutors.email } </h6>
                            </div>
                            
                            </div>
                        </div>
                        <div className="row">
                        </div>

                        <p className="card-text">{ tutors.aboutMe } </p>
                        <div className = "row">
                        <Link to={`details/${tutors._id}`} className='col-4' ><button type='button'>Expand</button></Link>
                        <p className = 'col-4'></p>

                        {/* <button className='col-4' type='button' >Favourite</button> */}
                        {/* {favourites.includes(id)? 
                        <button className='col-4' type='button' onClick={() => (setFavourite(id))}><i class="bi bi-heart-fill"></i>Favourite</button>
                        :<button className='col-4' type='button' onClick={() => (setFavourite(id))}><i class="bi bi-heart"></i>Favourite</button>
                        } */}

                        </div>
                    </div>
                </div>
                </div>

            ))
            };
            
            </div>
            </div>
    
      );
    }
      else{
        return (
            <div>
                <button type='button' id="logout" onClick = {Logout}>Logout</button>
                <Link to={`appointments`}><button type='button' id="app">Appointments</button></Link>
            <h1 classNem = "top-title">Tutor List</h1>
            <hr></hr>
    
            <div class="topnav">
                <input className="top-input" type="text" name="search" size="large" value={props.search || ""} onChange={(e) => props.handleChange(e)} placeholder="Search for tutors" />
            </div>
    
            <div class="row pad">
            { props.tutorslist.map( (tutors, id) => (
    
                    <div className="col-md-4 pad" key={ id }>
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-4">
                                <img class="card-img-top-1" src={tutors.image} alt="Card image cap"/>
                                </div>
                                <div className="col-8">
                                <div className="row">
                                    <h5 className={"card-title-1"}>{ tutors.name }</h5>
                                </div>
                                <div className="row">
                                <h6 className="card-subtitle-1 mb-2 text-muted">Rating :{ tutors.rating } </h6>
                                </div>
                                <div className="row">
                                <h6 className="card-subtitle-1 mb-2 text-muted">{ tutors.location}</h6>
                                </div>
                                <div className="row">
                                <h6 className="card-subtitle-1 mb-2 text-muted">{ tutors.email } </h6>
                                </div>
                                
                                </div>
                            </div>
                            <div className="row">
                            </div>
    
                            <p className="card-text">{ tutors.aboutMe } </p>
                            <div className = "row">
                            <Link to={`details/${tutors._id}`} className='col-4' ><button type='button'>Expand</button></Link>
                            <p className = 'col-4'></p>
    
                            {/* <button className='col-4' type='button' >Favourite</button> */}
                            {/* {favourites.includes(id)? 
                            <button className='col-4' type='button' onClick={() => (setFavourite(id))}><i class="bi bi-heart-fill"></i>Favourite</button>
                            :<button className='col-4' type='button' onClick={() => (setFavourite(id))}><i class="bi bi-heart"></i>Favourite</button>
                            } */}
    
                            </div>
                        </div>
                    </div>
                    </div>
    
                ))
                };
                
                </div>
                </div>
        
          );}


}

export default Display;







