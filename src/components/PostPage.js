import React from 'react'
import PostPageFun from '../functions/PostPageFun';
import { convertMonth } from '../utils/ConvertDate';
import './main.css'

const PostPage = ({match}) => {

    const {blog} = PostPageFun(match.params);

    return (
        <div className="PostPage">
            <img src={blog&&blog.preview} alt={blog&&blog.title} />
            <p>Date: <span>{convertMonth(blog&&blog.createdAt)}</span></p>
            <h1>{blog&&blog.title}</h1>
            <p>{blog&&blog.content}</p>
        </div>
    )
}

export default PostPage
