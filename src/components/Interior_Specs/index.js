import React,{useEffect} from "react";
import AOS from 'aos'
import "aos/dist/aos.css";

import { Wrapper,Content } from "./interior.style";

const Interior = () =>{

    useEffect(() => {
        AOS.init({duration: 1400});
    }, []);

    return(
        <Wrapper>
            <div className="title" >
                <h1 data-aos='fade-up' >All-New Interior</h1>
            </div>
            <Content>
            </Content>
        </Wrapper>
    )
}

export default Interior;