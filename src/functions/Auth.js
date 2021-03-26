import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'

const Auth = () => {

const history = useHistory();

  useEffect(() => {
    isUserAuth();
  }, []);

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const inputHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    if(name === "name") {
      setName(value)
    }else {
      name === "email" ? setEmail(value) : setPass(value)
    }
  }

  const isUserAuth = async () => {
    const res = await fetch(`https://tranquil-meadow-31122.herokuapp.com/me`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const result = await res.json();
    const user = result.user;
    if(user) {
        setIsLoggedIn(true)
        history.push({
            pathname: '/user/'+user._id
        })
    }
  };

  const userLogin = async (e) => {
    e.preventDefault()
    const res = await fetch('https://tranquil-meadow-31122.herokuapp.com/auth/login', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: pass
        })
    })
    const result = await res.json();
    console.log(result)
    localStorage.setItem('token', result.token);
    window.location.reload()
  }
  const userSignUp = async (e) => {
    e.preventDefault()
    const res = await fetch('https://tranquil-meadow-31122.herokuapp.com/auth/signup', {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: pass
        })
    })
    const result = await res.json();
    localStorage.setItem('token', result.token);
    // window.location.reload()
  }

  return { isUserAuth, userLogin, inputHandler, isLoggedIn, userSignUp };
};

export default Auth;
