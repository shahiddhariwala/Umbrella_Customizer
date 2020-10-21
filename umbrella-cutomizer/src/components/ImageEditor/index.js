import React, { useState, useEffect } from 'react';
import Spinner from "../Spinner/index";
import BlueUmbrella from "../../assets/blueUmbrella.png";
import PinkUmbrella from "../../assets/pinkUmbrella.png";
import YellowUmbrella from "../../assets/yellowUmbrella.png";
import { connect } from "react-redux";

const umbrellas = {
    pink: PinkUmbrella,
    blue: BlueUmbrella,
    yellow: YellowUmbrella,

}

const ImageEditor = (props) => {

    const [loader, setLoader] = useState(false);
    return (
        <>
            {loader ? <Spinner /> :
                <>
                    <img src={umbrellas[props.selectedUmbrella]} style={{ height: "50vh" }} />
                </>
            }

        </>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        selectedUmbrella: state.selectedUmbrella,
    }
}

export default connect(mapStateToProps)(ImageEditor);