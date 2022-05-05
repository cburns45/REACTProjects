import React, { createContext, useCallback, useEffect, useState } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import './App.css';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    document.title = user ? `${user}'s Feed` : 'Please Log In'
  }, [user]);

  const handleAddPost = useCallback((newPost) => {
    setPosts([newPost, ...posts]);
  }, [posts]);


  if (!user){
    return <Login setUser={setUser} />
  }
  
  return (
  <UserContext.Provider value={user}>
    <Header user = {user} setUser = {setUser} />
    <CreatePost user={user} handleAddPost={handleAddPost} />
    <PostList posts={posts}  />
  </UserContext.Provider>
  )
}

export default App;
