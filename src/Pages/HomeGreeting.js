import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Greeting from '../components/Greeting';
import Authenticate from '../components/Authenticate';

export const HomeGreeting = () => {
  return (
      <div>

          <div className="Homepage-header">
              <Navbar />
              <h1>Music ProgrammingProject</h1>
              <p>Name = Liam Aspell</p>
              <p>Student Number = 17300046</p>
              
              <Authenticate />

          </div>
      </div>
  )

}

export default HomeGreeting