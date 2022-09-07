import React from "react";
import { FaUser } from "react-icons/fa";

const Comment = ({ comment, currentUser, parentId = null, replies, addComment, updateComment, deleteComment }) => {
  console.log("commentData", comment);
  console.log("replies", replies)
  // const { comments, edit, reply, del, onComment } = commentData;


  return (
    <div className="comment">
      <div className="comment-image-container">
        <FaUser className="comment-image-container-img " />
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div>{comment.createdAt}</div>
        </div>

        <div className="comment-text">{comment.body}</div>

        <div className="comment-actions">
          <div className="comment-action">reply</div>
          <div className="comment-action">edit</div>
          <div className="comment-action">delete</div>
        </div>

        {replies.length > 0 && (<div className="replies">{replies.map((reply) => {
          console.log("@@ reply data", reply)
          return (
            <Comment key={reply.id}
              comment={reply}
              replies={[]}
              currentUser="1"
              addComment={addComment}
              updateComment={updateComment}
              deleteComment={deleteComment}
            />
          );
        })}
        </div>)}
      </div>
    </div>
  );
};

export default Comment;
