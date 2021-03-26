import React from 'react'
import { Modal } from "antd";
import "./main.css";
import PostListItem from './PostListItem';

const DashDialog = ({
    show,
    closeDialog,
    postList
}) => {
    return (
        <div>
             <Modal
        title="Title"
        visible={show}
        width="40vw"
        onCancel={closeDialog}
        onOk={closeDialog}
      >

          <div className="DashPosts">
              <h4>My posts</h4>
              <div className="MyList">
                  {postList.length !== 0 && postList.map(item => (
                      <PostListItem key={item._id} item={item} />
                  ))}
              </div>
          </div>
    
      </Modal>
        </div>
    )
}

export default DashDialog
