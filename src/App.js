import React from 'react';
import './custom.css';
import Header from './header.js';
import Profile from './profile.js';
import Skill from './skill.js';
import Footer from './footer.js';
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
