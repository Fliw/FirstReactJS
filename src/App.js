import React from 'react';
import './Home/custom.css';
import Header from './Home/header.js';
import Profile from './Home/profile.js';
import Skill from './Home/skill.js';
import Footer from './Home/footer.js';
function App() {
  return (
    <div className="App">
      <div className="Tengah">
      <Header/>
      <Profile/>
      <Skill/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
