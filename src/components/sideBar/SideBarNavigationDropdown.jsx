import React, { useState } from "react";
import styled, { useTheme } from "styled-components";

import { NavLink } from "react-router-dom";

import { BiSolidRightArrow } from "react-icons/bi";

const SideBarNavigationDropdown = ({
    defaultIsOpen = false,
    isCollapsed = false,
    title = "",
    icon = <></>,
    children
}) => {
    const [isOpen, setIsOpen] = useState(defaultIsOpen);
    const theme = useTheme();

    return(
        <SideBarNavDropdownContainer $isActive={isOpen}>

            <ButtonNavigationDropdown
                $isCollapsed={isCollapsed}
                $isActive={isOpen}
                onClick={() => setIsOpen((prevState) => !prevState)}
            >
                {icon}
                {!isCollapsed && title}
                {!isCollapsed && <StyledBiSolidRightArrow $isOpen={isOpen} size={18} />}
            </ButtonNavigationDropdown>

            <NavigationDropdownContent $isCollapsed={isCollapsed}>
                {isOpen && children}
            </NavigationDropdownContent>

        </SideBarNavDropdownContainer>
    )
}

export default SideBarNavigationDropdown;

const SideBarNavDropdownContainer = styled.div`
    height: auto;
    width: 100%;
    position: relative;

    ${({ $isActive, theme }) => $isActive && `
        border-left: 0.5px solid ${theme.colorSubPrimary()};
    `}
`;

const StyledBiSolidRightArrow = styled(BiSolidRightArrow)`
    position: absolute;
    right: 10px;
    color: ${({ theme }) => theme.colorSubSecondary()};
    text-decoration: none;
    font-family: "Nunito", sans-serif;
    font-size: 20px;
    border-radius: 7px;
    transition: all 300ms linear;
    gap: 5px;

    ${({ $isOpen }) => $isOpen ? `
        transform: rotate(90deg);
    ` : `
        transform: rotate(0deg);
    `}
`;

const NavigationDropdownContent = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding-top: 5px;
    overflow: hidden;

    ${({ $isCollapsed }) => !$isCollapsed && `
        padding-left: 15px;
    `}
`;

const ButtonNavigationDropdown = styled.button`
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
    background: none;
    border: 0;
    outline: 0;
    cursor: pointer;
    width: 100%;

    ${({ $isCollapsed }) => $isCollapsed && `
        justify-content: center;
    `}

    
    ${({ $isActive, theme }) => $isActive ? `
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

        svg {
            color: ${({ theme }) => theme.colorSubPrimary()};
        }
    }
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

    &::before {
        transition: all 400ms ease-in-out;
        content: "";
        position: absolute;
        left: -15px;
        height: 0.5px;
        background-color: ${({ theme }) => theme.colorSubPrimary()};
        width: 0;
    }

    ${({ $isCollapsed }) => $isCollapsed ? `
        justify-content: center;
        width: 90%;
        align-self: center;
    ` : `
        width: 100%;
    `}

    ${({ $isActive, theme }) => $isActive ? `
        color: ${theme.colorSubPrimary()};

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
        color: ${({ theme }) => theme.colorSubPrimary()};

        &::before {
            width: 15px;
        }
    }
`;