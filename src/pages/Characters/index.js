import React from "react";

import { Header, Banner, Title, Search } from "../../components/common";
import { Container } from "./styles";

import bannerImg from "../../assets/images/banner-characters.png"

const Characters = () => {
    return(
        <Container>
           <Header/>
           <Banner image={bannerImg} />
           <Title color="#c51402">Personagens</Title>
           <Search boxColor="#c51402" />
        </Container>
    )
}

export { Characters }