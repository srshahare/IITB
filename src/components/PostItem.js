import React from 'react'
import './main.css'
import { convertMonth } from '../utils/ConvertDate';
import { useHistory } from 'react-router-dom'

const PostItem = ({item, value}) => {
    const history = useHistory();
    const {preview, title, content, createdAt, creator, _id, urlToImage, description, publishedAt, author} = item;

    const goToDetailPage = () => {
        history.push({
            pathname: '/post/'+_id  
        })
    }

    return (
        <div className="PostItem">
            <img onClick={goToDetailPage} src={value === "P"?preview:urlToImage} alt="blog post" />
            <div className="PostContent">
                <h5 className="title">{title}</h5>
                <p className="content">{value === "P"?content:description}</p>
            </div>
            <div className="PostMetadata">
                <p>by Id <span>{value==="P"?creator:author}</span></p>
                <p>{convertMonth(value === "P"?createdAt:publishedAt)}</p>
            </div>
        </div>
    )
}

export default PostItem
