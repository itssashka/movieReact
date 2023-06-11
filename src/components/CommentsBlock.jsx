import React from 'react'
import Comment from './Comment/Comment'
import AddComment from './AddComment/AddComment'

const CommentBlock = () => {
  return (
    <div className='comments_block flex_row'>
      <div className="comments flex_column">
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
      <div className='add_comment_block'>
        <AddComment/>
      </div>
    </div>
  )
}

export default CommentBlock