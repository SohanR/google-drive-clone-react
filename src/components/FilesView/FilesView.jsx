import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import './../../styles/FileView.css';
import FileCard from './FileCard';
import FileItem from './FileItem';

const FilesView = () => {

 
    const [files, setFiles] = useState([]);

    useEffect(() =>{
        db.collection('myFile').onSnapshot(snapshot =>{
            setFiles(snapshot.docs.map(doc =>({
                id:doc.id,
                item:doc.data()
            })))
        })
    },[])
    
    return (
        <div className='fileView' >
            <div className="fileView_row">
                {
                    files.slice(0,5).map(({id,item}) => (
                        <FileCard name={item.caption} /> 
                    ))
                }
            </div>
            
            <div className="fileView_titles">
                <div className="fileView_titles--left">
                    <p>Name</p>
                </div>
                <div className="fileView_titles--right">
                    <p>Last Modified</p>
                    <p>Files size</p>
                </div>
            </div>
            {
                files.map(({id,item})=>(
                 <FileItem id={id} caption={item.caption} timestamp={item.timestamp} fileUrl={item.fileUrl} size={item.size}  />
                ))
            }


        </div>
    )
}

export default FilesView
