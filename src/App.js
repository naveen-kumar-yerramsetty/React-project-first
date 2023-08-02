// App.js
import React from 'react';
import './App.css';
import MyAppBar from './Appbar';

const App = () => {
  return (
    <div className="app-container">
      <MyAppBar />
      <div className="container">
        <div className="layout layout1">Profile Picture</div>
        <div className="layout layout2">Tagline</div>
        <div className="layout layout3">Status and appointment schedule link</div>
        <div className="layout layout4">Key skills</div>
        <div className="layout layout5">Experience summary</div>
        <div className="layout layout6">Qualifications</div>
      </div>
    </div>
  );
};

export default App;
