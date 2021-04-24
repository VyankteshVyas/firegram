import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [err, setErr] = useState(null);
    const types = ['image/png', 'image/jpeg'];


    function changeHandler(e) {
        let selected = e.target.files[0];

        //check if the file type is valid or not
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setErr('');
        } else {
            setFile(null);
            setErr("Please select jpeg or png file");
        }

    }
    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>
            <div className="output">
                {err && <div className="error">{err}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>



        </form>
    );
}

export default UploadForm;