import React from "react";
import styled, { useTheme } from "styled-components";

import { LogoIcon } from "../icons";
import { SearchBar } from "../../components";

const Header = () => {

    const theme = useTheme();

    return(
        <HeaderContainer>
            <LogoContainer>
                <LogoIcon 
                    size={64} 
                    color={theme.colorSubPrimary()} 
                />
                <h1>
                    Catalogue<br/>
                    Uml
                </h1>
            </LogoContainer>
            <SearchBar />
        </HeaderContainer>
    )
};

export default Header;

const HeaderContainer = styled.header`
    width: 100%;
    height: 100px;
    background-color: ${({ theme }) => theme.colorPrimary()};
    border-bottom: 1.5px solid ${({ theme }) => theme.colorSubSecondary()};
    display: flex;
    flex-direction: row;
    gap: 30px;
`;

const LogoContainer = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  position: relative;
  overflow: hidden;

  h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.colorSubPrimary()};
    font-family: 'Archivo Black', sans-serif;
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }

  &::before {
    content: "";
    position: absolute;
    top: 15px;
    bottom: 15px;
    right: 0;
    border-right: 1.5px solid ${({ theme }) => theme.colorSubSecondary()};
  }
`;