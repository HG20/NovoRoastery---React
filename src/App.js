import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import DespreNoi from './components/DespreNoi';
import PrajitoriaNoastra from './components/PrajitoriaNoastra';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Authentificare from './components/Authentificare';
import GDPR from './components/GDPR';
import Checkout from './components/Checkout';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar>
        </Navbar>
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/desprenoi" component={DespreNoi}/>
          <Route path="/prajitorianoastra" component = {PrajitoriaNoastra}/>
          <Route path="/contact" component = {Contact}/>
          <Route path="/authentificare" component = {Authentificare}/>
          <Route path="/gdpr" component = {GDPR}/>
          <Route path="/checkout" component = {Checkout}/>
          <Route component={Default}/>
        </Switch>
        <Modal></Modal>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;
