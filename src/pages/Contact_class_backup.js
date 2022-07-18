import React, { Component } from "react";

import Button from "../components/Button";
import "../style.css";
import Layout from "../components/Layout";

export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      fName: "",
      lName: "",
      mobile: "",
      email: "",
      gender: "",
      interest: [],
      filtered: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInterestChange = this.handleInterestChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // console.log(this.state);
  }

  handleInterestChange(e) {
    this.setState({
      [e.target.name]: [...this.state.interest, e.target.value],
      [e.target.id]: [...this.state.filtered, e.target.checked],
    });
    // if(this.state.interest === true){
    //     return this.state.filtered = this.target.value;
    // }
    console.log(this.state);
  }

  handleSubmit(e){
      e.preventDefault();
      console.log(this.state);
      this.setState({
        fName: "",
        lName: "",
        mobile: "",
        email: "",
        gender: "",
        interest: [],
        filtered: []
      });
      
  }

  componentDidMount(){
      document.addEventListener("keydown", (e) => e.code === "Enter" && console.log(this.state))
  }

  componentWillUnmount(){
    document.removeEventListener('keydown');
  }

  render() {
    const { fName, lName, mobile, email} = this.state;
    console.log(this.state);
    return (
      <Layout>
        
        <div className="contact-page">
          <div className="form">
            <form onSubmit={this.handleSubmit}
            >
              <section className="input_container">
                <label>First Name</label>
                <input
                  type="text"
                  value={fName}
                  onChange={this.handleChange}
                  name="fName"
                  />
              </section>
              <section className="input_container">
                <label>Last Name</label>
                <input
                  type="text"
                  value={lName}
                  onChange={this.handleChange}
                  name="lName"
                />
              </section>
              <section className="input_container">
                <label>Mobile Number</label>
                <input
                  type="number"
                  value={mobile}
                  onChange={this.handleChange}
                  name="mobile"
                />
              </section>
              <section className="input_container">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={this.handleChange}
                  name="email"
                  />
              </section>
              <section className="input_container">
                <label>Gender</label>
                <input 
                type="radio" 
                name="gender" 
                value="male"
                onChange={this.handleChange}  />
                Male
                <input 
                type="radio" 
                name="gender" 
                value="female"
                onChange={this.handleChange} />
                Female
                <input 
                type="radio" 
                name="gender" 
                value="Other"
                onChange={this.handleChange} />
                Other
              </section>
              <section className="input_container">
                <label>Interest</label>
                <input 
                type="checkbox" 
                name="interest" 
                value="sports" 
                id="sports"
                onChange={this.handleInterestChange}
                /> Sports
                <input 
                type="checkbox" 
                name="interest" 
                value="science" 
                id="science"
                onChange={this.handleInterestChange}
                />
                science
                <input 
                type="checkbox" 
                name="interest" 
                value="politics" 
                id="politics"
                onChange={this.handleInterestChange}
                />
                politics
              </section>
              <section className="input_container">
                {/* <button type='submit'>Submit Contact</button> */}
                <Button buttonText="Submit Contact" type="submit" />
              </section>
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Contact;
