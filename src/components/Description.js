import React from 'react';
import { connect } from 'react-redux';

function Description({ color = 'white', fontSize = '12pt', title, seconds }) {
  return (
    <p style={ {
      color: color,
      fontSize: fontSize,
    } }>
      { title } : { seconds }
    </p>
  );
}

export default connect(
  state => ({
    seconds: state.seconds
  })
)(Description);


