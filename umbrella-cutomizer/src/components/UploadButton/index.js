import React, { useRef } from 'react';
import { Grid } from "@material-ui/core"
import Styles from "./index.module.css";
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

const UploadButton = () => {

    //Vairables
    const uploadLogoRef = useRef();

    return (
        <div className={Styles.Button_Container}>
            <Grid container >
                <Grid item xs={1}>
                    <BackupOutlinedIcon className={`${Styles.Icon}`} />
                </Grid>
                <Grid item xs={10}>
                    <input type="file" style={{ display: "none" }} ref={uploadLogoRef} />
                    <div className={Styles.Button_Text}>
                        Upload Logo
                    </div>
                </Grid>
                <Grid item xs={1}>
                    <CloseOutlinedIcon className={`${Styles.Icon}`} />
                </Grid>
            </Grid>
        </div>
    );
}

export default UploadButton;