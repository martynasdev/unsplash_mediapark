import React from 'react';

const Image = props => (
  <li className="image-wrapper">
    <img src={props.url} alt=""/>
  </li>
);

export default Image;