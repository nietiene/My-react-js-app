import React from "react";
import Footer from "./footer.js";
import Header from "./header.js";
import SideBar from "./sidebar.js";
import UserList from "./userList.js"

const DashBoard = () => {
    return (
    <div>
        <Header/>
        <SideBar/>
        <UserList/>
        <Footer/>
    </div>
    );
}

export default DashBoard;