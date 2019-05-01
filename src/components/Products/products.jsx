
import React, { Component } from 'react';
import '../Home/main.css';
import {
} from 'semantic-ui-react';

const Product = () => (
  <div  class="main-div">
    <div class="header"	>
    <h1>Covet Fashion <img src="https://i.pinimg.com/originals/ea/aa/5f/eaaa5f39862b3a573f83b863c11a6f95.jpg" height="25" width="21" /></h1>
    </div>
  <div class="wrapper">
    <div class="ui three column grid">
      <div class="column">
        <div class="ui fluid card">
          <div >
              <img class="skirt" src="https://i.pinimg.com/564x/fa/c9/e6/fac9e6a8183912f5ecb7136db22b40bc.jpg" height="450" width="400"/>
      </div>
            <div class="content">
              <a class="header"> Gorgeous Asymmetrical Skirts</a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="ui fluid card">
            <div>
              <img class="skirt" src="https://i.pinimg.com/564x/d2/bb/31/d2bb31b42db31b9201d1a472b02e860a.jpg" height="450" width="400" />
             
      </div>
              <div class="content">
                <a class="header">Casual wear</a>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ui fluid card">
              <div>
              <img class="skirt" src="https://i.pinimg.com/564x/f8/99/42/f89942504bd0f2aceb5b3654ad34fc96.jpg" height="450" width="400" />
      </div>
                <div class="content">
                  <a class="header">Elliot Fu</a>
                </div>
              </div>
            </div>
      </div>
    </div>

    <div class="bottom">
      <p class="copy">&copy; Copyright Covet Fashion 2018</p>
    </div>    
  </div>
)

export default Product



