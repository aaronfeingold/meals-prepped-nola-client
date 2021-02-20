import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    
      <div className="container">
        <div className="row"> 
          <h3>Welcome</h3>
        </div>
        <div className="row"> 
          <h4>This is an app to help you organize your weekly meals</h4>
        </div>
        <div className="row"> 
          <h5>Use the menu in the right corner to view all meals, or add a new one</h5>
        </div>
        <div>
          <Link to='/login'>Log In</Link>
            <br></br>
          <Link to='/signup'>Sign Up</Link>
        </div>
      </div>
    
  );
}

export default Home;