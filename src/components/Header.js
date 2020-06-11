import React, { useState } from 'react';
import Logo from './Logo';
import Description from './Description';
import Footer from './Footer';

export default function Header({ moreInfo }) {
  const classString = "App-header";
  const [fontSize, setFontSize] = useState(15);

  return (
    <header className={classString}>
      <Logo moreInfo={moreInfo} />
      <div onClick={ () => {
        setFontSize(fontSize + 1);
      }  }>
        <Description 
          color="yellow" 
          fontSize={ `${fontSize}px` }
          title="안녕하세요, 첫 React App입니다." />
      </div>  
      <Footer text="React를 배워봅시다"/>
    </header>
  );
}
