import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
  var footerWrapper = {
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    backgroundColor: 'white',
    color: 'white',
    textAlign: 'center'
  };
  
  var childElements = {
    display: 'inline-block',
    float: 'left',
    padding: '15px'
  };
  return (
    <footer style={footerWrapper}>
      <div style={childElements}><Link to="/admin">Admin</Link></div>
    </footer>
  );
}

export default Footer;