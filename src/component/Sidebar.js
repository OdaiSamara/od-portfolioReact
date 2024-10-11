import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,

} from 'cdbreact';

const Sidebar = () => {
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', position: "fixed", zIndex: "100" }}>
            <CDBSidebar textColor="#fff" backgroundColor="#333" maxWidth='180px'>
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                        Odai Samara
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <a exact href="#home" activeClassName="activeClicked">

                            <CDBSidebarMenuItem icon="home" >Home</CDBSidebarMenuItem>
                        </a>
                        <a exact href="#about" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="table" >About</CDBSidebarMenuItem>
                        </a>
                        <a exact href="#stats" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="sort-numeric-down-alt" >Stats</CDBSidebarMenuItem>
                        </a>
                        <a exact href="#skills" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user" >Skills</CDBSidebarMenuItem>
                        </a>
                        <a exact href="#resume" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="chart-line" >Resume</CDBSidebarMenuItem>
                        </a>

                        <a exact href="#portfolio" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="images" >PoertFolio</CDBSidebarMenuItem>
                        </a>
                        <a exact href="#service" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="hdd" >Service</CDBSidebarMenuItem>
                        </a>
                        <a exact href="#testimonials" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="newspaper" >Testimonials</CDBSidebarMenuItem>
                        </a>


                        <a exact href="#contact" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="envelope" >Contact</CDBSidebarMenuItem>
                        </a>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;