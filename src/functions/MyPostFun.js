import React from 'react'
import { useState } from 'react'

const MyPostFun = (_id) => {

    const [deletedPost, setDeletedPost] = useState(null)

    const editPost = async () => {

    }

    const deletePost = async () => {
        console.log('deleting post', _id)
        fetch("https://tranquil-meadow-31122.herokuapp.com/me/blog/delete", {
            method: "POST",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              blogId: _id
            }),
          })
            .then((res) => {
              if (res.status !== 200 && res.status !== 201) {
                throw new Error("Creating or eidting blog failed!");
              }
              return res.json();
            })
            .then((resData) => {
              setDeletedPost(resData)
              window.location.reload()
            });
    }

    return {editPost, deletePost, deletedPost}
}

export default MyPostFun
