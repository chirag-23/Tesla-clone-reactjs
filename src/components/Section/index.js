import React from 'react'
import { Wrapper,ContentTop,ContentMid,Content } from './section.style'

function Section({ title,desc,backgroundImg,link,leftbtn,rightbtn,arrow,range,speed,hp,top }) {

    return (
        <Wrapper bg={backgroundImg} >
            <ContentTop>
                <h1>{title}</h1>
                <p>{desc} <a href='#'>{link}</a></p>
            </ContentTop>

            <div>
                <ContentMid className={arrow ? '' : 'buttons'} >
                    {leftbtn &&
                    <div className='left'>
                        <button>{leftbtn}</button>
                    </div>
                    }
                    {rightbtn && 
                        <div className='right'>
                            <button>{rightbtn}</button>
                        </div>
                    }
                </ContentMid>
                {range && 
                <Content>
                    <div className="Info-bar">
                        <div className="Specs" >
                            <h2>{range} mi</h2>
                            <p>Range (EPA est.)</p>
                        </div>
                        <div className="Specs" >
                            <h2>{speed}s</h2>
                            <p>0-60 mph*</p>
                        </div>
                        <div className="Specs" >
                            <h2>{top} mph</h2>
                            <p>Top Speed</p>
                        </div>
                        {hp && 
                        <div className="Specs hp" >
                            <h2>{hp} hp</h2>
                            <p>Peak Power</p>
                        </div>
                        }
                        <div className="order_btn">
                            <button> ORDER NOW </button>
                        </div>
                    </div>
                </Content>
                }
                {arrow && 
                    <div className='arrow'>
                        <img src='/images/down-arrow.svg' alt='arrow'/>
                    </div>
                }
            </div>
        </Wrapper>
    )
}

export default Section
