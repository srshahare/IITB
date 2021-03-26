import React from 'react'
import HomeFun from '../functions/HomeFun';
import PostItem from './PostItem';

const News = () => {
    const {news} = HomeFun();

    return (
        <div className="Home">
            {news.length !== 0 &&
            news.map(item => (
                <PostItem value={"N"} item={item} key={item.description} />
            ))}
        </div>
    )
}

export default News
