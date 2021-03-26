import React from 'react'
import { convertMonth } from '../utils/ConvertDate';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MyPostFun from '../functions/MyPostFun';

const PostListItem = ({item}) => {
    const {_id, title, createdAt} = item;

    const {editPost, deletePost} = MyPostFun(_id)

    return (
        <div className="MyItem">
            <div>

            <p><span>{title}</span></p>
            <p>{convertMonth(createdAt)}</p>
            </div>
            <div className="Actions">
                {/* <EditIcon onClick={editPost} /> */}
                <DeleteIcon onClick={deletePost} />
            </div>
        </div>
    )
}

export default PostListItem
