import React from "react";

import { Container } from "./styles";
import { Input, Button } from "..";

const Search = ({boxColor}) => {
   return(
    <Container>
        <Input placeholder="Pesquisar..." borderColor={boxColor} />
        <Button backgroundColor={boxColor}>Pesquisar</Button>
    </Container>
   )
}   

export { Search }
