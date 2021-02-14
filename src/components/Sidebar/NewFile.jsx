import { Add } from '@material-ui/icons'
import React from 'react'
import '../../styles/NewFile.css'

const NewFile = () => {
    return (
        <div className='newFile'>
            <div className="newFile_container">
                <Add/>
                <p>New</p>
            </div>
        </div>
    )
}

export default NewFile
