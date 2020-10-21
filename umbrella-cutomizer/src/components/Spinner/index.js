import React from 'react';
import logo from '../../assets/loader_icon.svg';
import pinkLoader from '../../assets/pinkLoader.svg';
import blueLoader from '../../assets/blueLoader.svg';
import yellowLoader from '../../assets/yellowLoader.svg';

import "./spinner.css"
const Spinner = (props) => {

    const getRightSpinner = () => {
        switch (props.umbrella) {
            case "pink":
                return <img src={pinkLoader} className="Spinner" alt="logo" />
            case "blue":
                return <img src={blueLoader} className="Spinner" alt="logo" />
            case "yellow":
                return <img src={yellowLoader} className="Spinner" alt="logo" />
            default:
                return <img src={logo} className="Spinner" alt="logo" />
        }
    }
    return (
        <>
            {getRightSpinner()}
        </>
    );
}

export default Spinner;