import React from 'react'
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create"; 
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from '@material-ui/icons/InsertComment';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2> Clever Programer </h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Rafeh Qazii
                    </h3>
                </div>
                <CreateIcon/>
                <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
                
                
            </div>
        </div>
    )
}

export default Sidebar