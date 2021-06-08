import React, { useEffect } from 'react';
import Jumbotron from '../components/Jumbotron';

function Cancel() {
  useEffect(() => {
    setTimeout(() => {
      window.location.assign('/')
    }, 4000);
  });

  return (
    <div>
      <Jumbotron>
        <h1>Order Canceled</h1>
        <hr />
        <h2>Your Cart is saved!</h2>
      </Jumbotron>
    </div>
  );
}

export default Cancel;