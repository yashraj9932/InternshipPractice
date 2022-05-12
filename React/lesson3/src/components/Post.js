import React from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { deletePost } from "../actions/postActions";

const Post = ({ posts, deletePost }) => {
  let paramss = useParams();
  const navigate = useNavigate();
  const pid = paramss.post_id;

  const handleClick = () => {
    deletePost(pid);
    navigate("/");
  };
  const spost = posts.find((post) => post.id === pid);
  const post = spost ? (
    <div className="post">
      <h4 className="center">{spost.title}</h4>
      <p>{spost.body}</p>
      <div className="center">
        <button className="btn grey" onClick={handleClick}>
          Delete Post
        </button>
      </div>
    </div>
  ) : (
    <div className="center">Loading post...</div>
  );

  return <div className="container">{post}</div>;
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
