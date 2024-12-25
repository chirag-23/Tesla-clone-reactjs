import React,{ useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css";

import { Wrapper,Content } from "./spec.style";

const Specs = () =>{

    useEffect(() => {
        AOS.init({duration: 1400});
        AOS.refresh();
    }, []);


    return(
        <Wrapper>
            <Content>
                <div className="row" >
                    <div className="col" data-aos='fade-right'> 
                        <img src="/images/game.jpg" alt="game"/>
                    </div>
                    <div className="col text" data-aos='fade-left'>
                        <h3> Game from Anywhere </h3>
                        <p> Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat. </p>
                    </div>
                </div>
                <div className="row" >
                    <div className="col text1" data-aos='fade-right'>
                        <h3> Stay Connected </h3>
                        <p> Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop. </p>
                    </div>
                    <div className="col" data-aos='fade-left'> 
                        <img src="/images/connected.jpg" alt="connected"/>
                    </div>
                </div>
                <div className="row" >
                    <div className="col" data-aos='fade-right'> 
                        <img src="/images/audio.jpg"/>
                    </div>
                    <div className="col text" data-aos='fade-left'>
                        <h3> Your Best Audio System </h3>
                        <p> Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat. </p>
                    </div>
                </div>
                
            </Content>
        </Wrapper>
    )
}

export default Specs;