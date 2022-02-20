import React from "react";

import { Header, Banner, Title, Search } from "../../components/common";
import { Container } from "./styles";

import bannerImg from "../../assets/images/banner-comics.png"

const Comics = () => {
    return(
        <Container>
           <Header/>
           <Banner image={bannerImg} />
           <Title color="#0f2034">Quadrinhos</Title>
           <Search boxColor="#0f2034" />
        </Container>
    )
}

export { Comics }