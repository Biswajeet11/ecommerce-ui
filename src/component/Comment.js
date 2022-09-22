import React, { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import CommentForm from "./CommentForm";

const Comment = ({ comment, currentUser, parentId = null, replies, addComment, updateComment, deleteComment, activeComment, setActiveComment }) => {

  const canReply = Boolean(currentUser);
  const canEdit = currentUser === comment.userId ? true : false;
  const canDelete = currentUser === comment.userId ? true : false;
  const fixedTime = 30000;
  const timePassed = new Date() - new Date(comment.createdAt) > fixedTime;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  const isReply = activeComment && comment.id === activeComment.id && activeComment.type === "reply";
  const replyId = parentId !=null ? parentId : comment.id;
  console.log("isReply", isReply)

 
  return (
    <div className="comment">
      <div className="comment-image-container">
        <FaUser className="comment-image-container-img " />
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div>{createdAt}</div>
        </div>

        <div className="comment-text">{comment.body}</div>

        <div className="comment-actions">
          {canReply && <div className="comment-action" onClick={() => setActiveComment({ id: comment.id, type: "reply" })}>reply</div>}
          {canEdit && <div className="comment-action" onClick={() => setActiveComment({ id: comment.id, type: "edit" })}>edit</div>}
          {canDelete && <div className="comment-action" onClick={() => deleteComment(comment.id)}>delete</div>}
          {isReply && <CommentForm handleSubmit={(text) => addComment(text, replyId)} />}
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
              activeComment={activeComment}
              setActiveComment={setActiveComment}
              addComment={addComment}
            />
          );
        })}
        </div>)}
      </div>
    </div>
  );
};

export default Comment;
