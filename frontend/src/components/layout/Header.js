import React from 'react';
import '../../styles/components/layout/Header.css'
const Header = (props) => {
    return (
        <header>
            <div className='holder header'>
                <img src='images/logo.png' width={100} alt='logo impresiones 3d' />
                <h1>PRINTERƎD</h1>
            </div>
        </header>
    );
}

export default Header;