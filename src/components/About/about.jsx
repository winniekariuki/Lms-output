import React, { Component } from 'react';
import '../Home/main.css'

const About = () => (
  <div class="container" >
    <div class="header"	>
     
      <h1>Covet Fashion <img src="https://i.pinimg.com/originals/ea/aa/5f/eaaa5f39862b3a573f83b863c11a6f95.jpg" height="25" width="21" /></h1>
    </div>
    <div class="main">
      <div class="left">
        <p><h2>Welcome to Covet Fashion</h2></p>
        <p><img src="https://i.pinimg.com/originals/ea/aa/5f/eaaa5f39862b3a573f83b863c11a6f95.jpg" height="350" width="500" />
        </p>
        <p>A fashion house for every type of  woman.<br />We serve our customers with clothes from well known international fashion brands.<br />Fashion advice from our fashion experts at a free advice</p>
      </div>
      <div class="right">
        <p><h3>Services and products we offer:</h3>
          <ul class="services">
            <li>wedding gowns</li>
            <li>halloween costumes</li>
            <li>designer clothes</li>
            <li>Ankara</li>
            <li>hiring services for big occassions</li>
            <li>styling and photography</li>
          </ul>
                  
        </p>
      </div>
    </div >
    
    <div class="footer">
      <p class="copy">&copy; Copyright Covet Fashion 2018</p>
    </div>
  </div>
)

export default About



