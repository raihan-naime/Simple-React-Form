import React, { useState } from "react";

const ControlledField = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    
    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
    }else{
        setError('')
    }
  };

  const handleNameOnChange = e =>{
    setName(e.target.value)
  }

  const handleEmailOnChange = e =>{
    setEmail(e.target.value)
  }

  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    // if (password.length < 6) {
    //   setError("Password must be 6 characters or longer");
    // }else{
    //     setError('')
    // }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleNameOnChange} defaultValue={name} placeholder="Name" /> <br />
        <input type="email" onChange={handleEmailOnChange}
          defaultValue={email} name="email" id="" placeholder="Email" required />{" "}
        <br />
        <input
          type="password"
          onChange={handlePasswordOnChange}
          defaultValue={password}
          name="password"
          id=""
          placeholder="Password"
        />{" "}
        <br />
        <input type="submit" value="Submit" required />
      </form>
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledField;
