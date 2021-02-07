import AppsIcon from '@material-ui/icons/Apps';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from '@material-ui/icons/Settings';
import React from 'react';
import GDriveLogo from './../../media/google-drive-logo.png';
import './../../styles/Header.css';


const index = () => {
    return (
        <div className="header">
            <div className="header_logo">
                <img src={GDriveLogo} alt="google drive logo"/>
                <span>Drive</span>
            </div>
            <div className="header_searchContainer">
                <div className="header_searchBar">
                    <SearchIcon/>
                    <input type="text" placeholder="Search in Drive"/>
                    <ExpandMoreIcon/>
                </div>
            </div>
            <div className="header_icons">
                <span>
                    <HelpOutlineIcon/>
                    <SettingsIcon/>
                </span>

                <AppsIcon/>
                <img src="" alt="User Photo"/>
            </div>
        </div>
    )
}

export default index
