import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Home extends Component {
  render () {
    return (
      <div className="home-container">
        <h1 className='github-title'>GitHub Battle: Challenge Your Friends</h1>

        <Link className="button" to="/battle">
          Battle
        </Link>
      </div>
    )
  }
}


export default Home;
