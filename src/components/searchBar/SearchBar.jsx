import React, { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { BsSearch } from "react-icons/bs";

import SearchDropdownResult from "./SearchDropdownResult";

import { diagramsUmlBehaviors, diagramsUmlStructs } from "../../data";

const SearchBar = () => {
    
    const [value, setValue] = useState("");
    const theme = useTheme();

    const searchFilter = (diagram) => {
        if ( value.length < 1 )
            return false;

        const searchValue = value.toLowerCase();
        const diagramTitle = diagram?.title.toLowerCase();
        const diagramDescription = diagram?.description.map(description => description.toLowerCase());

        return diagramTitle.includes(searchValue) || diagramDescription.includes(searchValue);
    }

    const resultsUmlStructs = diagramsUmlStructs.filter(searchFilter).map(diagram => ({ ...diagram, routePrefix: "uml-structs" }));
    const resultsUmlBehaviors = diagramsUmlBehaviors.filter(searchFilter).map(diagram => ({ ...diagram, routePrefix: "uml-behaviors" }));
    const results = [
        ...resultsUmlStructs,
        ...resultsUmlBehaviors
    ];

    return (
        <SearchBarContainer $isEmpty={value.length < 1}>
            <TextInputContainer>
                <StyledBsSearch size={18} color={theme.colorSubSecondary()} />
                <TextInput
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Que voulez-vous rechercher ?"
                    value={value}
                />
                <ActiveBar $isActive={value.length > 0} />
                {results.length > 0 && (
                    <SearchDropdownResult
                        clearSearch={() => setValue("")}
                        results={results} 
                    />
                )}
            </TextInputContainer>
        </SearchBarContainer>
    );
};

export default SearchBar;

const SearchBarContainer = styled.div`
    height: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    position: relative;

    ${({ $isEmpty, theme }) =>
        !$isEmpty &&
        `
        svg { fill: ${theme.colorSubPrimary()} !important; }

        input {
            color: ${theme.colorSubPrimary()} !important;

            &::placeholder {
                color: ${theme.colorSubPrimary()} !important;
            }
        }
    `}

    &:hover {
        svg { fill: ${({ theme }) => theme.colorSubPrimary()}; }

        input {
            color: ${({ theme }) => theme.colorSubPrimary()};

            &::placeholder {
                color: ${({ theme }) => theme.colorSubPrimary()};
            }
        }

        div#activeBar {
            width: 100% !important;
        }
    }
`;

const TextInputContainer = styled.div`
    height: auto;
    width: 100%;
    position: relative;
    padding-left: 28px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ActiveBar = styled.div`
    height: 1.5px;
    background-color: ${({ theme }) => theme.colorSubPrimary()};
    transition: width 400ms ease-in-out;
    width: ${({ $isActive }) => ($isActive ? "100%" : "0")};
    position: relative;
    z-index: 500;
`;

const StyledBsSearch = styled(BsSearch)`
    position: absolute;
    left: 0;
    z-index: 500;
`;

const TextInput = styled.input`
    border: 0;
    outline: 0;
    box-shadow: none;
    flex-grow: 1;
    color: ${({ theme }) => theme.colorSubSecondary()};
    font-family: 'Nunito', sans-serif;
    font-size: 20px;
    width: 100%;
    position: relative;
    z-index: 500;
    
    &::placeholder {
        color: ${({ theme }) => theme.colorSubSecondary()};
        font-family: 'Nunito', sans-serif;
        font-size: 18px;
    }
`;
