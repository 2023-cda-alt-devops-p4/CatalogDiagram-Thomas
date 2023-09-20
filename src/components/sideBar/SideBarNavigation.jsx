import React from "react";
import styled, { useTheme } from "styled-components";

import { NavLink, useLocation } from "react-router-dom";

import { FaHome  } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { LiaProjectDiagramSolid } from "react-icons/lia";

const SideBarNavigation = ({
    isCollapsed
}) => {

    const { pathname } = useLocation();
    const theme = useTheme();

    return(
        <SideBarNavigationContainer>
            <StyledNavLink 
                isCollapsed={isCollapsed}
                isActive={pathname.startsWith('/') && pathname.length === 1} 
                to="/"
            >
                <FaHome /> {!isCollapsed && 'Accueil'}
            </StyledNavLink>
            <StyledNavLink 
                isCollapsed={isCollapsed}
                isActive={pathname.startsWith('/uml/')} 
                to="/uml/"
            >
                <FaDiagramProject /> {!isCollapsed && 'Diagrammes UML'}
            </StyledNavLink>
            <StyledNavLink 
                isCollapsed={isCollapsed}
                isActive={pathname.startsWith('/merise/')} 
                to="/merise/"
            >
                <LiaProjectDiagramSolid /> {!isCollapsed && 'Diagrammes Merise'}
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
    font-size: 20px;
    border-radius: 7px;
    transition: all 300ms linear;
    padding: 5px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;

    ${({ isCollapsed }) => isCollapsed ? `
        justify-content: center;
        width: 90%;
        align-self: center;
    ` : `
        width: 100%;
    `}

    ${({ isActive, theme }) => isActive ? `
        background-color: ${theme.colorSubPrimary(0.1)};
        color: ${theme.colorSubPrimary()};

        svg {
            color: ${theme.colorSubPrimary()};
            font-size: 20px;
        }
    ` : `
        color: ${theme.colorSubSecondary()};
    `}

    &:hover {
        background-color: ${({ theme }) => theme.colorSubPrimary(0.1)};
        color: ${({ theme }) => theme.colorSubPrimary()};
    }
`;