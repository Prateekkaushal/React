import React from "react";

const CommentDetail = (props) => {
  return (
    <div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.imageUrl} />
        </a>
      </div>
      <div className="comment">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.decription}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
