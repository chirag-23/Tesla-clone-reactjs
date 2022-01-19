import React from "react";

import { Wrapper,Content } from "./models.style";

import Section from "../Section";
import Interior from "../Interior_Specs";
import Specs from "../Gen_Spec";
import Header from "../Header";
import Footer from "../Footer";

const ModelS = () =>{

    document.title = "Model S | Tesla";
    return(
        <Wrapper>
            <Header/>
            <Content>
                <Section 
                title="Model S" 
                desc="Plaid" 
                backgroundImg="model-s.jpg" 
                arrow="true" 
                range='396'
                speed='1.99'
                top='200'
                hp='1,020'
                />
            </Content>
            <Content>
                <Interior/>
            </Content>
            <Content>
                <Specs/>
            </Content>
            <Footer bottom='bottom'/>
        </Wrapper>
    )
}

export default ModelS;