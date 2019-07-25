import React, { Component } from 'react'
import Projects from './Projects'
import Socials from './Socials'
import ProfilePic from './assets/profile.png'
import Title from './Titles'
import Header from './Header';

class App extends Component {

  state = {
    displayBio: false
  }
  // constructor() {
  //   super();
  //   this.state = { displayBio: false };
  //   this.toggleRead = this.toggleRead.bind(this) 
  // } 

  toggleRead = () => {
    this.setState({
      displayBio: !this.state.displayBio
    })
  }

  render() {

    return (

      <div>
        <Header/>
        <div style={{textAlign:"center"}}>
          <img src={ProfilePic} style={{width:130,marginTop:10,borderRadius:50}}/>
        <h1>Hello!</h1>
        <p>My name is Mujtaba.</p>
        <Title/>
        <p>Always looking forward to work.</p>
        {/* ternary used */}
        {(this.state.displayBio) ? (<div>
          <p>I live in Karachi,Pakistan.</p>
          <p>My favorite language is JavaScript.</p>
          <p>React Js is amazing</p>
          <div>
            <button onClick={this.toggleRead}>Read Less</button>
          </div>
        </div>) : (<div><button onClick={this.toggleRead}>Read More</button></div>)
        }
        </div>
        {/* projects name */}
        <hr/>
        <Projects />
        <hr/>
       {/* Socials */}
        <Socials />
        <hr/>
       
      </div>
    )

  }
}
export default App;