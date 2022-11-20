import React from "react";
import { PostsContainer, Heading, Img, Info } from './Post.styles';
import {Link} from 'react-router-dom'

const Post = ({ post: { title, body, imgUrl, author } }) => {

  return (
    <PostsContainer>
      <Heading>{title}</Heading>
      <Link to='#' href={imgUrl}>
        <Img src={imgUrl} alt={title}/>
      </Link>
      <p>{body}</p>
      <Info>	
        <h4>Written by: {author}</h4>
      </Info>
    </PostsContainer>
  );
};

export default Post;
