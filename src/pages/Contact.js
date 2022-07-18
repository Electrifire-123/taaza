import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
const Contact = () => {
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    mobile: "",
    email: "",
    gender: "",
  });

  const interests = [
    {
      interest: "Science",
    },
    {
      interest: "Sports",
    },
    {
      interest: "Politics",
    },
  ];
  const [checked, setCecked] = useState(new Array(interests.length).fill(false));

  useEffect(() => {
    const keydownRef = document.addEventListener(
      "keydown",
      (e) => e.code === "Enter"
    );

    return () => {
      console.log("Component Unmount");
      document.removeEventListener("keydown", keydownRef);
    };
  }, []); // this is component did mount (runs only once)

  // useEffect(() => {
  //   if(interests.length > 0) console.log('componentDidUpdate');
  // },[interests]); //
  // console.log(user)
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const submitInt = []

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    for(let i = 0; i<checked.length; i++){
      if(checked[i]===true){
        submitInt.push(interests[i]);
      }
    }
    console.log(submitInt);
    // logic
    setUser({
      fName: "",
      lName: "",
      mobile: "",
      email: "",
      gender: "",
    });
  };

  const handleInterestChange = (position) => {
    const updateChecked = checked.map((item, index) =>
      index === position ? !item : item
    );
    setCecked(updateChecked);
  };
  const { fName, lName, email, mobile } = user;
  return (
    <>
      <Layout>
        <div className="contact-page">
          <form className="input_container" onSubmit={handleSubmit}>
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
                onChange={handleChange}
              />
              Male
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
              />
              Female
              <input
                type="radio"
                name="gender"
                value="Other"
                onChange={handleChange}
              />
              Other
            </section>
            <h3>Interest</h3>
            {interests.map(({ interest }, index) => {
              return (
                <section key={index} className="input_container">
                  <input
                    type="checkbox"
                    name="interests"
                    value={`${index}`}
                    id={`${index}`}
                    checked={checked[index]}
                    onChange={() => handleInterestChange(index)}
                  />
                  {interest}
                </section>
              );
            })}

            <section className="input_container">
              {/* <button type='submit'>Submit Contact</button> */}
              <Button buttonText="Submit Contact" type="submit" />
            </section>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Contact;

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
