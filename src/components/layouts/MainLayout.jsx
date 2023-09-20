import React, { useState } from "react";
import styled from "styled-components";

import { Outlet } from "react-router-dom";
import { Header, Footer } from "../partials";
import { SideBar } from "../sideBar";

const MainLayout = () => {

    const [isCollapsed, setIsCollapsed] = useState(false);

    return(
        <>
            <Header />
            <StyledMain isCollapsed={isCollapsed}>
                <SideBar 
                    isCollapsed={isCollapsed} 
                    setIsCollapsed={setIsCollapsed} 
                />
                <RouteContent>
                    <Outlet />
                </RouteContent>
            </StyledMain>
            <Footer />
        </>
    )
}

export default MainLayout;

const StyledMain = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    padding-top: 100px;
    transition: all 400ms ease-in-out;


    ${({ isCollapsed }) => isCollapsed ? `
        padding-left: 64px;
    ` : `
        padding-left: 400px;
    `}
`;

const RouteContent = styled.div`
    flex-grow: 1;
    height: 100%;
    display: flex;
`;