import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const PostPageFun = ({postId}) => {

    const [blog, setBlog] = useState(null);

    useEffect(() => {
        fetch(`https://tranquil-meadow-31122.herokuapp.com/feed/page/${postId}`, {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(res => {
                if(res.status !== 200){
                    throw new Error("Failed to fetch posts.");
                  }
                  return res.json();
            })
            .then(resData => {
                setBlog(resData.blog)
            })
            .catch(err => {
                console.log(err)
            })


    }, [])
    
    return {blog}
}

export default PostPageFun
