import React from 'react';
import logo from '../../assets/loader_icon.svg';
import "./spinner.css"
const Spinner = () => {
    return (
        <>
            <img src={logo} className="Spinner" alt="logo" />
        </>
    );
}

export default Spinner;