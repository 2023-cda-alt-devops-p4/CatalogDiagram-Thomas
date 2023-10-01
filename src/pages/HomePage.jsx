import React from "react";
import styled, { useTheme } from "styled-components";

import { LogoIcon } from "../components/icons";

const HomePage = () => {

    const theme = useTheme();

    return(
        <HomePageContainer>
            <LogoContainer>
                <LogoIcon size={200} color={theme.colorSubPrimary()}  />
                <h1>Catalogue UML</h1>
            </LogoContainer>
        </HomePageContainer>
    )
}

export default HomePage;

const HomePageContainer = styled.div`
    padding: 10px;
    flex-grow: 1;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h1 {
        font-family: "Archivo Black", sans-serif;
        color: ${({ theme }) => theme.colorSubPrimary()};
        font-size: 42px;
        text-transform: uppercase;
        letter-spacing: 1.2px;
    }
`;