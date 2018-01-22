import React from 'react';

const LoadContractButton = ({ onUserClick }) => {
  return (
    <button
      className="pure-button pure-button-primary"
      onClick={event => onUserClick(event)}
    >
      Load Contracts
    </button>
  );
};

export default LoadContractButton;
