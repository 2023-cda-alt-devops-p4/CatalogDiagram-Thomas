import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

const SideBarNavigationDropdown = ({  }) => {

    

    return(
        <>
        
        </>
    )
}

export default SideBarNavigationDropdown;

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