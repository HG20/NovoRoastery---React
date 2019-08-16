import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class Product_Request extends Component {
    state ={ 
        products: []
    }


componentDidMount() {
    axios.get(`http://localhost:8080/product?title = Brazilia`)
      .then(res => {
        return res.data;
      })
  }


render() {
    return (
      <ul>
        { this.state.products.id}
      </ul>
    )
  }
}

export default Product_Request;