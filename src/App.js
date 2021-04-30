import React, {useState, useEffect} from 'react';
import Post from './Post'; //Importing the Post.js
import './App.css';
import { db } from './firebase';

function App() {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  
  // useEffect -> Runs a piece of code based on specific condition

  useEffect(()=>{
    //this is where the code runs
    db.collection('posts').onSnapshot(snapshot =>{
      //every time a new post is added, this code fires-up.
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id, 
        post: doc.data()})))
    })
  }, []);



  return (
    <div className="app">
    <Modal
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2>I am a modal</h2>
        </div>
      </Modal>
    
    <div className="app__header">
      <img
        className="app_headerImage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt=""
      />

    </div>


    <h1>Hello World</h1>

    {
      posts.map(({id, post}) =>(
        <Post key= {id} username={post.username} caption={post.caption} imageURL={post.imageURL}/>

      ))
    }
    
    



    </div>
  );
}

export default App;
