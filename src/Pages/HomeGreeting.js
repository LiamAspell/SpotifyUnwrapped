import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Greeting from '../components/Greeting';

export const HomeGreeting = () => {
  return (
      <div>

          <div className="App-header">
              <Navbar />
              <h1>Music Programming Project</h1>
              <p>Name = Liam Aspell</p>
              <p>Student Number = 17300046</p>
              <Button href="/Home"><a href="/Git">Take me there</a></Button>
          </div>
      </div>
  )

}

export default HomeGreeting