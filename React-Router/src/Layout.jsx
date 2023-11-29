import React from "react";
import { Footer, Header } from './Import/ImportModule'
import { Outlet } from "react-router-dom";

function Layout(){
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout;