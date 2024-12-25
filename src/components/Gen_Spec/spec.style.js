import styled from "styled-components";

export const Wrapper = styled.div`
    min-height: 150vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    width: 80%;
    height: 80%;

    .row{
        display: flex;
        height: 40vh;
        justify-content: space-evenly;
        align-items: center;
    }

    img{
        width: 100%;
    }

    .col{
        width: 100%;
        h3{
            color: white;
            font-weight: 400;
            font-size: 1.4rem;
            letter-spacing: 0.6px;
            padding: 20px 0;
            word-spacing: 2px;
        }
        p{
            color: white;
            font-weight: 300;
            font-size: 0.95rem;
            letter-spacing: 0.4px;
            word-spacing: 1.2px;
            line-height: 25px;
        }
    }

    .text{
        h3, p{
            padding-left: 120px;
            padding-right: 20px;
        }
    }
    .text1{
        h3,p{
            padding-right: 120px;
        }
    }

    @media screen and (max-width: 750px){
        .col{
            h3 ,p{
                padding-left: 10px;
                padding-right: 10px;
            }
        }
    }
    @media screen and (max-width: 400px){
        width: 96%;
        height: 96%;

        .col{
            h3{
                font-size: 1.2rem;
            }
            p{
                font-size: 0.8rem;
                line-height: 18px;
            }
        }
    }
`;