import React from "react";

import { Header, Banner, Title, Search } from "../../components/common";
import { Container } from "./styles";

import bannerImg from "../../assets/images/banner-series.png"

const Series = () => {
    return(
        <Container>
           <Header/>
           <Banner image={bannerImg} />
           <Title color="#061B51 ">Series</Title>
           <Search boxColor="#061B51"  />
        </Container>
    )
}

export { Series }