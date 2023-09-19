import React from "react";
import styled from "styled-components";

import { Outlet } from "react-router-dom";

const MainLayout = () => {

    return(
        <main>
            <Outlet />
        </main>
    )
}

export default MainLayout;