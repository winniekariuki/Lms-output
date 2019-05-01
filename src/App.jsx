import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/index.jsx';
import About from './components/About/about.jsx';
import Products from './components/Products/products.jsx';
import Contact from './components/Contact/contact.jsx';
import 'semantic-ui-css/semantic.min.css';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact  />
            <Route path="/about" component={About} exact />
            <Route path="/products" component={Products} exact />
            <Route path="/contact" component={Contact} exact />
            
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;
