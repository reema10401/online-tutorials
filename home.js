import React, {Component} from 'react';
import Display from './display';


class Home extends Component {
    
  constructor(props)
  {
    super(props)

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      tutors:[],
      Filtered:[],
      search:"",
      isExpanded: -1
    }

    // const localstorage_user = JSON.parse(localStorage.getItem('user'))
  }
  

  handleChange = event => {
    this.setState({ search: event.target.value }, () =>
      this.tutorsSearch()
    );
  };



  tutorsSearch = () => {
    let { search } = this.state;
    function isSubject(value) {
      let flag = -1
      let courses = value.course
      courses.forEach(element => {
        if(element.courseName.toLowerCase().includes(search.toLowerCase()))
        {
          flag = 1
        }
      });
      if(flag == 1)
      {return true}
      else
      {return false}
    }
    let subjectFilter = this.state.tutors.filter(isSubject)

    let nameFilter = this.state.tutors.filter(value => {
      return (
        value.name.toLowerCase().includes(search.toLowerCase()))
  });
  let filteredData = [...subjectFilter,...nameFilter]
    this.setState({
      ...this.state,
      Filtered: filteredData
    })
  };


  componentDidMount(){
    fetch('http://localhost:3000/tutors', {
      headers : { 
        'Content-Type': 'application/json',
         'Accept': 'application/json'
      }
    })
    .then( res => res.json() )
    .then( (data) => {
        this.setState({ tutors: data , Filtered : data })
        // console.log( this.state.tutors )
    })
    .catch(console.log)

    // fetch('http://localhost:3000/users' + '/' + this.state.userId, {
    //   headers : { 
    //     'Content-Type': 'application/json',
    //      'Accept': 'application/json'
    //   }
    // })
    // .then( res => res.json() )
    // .then( (data) => {
    //     this.setState({ userData: data })
    // })
    // .catch(console.log)
  }
      render () {
         return (
          <>
	  <h1> MJ TUTORIALS </h1>
          <Display 
            tutorslist={this.state.Filtered}
            search={this.state.search}
            handleChange={(e) => this.handleChange(e)}
            isExpanded={this.state.isExpanded}
            // userData = {this.state.userData}
            />
          </>
        );
 
      }
}

export default Home;
