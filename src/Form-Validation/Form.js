import React, { useState } from "react";

const Form = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");

    const validatePassowrd = (password) => {
        return password.length >= 8;
    }
    
    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }

    const handleEmail = (e) => {
          const emailValue = e.target.value;
           setEmail(emailValue);

          if (!validateEmail(emailValue)) {
               setEmailError("Please Enter Valid Email");
          } else {
            setEmailError("");
          }
    }

    const handlePassword = (e) => {
        const passwordValue = e.target.value;
        setPassword(passwordValue);

        if (!validatePassowrd(passwordValue)) {
            setPasswordError("Password must be at least 8 chracters");
        } else {
            setPasswordError("");
        }
    }

    const handleForm = (e) => {
        e.preventDefault();

        if (!passwordError && !emailError && password && email) {
            alert("You logged In");
        } else {
            alert("Please correct some mistakes");
        }
    }

    return (
        <div>
            <form onSubmit={handleForm}>
                <label>Email</label>
                <input value={email} onChange={handleEmail}  placeholder="please enter valid email"/><br/>
                {emailError && (
                    <p style={{color :"red"}}>{emailError}</p>
                )}
                <label>Password</label>
                <input value={password} onChange={handlePassword}  placeholder="please enter valid email"/><br/>
                {passwordError && (
                    <p style={{color:"red"}}>{passwordError}</p>
                )}
                <button>Sign Up</button>
            </form>
        </div>
    )
}
export default Form;