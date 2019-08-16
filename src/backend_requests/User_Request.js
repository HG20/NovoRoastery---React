import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class Order_Request extends Component {
    state ={ 
     users: null
    }


    getUser = (e) => {
        e.preventDefault();
        const user = e.target.elements.username.value;
        axios.get(`https://api.github.com/users/${user}`)
        .then((res) => {
          console.log(res)
        });
      }


      render() {
        return (
          <div className="App">
            <header className ="App-header">
              <h1 className="App-title">HTTP Calls in React</h1>
            </header>
          </div>
        )
      }
}

export default Order_Request;