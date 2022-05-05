import React, { useContext } from 'react';
import {UserContext} from '../App.js';

function Post({image, content, user}) {

  const currentUser = useContext(UserContext);
  const isCurrentUser = currentUser === user;
  
  return (
    <>
      {image &&(
        <img 
          style={{height: 100, width: 200, objestFit: 'cover'}}
          src={URL.createObjectURL(image)}
          alt="Post Cover"
        />
      )}

      <p>{content}</p>
      <div style={{color: isCurrentUser && 'red'}} >{user}</div>

    </>

  );
}

export default Post;