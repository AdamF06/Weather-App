import React from 'react';
import { Menu } from './Icon';

const Header = () => {

    return (
        <>
            <p>{Menu}</p>
            <input placeholder={process.env.REACT_APP_WEATHERAPI_KEY} />
            <title>%REACT_APP_WEATHERAPI_KEY%</title>
        </>

    )
}

export default Header;