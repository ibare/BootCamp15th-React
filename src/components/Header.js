import React from 'react';
import Logo from './Logo';
import Description from './Description';
import Footer from './Footer';

export default function Header({ moreInfo }) {
  const classString = "App-header";

  return (
    <header className={classString}>
      <Logo moreInfo={moreInfo} />
      <Description 
        color="blue" 
        fontSize="15px"
        title="안녕하세요, 첫 React App입니다." />
      <Footer text="React를 배워봅시다"/>
    </header>
  );
}
