import React from 'react';
import { Grid } from '@material-ui/core';
import Styles from "./index.module.css";
import Spinner from '../../components/Spinner';
import UploadButton from "../../components/UploadButton";

const Customizer = () => {
    return (
        <>
            <Grid container className={Styles.Outer_Container}>
                <Grid item xs={6} >
                    {/* Preview */}
                    <Grid container direction="column" justify="center" alignItems="center" className={Styles.Outer_Container}>
                        <Grid item>
                            <Spinner />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} >
                    {/* Tools */}
                    <Grid container direction="column" justify="center" alignItems="left" className={Styles.Outer_Container}>
                        <Grid item>
                            <span className={`${Styles.Heading_Bold} ${Styles.fontFamily}`}> Custom Umbrella</span>
                        </Grid>
                        <Grid item>
                            <Grid container spacing={1} alignItems="center" className={`${Styles.Color_Pallete_Container}`}>
                                <Grid item xs={1}>
                                    <div className={`${Styles.Color_Pallete_Outer_Shell} ${Styles.Color_Light_Pink} `}>
                                        {/* Outer Circle */}
                                        <div className={`${Styles.Color_Pallete_Inner_Shell} ${Styles.Color_Dark_Pink}`}>
                                            {/* Inner Circle */}

                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={1}>
                                    <div className={`${Styles.Color_Pallete_Outer_Shell} ${Styles.Color_Light_Blue}`}>
                                        <div className={`${Styles.Color_Pallete_Inner_Shell} ${Styles.Color_Dark_Blue}`}>
                                            {/* Inner Circle */}

                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={1}>
                                    <div className={`${Styles.Color_Pallete_Complete_Shell} ${Styles.Color_Light_Yellow}`}>
                                        <div className={`${Styles.Color_Pallete_Inner_Shell} ${Styles.Color_Dark_Yellow}`}>
                                            {/* Inner Circle */}

                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
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

export default Customizer;