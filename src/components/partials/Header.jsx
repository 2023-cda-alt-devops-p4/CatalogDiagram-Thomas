import React from "react";
import styled, { useTheme } from "styled-components";

import { LogoIcon } from "../icons";
import { SearchBar } from "../../components/searchBar";

import { useResponsive } from "../../hooks";

const Header = () => {

    const { isGlobalMobile, isTablet, isLaptop } = useResponsive();
    const theme = useTheme();

    return(
        <HeaderContainer $isMobileOrTablet={isGlobalMobile || isTablet}>
            <LogoContainer $isMobileOrTablet={isGlobalMobile || isTablet}>
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
            {(!isGlobalMobile && !isTablet && !isLaptop) && (
              <RightContainer>

              </RightContainer>
            )}
        </HeaderContainer>
    )
};

export default Header;

const HeaderContainer = styled.header`
    width: 100%;
    background-color: ${({ theme }) => theme.colorPrimary()};
    border-bottom: 1.5px solid ${({ theme }) => theme.colorSubSecondary()};
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

    ${({ $isMobileOrTablet }) => $isMobileOrTablet ? `
      flex-direction: column;
      height: 200px;
    ` : `
      flex-direction: row;
      height: 100px;
      gap: 30px;
    `}
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  position: relative;
  overflow: hidden;

  ${({ $isMobileOrTablet, theme }) => $isMobileOrTablet ? `
    width: 100%;
    height: 150px;
    padding: 20px 0;
    border-bottom: 1.5px solid ${theme.colorSubSecondary()};
  ` : `
    width: 400px;
    height: 100%;

    &::before {
      content: "";
      position: absolute;
      top: 15px;
      bottom: 15px;
      right: 0;
      border-right: 1.5px solid ${theme.colorSubSecondary()};
    }
  `}

  h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.colorSubPrimary()};
    font-family: 'Archivo Black', sans-serif;
    letter-spacing: 1.2px;
    text-transform: uppercase;
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