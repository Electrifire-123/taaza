import React, { useState, useEffect} from 'react'
import Layout from '../components/Layout'
import Button from '../components/Button';
const Contact = () => {
    const [user, setUser] = useState({
        fName: '',
        lName: '', 
        mobile: '',
        email: '',
        gender: '',
    });

    const [interest, setInterest] = useState([])

    useEffect(() => {
      const keydownRef = document.addEventListener(
        'keydown',
        (e) => e.code === 'Enter' 
      );

      return () => {
        console.log('Component Unmount');
        document.removeEventListener('keydown', keydownRef);
      }

    }, []); // this is component did mount (runs only once)

    // useEffect(() => {
    //   if(interest.length > 0) console.log('componentDidUpdate');
    // },[interest]); // 
    // console.log(user)
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
       
      }
      
      

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(user, interest);
        // logic
        setUser({
          fName: '',
          lName: '', 
          mobile: '',
          email: '',
          gender: '',
      });
    }

    const handleInterestChange = (e) => {
        setInterest([...interest, e.target.value]);
    }
    const {fName,lName,email, mobile} =  user;
  return (
    <>
        <Layout>
            <div className='contact-page'>
            <form className='input_container' onSubmit={handleSubmit}>
            <section className="input_container">
                <label>First Name</label>
                <input
                  type="text"
                  value={fName}
                  onChange={handleChange}
                  name="fName"
                  />
              </section>
              <section className="input_container">
                <label>Last Name</label>
                <input
                  type="text"
                  value={lName}
                  onChange={handleChange}
                  name="lName"
                />
              </section>
              <section className="input_container">
                <label>Mobile Number</label>
                <input
                  type="number"
                  value={mobile}
                  onChange={handleChange}
                  name="mobile"
                />
              </section>
              <section className="input_container">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={handleChange}
                  name="email"
                  />
              </section>
              <section className="input_container">
                <label>Gender</label>
                <input 
                type="radio" 
                name="gender" 
                value="male"
                onChange={handleChange}  />
                Male
                <input 
                type="radio" 
                name="gender" 
                value="female"
                onChange={handleChange} />
                Female
                <input 
                type="radio" 
                name="gender" 
                value="Other"
                onChange={handleChange} />
                Other
              </section>
              <section className="input_container">
                <label>Interest</label>
                <input 
                type="checkbox" 
                name="interest" 
                value="sports" 
                id="sports"
                onChange={handleInterestChange}
                /> Sports
                <input 
                type="checkbox" 
                name="interest" 
                value="science" 
                id="science"
                onChange={handleInterestChange}
                />
                science
                <input 
                type="checkbox" 
                name="interest" 
                value="politics" 
                id="politics"
                onChange={handleInterestChange}
                />
                politics
              </section>
              <section className="input_container">
                {/* <button type='submit'>Submit Contact</button> */}
                <Button buttonText="Submit Contact" type="submit" />
              </section>
            </form>
            </div>
        </Layout>
    </>
  )
}

export default Contact

// Interview question on removeEventListener()

// useEffect(() => {
//   window.addEventListener("resize", () => {
//     updateLightSaber(pos);
//   });
// return () =>window.removeEventListener("resize", () => {
//   updateLightSaber(pos);
// });
// }, [pos]);

// useEffect(() => {
//   function _updateLightSaber() {
//     updateLightSaber(pos);
//   }
//   window.addEventListener("resize", _updateLightSaber);
//   return () => window.removeEventListener("resize", _updateLightSaber);
// }, [pos]);