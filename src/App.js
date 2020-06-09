import React from 'react';
import './App.css';
import Header from './components/Header';


function App() {
  const onClickHandler = () => {
    alert('좀 더 많은 정보');
  }

  return (
    <div className="App">
      <Header moreInfo={ onClickHandler } />
    </div>
  );
}

export default App;
