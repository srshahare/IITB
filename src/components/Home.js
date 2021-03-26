import React from 'react'
import HomeFun from '../functions/HomeFun'
import PostItem from './PostItem'

const Home = () => {

    const {postList} = HomeFun();

    return (
        <div className="Home">
            {postList.length !== 0 &&
            postList.map(item => (
                <PostItem value={"P"} item={item} key={item._id} />
            ))}
        </div>
    )
}

export default Home
