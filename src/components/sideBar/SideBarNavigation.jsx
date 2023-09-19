import React from "react";
import styled from "styled-components";

import { NavLink, useLocation } from "react-router-dom";
import routes from "../../Routes";

const SideBarNavigation = () => {

    const { pathname } = useLocation();

    return(
        <SideBarNavigationContainer>
            <StyledNavLink 
                isActive={pathname.startsWith('/') && pathname.length === 1} 
                to="/"
            >
                Accueil
            </StyledNavLink>
        </SideBarNavigationContainer>
    )
}

export default SideBarNavigation;

const SideBarNavigationContainer = styled.nav`
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    
    font-family: "Nunito", sans-serif;
    font-size: 22px;
    width: 100%;
    border-radius: 7px;
    transition: all 300ms linear;
    padding: 5px 10px;

    ${({ isActive, theme }) => isActive ? `
        background-color: ${theme.colorSubPrimary(0.1)};
        color: ${theme.colorSubPrimary()};
    ` : `
        color: ${theme.colorSubSecondary()};
    `}

    &:hover {
        background-color: ${({ theme }) => theme.colorSubPrimary(0.1)};
        color: ${({ theme }) => theme.colorSubPrimary()};
    }
`;