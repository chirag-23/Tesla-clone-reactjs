import React from "react";

import { Wrapper } from "./model3.style";

import Section from "../Section";
import Interior from "../Interior_Specs";
import Specs from "../Gen_Spec";
import Header from "../Header";
import Footer from "../Footer";

const Model3 = () =>{
    document.title = "Model 3 | Tesla";
    return(
        <Wrapper>
            <Header/>
            <Section 
                title="Model 3" 
                backgroundImg="model3_2.jpeg" 
                arrow="true" 
                range='358'
                speed='3.1'
                top='162'
            />
            <Interior/>
            <Specs/>
            <Footer bottom='bottom'/>
        </Wrapper>
    )
}

export default Model3;