import React from 'react';
import { Grid } from '@material-ui/core';
import Styles from "./index.module.css";
import ImageEditor from '../../components/ImageEditor';
import UploadButton from "../../components/UploadButton";
import ColorPallete from "../../components/ColorPallete";
import { connect } from "react-redux";

const umbrellas = {
    pink: "#f079a1",
    blue: "#a9e0fa",
    yellow: "#e3e9ad",

}

const Customizer = (props) => {
    return (
        <>
            <Grid container className={Styles.Outer_Container} style={{ backgroundColor: umbrellas[props.selectedUmbrella] }}>
                <Grid item xs={6} >
                    {/* Preview */}
                    <Grid container direction="column" justify="center" alignItems="center" className={Styles.Outer_Container}>
                        <Grid item>
                            <ImageEditor />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} >
                    {/* Tools */}
                    <Grid container direction="column" justify="center" className={Styles.Outer_Container}>
                        <Grid item>
                            <span className={`${Styles.Heading_Bold} ${Styles.fontFamily}`}> Custom Umbrella</span>
                        </Grid>
                        <Grid item>
                            <ColorPallete />
                        </Grid>
                        <Grid item>
                            <div className={Styles.Inner_Container}>
                                <div className={`${Styles.Heading_SemiBold} ${Styles.fontFamily}`}>Customise your umbrella</div>
                                <div className={`${Styles.fontFamily}`}>upload a logo for an instant preview.</div>
                            </div>
                        </Grid>
                        <Grid item>
                            <div className={`${Styles.fontFamily} ${Styles.smallFont}`}> .png and .jpg files only. Max file size is 5MB.</div>
                        </Grid>
                        <Grid item>
                            <UploadButton />
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        selectedUmbrella: state.selectedUmbrella,
    }
}


export default connect(mapStateToProps)(Customizer);