import React, { useState } from 'react';
import Styles from "./index.module.css";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";


const ColorPallete = (props) => {

    //State
    const [selectedUmbrella, setSelectedUmbrella] = useState("pink");

    //Handler
    const selectUmbrellaHandler = (umbrella) => {
        setSelectedUmbrella(umbrella);
        props.selectUmbrella(umbrella);
    }

    return (
        <>
            <Grid container spacing={1} alignItems="center" className={`${Styles.Color_Pallete_Container}`}>
                <Grid item xs={1}>
                    <div className={`${Styles.Color_Pallete_Outer_Shell} ${Styles.Color_Dark_Pink} `} onClick={() => selectUmbrellaHandler("pink")}>
                        {/* Outer Circle */}
                        <div className={`${Styles.Color_Pallete_Inner_Shell} ${Styles.Color_Light_Pink}`}>
                            {/* Inner Circle */}

                        </div>
                    </div>
                </Grid>
                <Grid item xs={1}>
                    <div className={`${Styles.Color_Pallete_Outer_Shell} ${Styles.Color_Dark_Blue}`} onClick={() => selectUmbrellaHandler("blue")}>
                        <div className={`${Styles.Color_Pallete_Inner_Shell} ${Styles.Color_Light_Blue}`}>
                            {/* Inner Circle */}

                        </div>
                    </div>
                </Grid>
                <Grid item xs={1}>
                    <div className={`${Styles.Color_Pallete_Outer_Shell} ${Styles.Color_Dark_Yellow}`} onClick={() => selectUmbrellaHandler("yellow")}>
                        <div className={`${Styles.Color_Pallete_Inner_Shell} ${Styles.Color_Light_Yellow}`}>
                            {/* Inner Circle */}

                        </div>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}
const mapStateToProps = (state, ownProps) => {
    return {
        fileSelected: state.file,
        selectedUmbrella: state.selectedUmbrella,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectUmbrella: (umbrella) => dispatch({ type: "SELECT_UMBRELLA", umbrella: umbrella })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ColorPallete);