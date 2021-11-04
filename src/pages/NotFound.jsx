import Header from 'components/Header';
import React from 'react';

const NotFound = () => {
  return (
    <div className="not-found">
      <Header />
      <h1>ERREUR 404: page not found</h1>
    </div>
  );
};

export default NotFound;