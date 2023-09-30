import React, { useState } from "react";
import styled from "styled-components";

import { Outlet } from "react-router-dom";
import { Header, Footer } from "../partials";
import { SideBar } from "../sideBar";
import { useResponsive } from "../../hooks";

const MainLayout = () => {

    const { isGlobalMobile, isTablet } = useResponsive();
    const [isCollapsed, setIsCollapsed] = useState(!(!isGlobalMobile && !isTablet));

    return(
        <>
            <Header />
            <StyledMain 
                $isCollapsed={isCollapsed}
                $isMobileOrTablet={isGlobalMobile || isTablet}
            >
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
    transition: all 400ms ease-in-out;

    ${({ $isCollapsed }) => $isCollapsed ? `
        padding-left: 64px;
    ` : `
        padding-left: 400px;
    `}

    ${({ $isMobileOrTablet }) => $isMobileOrTablet ? `
        padding-top: 200px;
    ` : `
        padding-top: 100px;
    `}
`;

const RouteContent = styled.div`
    flex-grow: 1;
    height: 100%;
    display: flex;
`;