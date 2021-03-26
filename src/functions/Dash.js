import React from "react";
import { useState } from "react";
import { useHistory } from 'react-router-dom'

const Dash = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showDash, setShowDash] = useState(false);
  const [myBlogs, setMyBlogs] = useState([])

  const openCreateDialog = () => {
    setShow(!show);
  };
  const closeDash = () => {
    setShowDash(!showDash);
    fetchMyPosts();
  };

  const logout = async () => {
    localStorage.removeItem('token');
    history.push('/')
  }

  const inputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "url":
        setImage(value);
        break;
      case "title":
        setTitle(value);
        break;
      case "content":
        setContent(value);
        break;
      default:
        console.log("wrong input");
    }
  };

  const createPost = async () => {
    fetch("https://tranquil-meadow-31122.herokuapp.com/createblog", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        image: image,
        content: content,
      }),
    })
      .then((res) => {
        console.log(res)
        window.location.reload();
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Creating or eidting blog failed!");
        }
      })
  };

  const fetchMyPosts = async () => {
    //my blogs
    fetch("https://tranquil-meadow-31122.herokuapp.com/myblogs", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setMyBlogs(result.blogs)
      });
  };


  const handleTabChange = () => {};

  return {
    openCreateDialog,
    show,
    createPost,
    inputChange,
    image,
    content,
    title,
    handleTabChange,
    showDash,
    closeDash,
    myBlogs,
    logout
  };
};

export default Dash;
