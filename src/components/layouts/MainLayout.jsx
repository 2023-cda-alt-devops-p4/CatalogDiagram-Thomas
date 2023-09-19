import React from "react";
import styled from "styled-components";

import { Outlet } from "react-router-dom";
import { Header, Footer } from "../partials";

const MainLayout = () => {

    return(
        <>
            <Header />
            <StyledMain>
                <Outlet />
            </StyledMain>
            <Footer />
        </>
    )
}

export default MainLayout;

const StyledMain = styled.main`
    width: 100%;
    min-height: 100vh;
`;