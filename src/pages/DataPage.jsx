import React from "react";
import { useParams, Navigate } from "react-router-dom";
import styled from "styled-components";

import { 
    diagramsUmlStructs, 
    diagramsUmlBehaviors, 
    diagramsMerise 
} from "../data";

import { useLocation } from "react-router-dom";

import { useResponsive } from "../hooks";


const UmlStructsPage = () => {

    const { pathname } = useLocation();
    const { uuid } = useParams();

    const { isGlobalMobile, isTablet } = useResponsive();

    const currentDiagram = (
        pathname.startsWith('/uml-behaviors') ? diagramsUmlBehaviors : 
        pathname.startsWith('/uml-structs') ? diagramsUmlStructs : diagramsMerise
    ).find(diagram => diagram?.uuid === uuid);

    if ( currentDiagram === null || currentDiagram === undefined )
        return <Navigate to="/" />;

    return(
        <UmlStructsContainer $isMobileOrTablet={isGlobalMobile || isTablet}>
            <HeaderPage>
                <TitlePage>{currentDiagram?.title}</TitlePage>
                <SubTitle>{currentDiagram?.subTitle}</SubTitle>
            </HeaderPage>
            <ContentPage $isMobileOrTablet={isGlobalMobile || isTablet}>

                <ContentContainer>
                    <Title>Description</Title>
                    <Description>
                        {currentDiagram?.description.map((textLine, textLineIndex) => ((
                            <span key={`${uuid}-description-line-${textLineIndex}`}>
                                {textLine}<br/>
                            </span>
                        )))}
                    </Description>
                </ContentContainer>

                <ContentContainer>
                    <Title>Avantages</Title>
                    <List>
                        {currentDiagram?.benefits.map((textLine, textLineIndex) => ((
                            <ListElement key={`${uuid}-benefits-line-${textLineIndex}`}>
                                {textLine}<br/>
                            </ListElement>
                        )))}
                    </List>
                </ContentContainer>

                <ContentContainer>
                    <Title>Bonnes pratiques</Title>
                    <List>
                        {currentDiagram?.goodPratices.map((textLine, textLineIndex) => ((
                            <ListElement key={`${uuid}-goodPratices-line-${textLineIndex}`}>
                                {textLine}<br/>
                            </ListElement>
                        )))}
                    </List>
                </ContentContainer>

                {currentDiagram?.example && (
                    <ContentContainer>
                        <Title>Exemple</Title>
                        <Description>
                            {currentDiagram?.example?.description.map((textLine, textLineIndex) => ((
                                <span key={`${uuid}-example-description-line-${textLineIndex}`}>
                                    {textLine}<br/>
                                </span>
                            )))}
                        </Description>
                        {currentDiagram?.example?.image && (
                            <DiagramImageExample 
                                src={currentDiagram?.example?.image}
                                alt={`Diagramme de ${currentDiagram?.title.toLowerCase()}`}
                            />
                        )}
                    </ContentContainer>
                )}

            </ContentPage>
        </UmlStructsContainer>
    )
}

export default UmlStructsPage;

const UmlStructsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    ${({ $isMobileOrTablet }) => $isMobileOrTablet ? `
        padding: 20px;
    ` : `
        padding: 35px;
    `}
`;

const HeaderPage = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const DiagramImageExample = styled.img`
    width: 50%;
    height: auto;
    object-fit: cover;
`;

const TitlePage = styled.h1`
    color: ${({ theme }) => theme.colorSubPrimary()};
    font-family: 'Archivo Black', sans-serif;
    letter-spacing: 1.2px;
`;

const Title = styled.h2`
    color: ${({ theme }) => theme.colorSubPrimary()};
    font-family: 'Archivo Black', sans-serif;
    letter-spacing: 1.2px;
`;

const ContentContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const List = styled.ul`
    padding-left: 35px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-top: 5px;
    list-style: none;

    ${({ isLaptop }) => isLaptop && `
        background-color: red;
    `}
`;

const ListElement = styled.li`
    font-size: 22px;
    color: ${({ theme }) => theme.colorSubSecondary()};
    font-family: "Nunito", sans-serif;

    &::before {
        content: "•";
        color: ${({ theme }) => theme.colorSubPrimary()};
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
    }
`

const SubTitle = styled.p`
    font-size: 16px;
    color: ${({ theme }) => theme.colorSubSecondary()};
    font-family: 'Nunito', sans-serif;
    letter-spacing: 1.2px;
    border-radius: 5px;
    width: max-content;
    font-weight: bold;
    font-style: italic;
    padding-right: 40px;
`;

const Description = styled.p`
    font-size: 22px;
    color: ${({ theme }) => theme.colorSubSecondary()};
    font-family: "Nunito", sans-serif;
`;

const ContentPage = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;

    gap: 90px;

    ${({ $isMobileOrTablet }) => $isMobileOrTablet ? `
        padding-top: 60px;
        padding-left: 15px;
    ` : `
        padding-top: 90px;
        padding-left: 35px;
    `}
`;