import { React , useState } from 'react'
import LandscapeRoundedIcon from '@mui/icons-material/LandscapeRounded';
import '../../icon.svg'
import './dropBox.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// import { useDropzone } from 'react-dropzone';

export default function DropBox() {
    const [selectedImages, setSelectedImages] = useState([]);

    const onSelectFile = (event) => {
      const selectedFiles = event.target.files;
      const selectedFilesArray = Array.from(selectedFiles);
  
      const imagesArray = selectedFilesArray.map((file) => {
        return URL.createObjectURL(file);
      });
  
      setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  
      // FOR BUG IN CHROME
      event.target.value = "";
    };
  
    function deleteHandler(image) {
      setSelectedImages(selectedImages.filter((e) => e !== image));
      URL.revokeObjectURL(image);
    }
  
    return (
    <>
        <section>
                <label>
                    <LandscapeRoundedIcon />
                    Upload an image
                    <input
                    type="file"
                    className="image"
                    onChange={onSelectFile}
                    accept="image/png , image/jpeg, image/webp"
                    />
                </label>

                    {/* <button
                        className="upload-btn"
                        onClick={() => {
                        console.log(selectedImages);
                        }}
                    >
                        UPLOAD {selectedImages.length} IMAGE
                        {selectedImages.length === 1 ? "" : "S"}
                    </button> */}

                <div className="images">
                    {selectedImages &&
                    selectedImages.map((image) => {
                        return (
                        <div key={image} className="image">
                            <img src={image} height="200" alt="upload" />
                            <button onClick={() => deleteHandler(image)}>
                            <CloseRoundedIcon />
                            </button>
                        </div>
                        );
                    })}
                </div>
        </section>
    </>
    )
}
