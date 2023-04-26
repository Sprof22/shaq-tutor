import React, { useState } from "react";

function CommentList() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const fetchComment = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`,{
      method: "DELETE"
    })
    const data = await response.json()
    console.log(data)
    fetchComment()
  }
  return (
    <div>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit Comment</button>
      <button onClick={fetchComment}>Show Comments</button>
      {comments.map((comment) => {
        return (
          <div>
            {comment.id} {comment.text}
            <button onClick={()=> deleteComment(comment.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default CommentList;
