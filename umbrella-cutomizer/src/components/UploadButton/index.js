import React, { useRef, useState } from 'react';
import { Grid } from "@material-ui/core"
import Styles from "./index.module.css";
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

const UploadButton = () => {

    //State
    const [fileSelected, setFileSelected] = useState();
    const [fileTypeError, setFileTypeError] = useState(false);
    const [fileSizeError, setFileSizeError] = useState(false);

    //Vairables
    const uploadLogoRef = useRef();

    //Lifecycle

    // Handler
    const uploadHandler = () => {
        uploadLogoRef.current.click();
    }

    const inputFileHandler = (e) => {
        try {
            const file = e.target.files[0];
            console.log(file);
            //Validate
            if (validateFileType(file.name) && validateFileSize(file.size)) {
                setFileSelected(file);
            }
        }
        catch (e) {
            console.error("Something Went Wrong , while selecting the file!!", e);
        }
    }
    const validateFileType = (name) => {
        const allowedType = ["jpg", "JPG", "png", "PNG"];
        for (let type of allowedType) {
            if (name.includes(type)) {
                setFileTypeError(false);
                return true;
            }
        }
        setFileTypeError(true);
        return false;
    }

    const validateFileSize = (size) => {
        if (size <= 5000000) {
            setFileSizeError(false);
            return true;
        }
        setFileSizeError(true);
        return false;
    }

    const removeSelectedFile = () => {
        setFileSelected("");
        setFileSizeError(false);
        setFileTypeError(false);
    }

    return (
        <>
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
            <div>
                {fileSizeError ? <span className={Styles.ErrorOcurred}> File size limit exceeded </span> : null}
                {fileTypeError ? <span className={Styles.ErrorOcurred}> Unsupported File Format </span> : null}
            </div>
        </>
    );
}

export default UploadButton;