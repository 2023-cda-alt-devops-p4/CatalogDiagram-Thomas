import React from "react";
import styled, { useTheme } from "styled-components";

import { LogoIcon } from "../icons";
import { SearchBar } from "../../components/searchBar";

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
                    Uml<br/>
                </h1>
            </LogoContainer>
            <SearchBar />
            <RightContainer>

            </RightContainer>
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
    justify-content: center;
    gap: 30px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
`;

const LogoContainer = styled.div`
  width: 400px;
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

const RightContainer = styled.div`
  width: 400px;
  height: 100%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 15px;
    bottom: 15px;
    left: 0;
    border-right: 1.5px solid ${({ theme }) => theme.colorSubSecondary()};
  }
`;