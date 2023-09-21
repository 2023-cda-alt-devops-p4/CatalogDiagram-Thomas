import React from "react";
import { useParams, Navigate } from "react-router-dom";
import styled from "styled-components";

import { diagramsUmlStructs, diagramsUmlBehaviors } from "../../data";
import { useLocation } from "react-router-dom";

const UmlStructsPage = () => {

    const { pathname } = useLocation();
    const { uuid } = useParams();

    const currentDiagram = (pathname.startsWith('/uml-behaviors') ? diagramsUmlBehaviors : diagramsUmlStructs)
        .find(diagram => diagram?.uuid === uuid);

    if ( currentDiagram === null || currentDiagram === undefined )
        return <Navigate to="/" />;

    return(
        <UmlStructsContainer>
            <HeaderPage>
                <TitlePage>{currentDiagram?.title}</TitlePage>
                <Description>{currentDiagram?.subTitle}</Description>
            </HeaderPage>
        </UmlStructsContainer>
    )
}

export default UmlStructsPage;

const UmlStructsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const HeaderPage = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const TitlePage = styled.h1`
    font-size: 24px;
    color: ${({ theme }) => theme.colorSubPrimary()};
    font-family: 'Archivo Black', sans-serif;
    letter-spacing: 1.2px;
`;

const Description = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.colorSubSecondary()};
    font-family: 'Nunito', sans-serif;
    letter-spacing: 1.2px;
    border-radius: 5px;
    width: max-content;
    font-weight: bold;
    padding-right: 40px;
`;