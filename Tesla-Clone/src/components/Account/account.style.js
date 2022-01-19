import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100vh;
    padding-top: 12vh;
    display: flex;
    overflow-x: inherit;

    @media screen and (max-width: 400px){
        padding-top: 10vh;
    }
`;

export const Navbar = styled.div`
    padding-left: 50px;
    margin-top: 40px;
    width: 28vw;
    a{
        text-decoration: none;
        font-weight: 400;
        font-size: 1.2rem;
        letter-spacing: 0.6px;
        cursor: pointer;
        padding-left: 10px;
        color: #5c5d61;
        transition: color 250ms ease-in;
        :hover{
            color: #141414;
        }
    }
    .row{
        display: flex;
        align-items: center;
        padding: 15px 0px;
    }
    .logo{
        font-size: 1.6rem;
        margin-top: 4px;
    }
    .main{
        border-radius: 50%;
        padding: 0.5px 5px;
        cursor: pointer;
    }
    .home{
        background-color: rgba(90, 90, 90, 0.1);
    }
    .high a{
        color: #141414;
    }
    @media screen and (max-width: 1150px){
        padding-left: 40px;
        width: 400px;
    }
    @media screen and (max-width: 750px){
        .text{
            display: none;
        }
        width: 50px;
        padding-left: 20px;
    }
    @media screen and (max-width: 400px){
        .text{
            display: none;
        }
        width: 40px;
        padding-left: 10px;
        margin-top: 100px;
    }

`;

export const Content = styled.div`

    padding-right: 250px;

    .container{
        display: flex;
        flex-wrap: wrap;
    }

    h1{
        color: black;
        text-transform: capitalize;
        font-size: 2.2rem;
        font-weight: 400;
        letter-spacing: 0.6px;
        padding: 20px 10px;
    }

    .box{
        width: 320px;
        height: 220px;
        border: 1px grey solid;
        border-radius: 15px;
        margin: 10px;
        display: flex;
        align-items: flex-end;
    }
    .box_fade{
        width: 320px;
        height: 220px;
        border: 1px grey solid;
        border-radius: 15px;
        margin: 10px;
    }

    .box1{
        background-image: url('/images/solar_1.webp');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .box2{
        background-image: url('/images/cars.jpeg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .box3{
        width: 318px;
        height: 110px;
        background-image: url('/images/3rd-party.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: white;
        opacity: 0.2;
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
    }
    .desc{
        height: 110px;
        width: 320px;
        background-color: white;
        border-top: none;
        border-bottom-right-radius: 15px;
        border-bottom-left-radius: 15px;
        padding: 10px;

        h3{
            font-size: 0.85rem;
            letter-spacing: 0.4px;
            font-weight: 400;
            padding: 5px 8px;
        }
        p{
            font-size: 0.8rem;
            letter-spacing: 0.4px;
            font-weight: 300;
            padding: 0px 8px;
            margin-bottom: 15px;
        }
        a{
            font-size: 0.8rem;
            letter-spacing: 0.4px;
            font-weight: 300;
            margin: 0 8px;
            text-decoration: none;
            border-bottom: 1px solid #5c5d61;
            transition: all 300ms ease-in;
            :hover{
                color: black;
                border-bottom: 2px solid black;
            }
        }
    }
    .fade{
        height: 88px;
        width: 318px;
    }

    @media screen and (max-width: 1150px){
        padding-right: 50px;
        padding-left: 50px;
    }
    @media screen and (max-width: 750px){
        padding-right: 20px;
        padding-left: 30px;
    }
    /* @media screen and (max-width: 400px){
        padding-right: 10px;
        padding-left: 10px;
    } */

`;