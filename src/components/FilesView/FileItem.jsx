import { InsertDriveFile } from '@material-ui/icons';
import React from 'react';
import './../../styles/FileItem.css';



const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

const FileItem = ({id, caption, timestamp,fileUrl,size}) => {
    const fileDate = `${timestamp?.toDate().getDate()} ${monthNames[timestamp?.toDate().getMonth() + 1]} ${timestamp?.toDate().getYear()}`

    const getReadableFileString = (fileSizeInByte) =>{

        const byteUnit = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB','ZB','YB'];

        let i= -1
        do {
            fileSizeInByte = fileSizeInByte/1024;
            i++
        } while (fileSizeInByte > 1024);

        return Math.max(fileSizeInByte, 0.1).toFixed(1) + byteUnit[i];
    }

    return (
        <div className='fileItem' >
            <a href={fileUrl} target='_blank' rel='noreferrer' download  >
                <div className="fileItem--left">
                    <InsertDriveFile/>
                    <p>{caption}</p>
                </div>

                <div className="fileItem--right">
                    <p>{fileDate}</p>
                    <p>{getReadableFileString(size)}</p>
                </div>
            </a>
        </div>
    )
}

export default FileItem
