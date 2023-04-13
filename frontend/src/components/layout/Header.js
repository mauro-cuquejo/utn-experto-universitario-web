import React from 'react';
import '../../styles/components/layout/Header.css'
const Header = (props) => {
    return (
        <header>
            <div className='holder header'>
                <img src='images/logo.png' width={100} alt='logo impresiones 3d' />
                <img src='images/printered.png' width={200} alt='h1 printered' />
            </div>
        </header>
    );
}

export default Header;