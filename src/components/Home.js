import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div>
      <h3>Welcome to Homepage</h3>
      <Link to={'./list'}>
        <button variant="raised">
            My List
        </button>
      </Link>
    </div>
    );
  }
}
export default Home;