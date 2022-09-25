import {Routes, Route} from 'react-router-dom';
import Home from './components/home';
import Details from './components/details'
import Course from './components/course'
import Auth from './components/auth'
import Tutorauth from './components/tutorauth'
import Signup from './components/signup'
import Tutorsignup from './components/tutorsignup'
import Appointments from './components/appointments';
import Tutorappointments from './components/tutorappointments';


function App() {
  return(
    <Routes>
      <Route path = "/" element = {<Home/>}></Route>
      <Route path = "/details/:id" element = {<Details/>}></Route>
      <Route path = "/course/:id/:subjectId" element = {<Course/>}></Route>
      <Route path = "/authentication" element = {<Auth/>}></Route>
      <Route path = "/tutorauthentication" element = {<Tutorauth/>}></Route>
      <Route path = "/signup" element = {<Signup/>}></Route>
      <Route path = "/tutorsignup" element = {<Tutorsignup/>}></Route>
      <Route path = "/appointments" element = {<Appointments/>}></Route>
      <Route path = "/tutorappointments" element = {<Tutorappointments/>}></Route>
    </Routes>
  )
}

export default App;
