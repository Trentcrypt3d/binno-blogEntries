import { React , useRef, useState } from 'react'
import LandscapeRoundedIcon from '@mui/icons-material/LandscapeRounded';
import '../../icon.svg'

export default function dropBox() {
    const inputRef = useRef(null);
    const [image, setImage] = useState("");


    const imageHandlerClick = () =>{
        inputRef.current.click();
    }

    const imageHandlerChange = (event) =>{
        const file = event;
        setImage(event.target.file[0]);
    }

    return (
        <>
            <div onClick={imageHandlerClick}>
                {image ? <img src={URL.createObjectURL(image)} alt="Insert image"/> : <img src="icon.svg" alt="Insert image"  />}
                <input type="file" ref={inputRef} onChange={imageHandlerChange} style={{display:'none'}} 
                />
            </div>
        </>
    )
}
