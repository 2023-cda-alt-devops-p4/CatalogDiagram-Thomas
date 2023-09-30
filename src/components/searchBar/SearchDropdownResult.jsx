import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SearchDropdownResult = ({ clearSearch, results = [] }) => {

    return(
        <SearchDropdownResultContainer $isOpen={results.length > 0}>
            {results?.map((result, resultIndex) => ((
                <NavResultLink 
                    key={`search-result-${resultIndex}`} 
                    to={`/${result?.routePrefix}/${result?.uuid}`}
                    onClick={clearSearch}
                >
                    <RowTitle>
                        <h3>{result?.title}</h3>
                        <p>- {result?.subTitle}</p>
                    </RowTitle>
                    <p>{result?.description}</p>
                </NavResultLink>
            )))}
        </SearchDropdownResultContainer>
    )
}

export default SearchDropdownResult;

const SearchDropdownResultContainer = styled.div`
    height: auto;
    padding: 5px;
    width: 100%;
    position: absolute;
    bottom: -300px;
    left: 0;
    padding-left: 28px;
    display: flex;
    flex-direction: column;
    background-color: #FFF;
    height: 300px;
    overflow-y: auto;
    animation: translateAnim 400ms;
    transform: translateY(0);
    z-index: 400;
    gap: 15px;
    padding-top: 15px;
    padding-right: 10px;
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colorSubPrimary(0.8)} ${({ theme }) => theme.colorSubPrimary(0.3)};
    
    @keyframes translateAnim {
        from { transform: translateY(-100%); }
        to { transform: translateY(0); }
    }
`;

const NavResultLink = styled(NavLink)`
    width: 100%;
    height: auto;
    padding: 5px;
    border: 1.5px solid ${({ theme }) => theme.colorSubPrimary()};
    text-decoration: none;
    display: flex;
    flex-direction: column;
    gap: 5px;
    transition: all 400ms ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.colorSubPrimary()};

        h3, p {
            color: #FFF;
        }
    }

    h3 {
        color: ${({ theme }) => theme.colorSubPrimary()};
        font-family: "Archivo Black", sans-serif;
    }

    p {
        color: ${({ theme }) => theme.colorSubSecondary()};
        font-family: "Roboto", sans-serif;
    }
`;

const RowTitle = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-style: italic;
    gap: 5px;

    p {
        font-size: 14px;
    }
`;