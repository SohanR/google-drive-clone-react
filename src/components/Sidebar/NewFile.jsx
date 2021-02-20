import { Modal } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Add } from '@material-ui/icons'
import firebase from 'firebase'
import React, { useState } from 'react'
import '../../styles/NewFile.css'
import { db, storage } from './../../firebase'



const getModalStyle = () =>{
    return{
        top:`50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`
    }
}

const useStyle = makeStyles((theme) => ({
    paper:{
        position: 'absolute',
        width: 400,
        backgroundColor:theme.palette.background.paper,
        border: theme.shadows[5],
        padding: theme.spacing(2,4,3),
    },
}))

const NewFile = () => {
    const classes = useStyle();
    const [modalStyle] = useState(getModalStyle);
    const [open,setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleOpen = () =>{
        setOpen(true)
    }

    const handleClose = () =>{
        setOpen(false)
    }

    const handleChange = (e)=>{
        if (e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }

    const handleUpload = () =>{
        setUploading(true)

        storage.ref(`files/${file.name}`).put(file).then(snapshot => {
            console.log(snapshot);

            storage.ref(`files`).child(file.name).getDownloadURL().then(url=>{
                db.collection('myFiles').add({
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    caption: file.name,
                    fileUrl: url,
                    size:snapshot._delegate.bytesTransferred,
                })

                setUploading(false)
                setOpen(false)
                setFile(null)
            })
        })
    }

    return (
        <div className='newFile'>
            <div className="newFile_container" onClick={handleOpen} >
                <Add/>
                <p>New</p>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
               <div className={classes.paper} style={modalStyle} >
                    <p>Select files you want to upload!</p>
                    {
                        uploading ? (
                            <p>Uploading...</p>
                        )
                        : (
                            <>
                                <input type="file" onChange={handleChange}/>
                                <button onClick={handleUpload} >Uplaod</button>
                            </>
                        )
                    }
               </div>
            </Modal>

            
        </div>
    )
}

export default NewFile
