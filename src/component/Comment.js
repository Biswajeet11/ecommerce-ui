import React from "react";
import { FaUser } from "react-icons/fa";

const Comment = ({ comments }) => {
  console.log("commentData", comments);
  // const { comments, edit, reply, del, onComment } = commentData;
  return (
    <div>
      <h1>Comments:</h1>
      <form className="form-tag" onSubmit={() => console.log("jjj")}>
        <input type="text" className="input-box" />
        <input type="submit" className="comment-button" value="Comment" />
      </form>
      {comments.map((c) => {
        return (
          <div>
            <div className="comment-name">
              <FaUser size={30} />
              <h2>{c.name}</h2>
              <h2>{c.comment}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
