import React, { useState, useEffect } from 'react';
import Spinner from "../Spinner/index";
import BlueUmbrella from "../../assets/blueUmbrella.png";
import PinkUmbrella from "../../assets/pinkUmbrella.png";
import YellowUmbrella from "../../assets/yellowUmbrella.png";
import { connect } from "react-redux";
import Styles from "./index.module.css";

const umbrellas = {
    pink: PinkUmbrella,
    blue: BlueUmbrella,
    yellow: YellowUmbrella,

}

const ImageEditor = (props) => {

    //State
    const [loader, setLoader] = useState(true);

    //Lifecycle
    useEffect(() => {
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 2000);
    }, [props.fileSelected, props.selectedUmbrella]);

    return (
        <>
            {loader ? <Spinner umbrella={props.selectedUmbrella} /> :
                <>
                    <div className={Styles.Outer_Container}>
                        <img src={umbrellas[props.selectedUmbrella]} style={{ height: "50vh" }} alt={"ubrella"} />
                        <div className={Styles.Overlay}><img src={props.fileSelected ? URL.createObjectURL(props.fileSelected) : null}
                            alt={props.fileSelected ? props.fileSelected.name : ""}
                            style={{ height: "4vh" }}
                        /></div>
                    </div>
                </>
            }

        </>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        selectedUmbrella: state.selectedUmbrella,
        fileSelected: state.file,
    }
}

export default connect(mapStateToProps)(ImageEditor);