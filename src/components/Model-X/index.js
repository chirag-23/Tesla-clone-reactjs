import React from "react";

import { Wrapper } from "./modelx.style";

import Section from "../Section";
import Interior from "../Interior_Specs";
import Specs from "../Gen_Spec";
import Header from "../Header";
import Footer from "../Footer";

const ModelX = () =>{
    document.title = "Model X | Tesla";
    return(
        <Wrapper>
            <Header/>
            <Section 
                title="Model X" 
                desc='Plaid'
                backgroundImg="model-x.jpg" 
                arrow="true" 
                range='333'
                speed='2.5'
                top='175'
                hp='1,020'
            />
            <Interior/>
            <Specs/>
            <Footer bottom='bottom'/>
        </Wrapper>
    )
}

export default ModelX;