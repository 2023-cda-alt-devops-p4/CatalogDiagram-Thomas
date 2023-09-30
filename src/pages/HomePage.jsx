import React from "react";
import styled from "styled-components";

const HomePage = () => {

    return(
        <HomePageContainer>
            <h1>Home page</h1>

        </HomePageContainer>
    )
}

export default HomePage;

const HomePageContainer = styled.div`
    padding: 10px;
    flex-grow: 1;
`;