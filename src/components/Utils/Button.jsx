import React from 'react';

function Button(props) {
  return <button className='sec-btn'>{props.name}</button>;
}

Button.defaultProps = {
  name: "Not Available"
}

export default Button;
