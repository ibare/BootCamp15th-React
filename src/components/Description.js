import React from 'react';

export default function Description({ color = 'white', fontSize = '12pt', title }) {
  return (
    <p style={ {
      color: color,
      fontSize: fontSize,
    } }>
      { title }
    </p>
  );
}
