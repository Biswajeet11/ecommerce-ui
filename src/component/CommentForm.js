import React, { useState } from "react";

const CommentForm = ({ handleSubmit }) => {

    const [text, setText] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(text);
        setText("");
    }

    return (
        <form onSubmit={onSubmit}>
            <textarea type="text" className="comment-form-textarea" value={text} onChange={handleChange} />
            <button className="comment-form-button">Submit</button>
        </form>
    );
}

export default CommentForm;