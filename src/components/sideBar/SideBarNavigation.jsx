import React from "react";
import styled, { useTheme } from "styled-components";

import { NavLink, useLocation } from "react-router-dom";

import { FaHome  } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { LiaProjectDiagramSolid } from "react-icons/lia";

import SideBarNavigationDropdown from "./SideBarNavigationDropdown";

import { diagramsUmlStructs, diagramsUmlBehaviors } from "../../data";

const SideBarNavigation = ({
    isCollapsed
}) => {

    const { pathname } = useLocation();
    const theme = useTheme();

    return(
        <SideBarNavigationContainer>

            <StyledNavLink
                hasBefore={false}
                isSubLink={false}
                isCollapsed={isCollapsed}
                isActive={pathname.startsWith('/') && pathname.length === 1} 
                to="/"
            >
                <FaHome /> 
                {!isCollapsed && 'Accueil'}
            </StyledNavLink>

            <SideBarNavigationDropdown
                defaultIsOpen={pathname.startsWith("/uml-structs")}
                isCollapsed={isCollapsed}
                icon={<FaDiagramProject />} 
                title="UML Structurels"
            >
                {diagramsUmlStructs.map((diagramUml, diagramIndex) => (
                    <StyledNavLink
                        key={`link-uml-structs-${diagramIndex}`}
                        isCollapsed={isCollapsed}
                        isActive={pathname === `/uml-structs/${diagramUml?.uuid}`}
                        to={`/uml-structs/${diagramUml?.uuid}`}
                    >
                        <LiaProjectDiagramSolid /> 
                        {!isCollapsed && diagramUml?.title}
                    </StyledNavLink>
                ))}
            </SideBarNavigationDropdown>

            <SideBarNavigationDropdown
                defaultIsOpen={pathname.startsWith("/uml-behaviors")}
                isCollapsed={isCollapsed}
                icon={<FaDiagramProject />} 
                title="UML Comportementaux"
            >
                {diagramsUmlBehaviors.map((diagramUml, diagramIndex) => (
                    <StyledNavLink
                        key={`link-uml-behaviors-${diagramIndex}`}
                        isCollapsed={isCollapsed}
                        isActive={pathname === `/uml-behaviors/${diagramUml?.uuid}`}
                        to={`/uml-behaviors/${diagramUml?.uuid}`}
                    >
                        <LiaProjectDiagramSolid /> 
                        {!isCollapsed && diagramUml?.title}
                    </StyledNavLink>
                ))}
            </SideBarNavigationDropdown>

            <SideBarNavigationDropdown 
                isCollapsed={isCollapsed}
                icon={<FaDiagramProject />} 
                title="Merise"
            >

            </SideBarNavigationDropdown>

        </SideBarNavigationContainer>
    )
}

export default SideBarNavigation;

const SideBarNavigationContainer = styled.nav`
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    gap: 5px;
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
    position: relative;

    ${({ hasBefore = true, theme }) => hasBefore && `
        &::before {
            transition: all 400ms ease-in-out;
            content: "";
            position: absolute;
            left: -15px;
            height: 0.5px;
            background-color: ${theme.colorSubPrimary()};
            width: 0;
        }
    `}


    ${({ isCollapsed }) => isCollapsed ? `
        justify-content: center;
        width: 90%;
        align-self: center;
    ` : `
        width: 100%;
    `}

    ${({ isActive, theme, isSubLink = true }) => isActive ? `
        color: ${theme.colorSubPrimary()};
        background-color: ${!isSubLink ? theme.colorSubPrimary(0.1) : "transparent"};

        svg {
            color: ${theme.colorSubPrimary()};
            font-size: 20px;
        }

        &::before {
            width: 15px;
        }
    ` : `
        color: ${theme.colorSubSecondary()};
    `}

    &:hover {
        background-color: ${({ isSubLink = true, theme }) => !isSubLink ? theme.colorSubPrimary(0.1) : "transparent"};
        color: ${({ theme }) => theme.colorSubPrimary()};

        ${({ hasBefore = true }) => hasBefore && `
            &::before {
                width: 15px;
            }
        `}
    }
`;