import { ArrowRight } from '@material-ui/icons';
import React from 'react';
import '../../styles/SidebarItem.css';

const SidebarItem = ({arrow,icon,label}) => {
    return (
        <div className='sidebarItem' >
            <div className="sidebarItem_arrow">
                {arrow && (<ArrowRight/>)}
            </div>

            <div className="sidebarItem_main">
                {icon}
                <p>{label}</p>
            </div>
        </div>
    )
}

export default SidebarItem;