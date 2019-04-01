import React, { Component } from 'react';
import './main.css'
import {
  Button, Form
} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const FormExampleForm = () => (
  <div class="container" >
    <div class="header"	>
      <ul class="breadcrumb">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About us</NavLink></li>
        <li><NavLink to='/'>Contact us</NavLink></li>
      </ul>
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
        <h2>Login into account</h2>
        <Form>
          <Form.Field>
            <input placeholder='email address' />
          </Form.Field>
          <Form.Field>
            <input placeholder='password' />
          </Form.Field>
          <Button class="button" type='login'>Login</Button>
        </Form>
      </div>
    </div >
    <div class="footer">
      <p class="copy">&copy; Copyright Covet Fashion 2018</p>
    </div>
  </div>
)

export default FormExampleForm



