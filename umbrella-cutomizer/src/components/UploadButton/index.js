import React, { useRef, useState } from 'react';
import { Grid } from "@material-ui/core"
import Styles from "./index.module.css";
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

const UploadButton = () => {

    //State
    const [fileSelected, setFileSelected] = useState();

    //Vairables
    const uploadLogoRef = useRef();

    //Lifecycle

    // Handler
    const uploadHandler = () => {
        uploadLogoRef.current.click();
    }

    const inputFileHandler = (e) => {
        try {
            setFileSelected(e.target.files[0]);
        }
        catch (e) {
            console.error("Something Went Wrong , while selecting the file!!", e);
        }
    }

    const removeSelectedFile = () =>
    {
        setFileSelected("");
    }

    return (
        <div className={Styles.Button_Container}>
            <Grid container >
                <Grid item xs={1}>
                    <BackupOutlinedIcon className={`${Styles.Icon}`} />
                </Grid>
                <Grid item xs={10}>
                    <input type="file" style={{ display: "none" }} ref={uploadLogoRef} onChange={(e) => inputFileHandler(e)} />
                    <div className={Styles.Button_Text} onClick={uploadHandler}>
                        {fileSelected ? fileSelected.name : "Upload Logo"}
                    </div>
                </Grid>
                <Grid item xs={1}>
                    {fileSelected ? <CloseOutlinedIcon className={`${Styles.Icon}`} onClick={removeSelectedFile} /> : null}
                </Grid>
            </Grid>
        </div>
    );
}

export default UploadButton;