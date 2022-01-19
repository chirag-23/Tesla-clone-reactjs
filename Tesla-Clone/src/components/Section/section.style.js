import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image:  ${props => `url('/images/${props.bg}')`}; //url is by default in public section

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;

    img{
        margin-top: 15px;
        margin-bottom: 10px;
        height: 50px;
        animation: animate infinite 1.8s;
    }
    .arrow{
        display: flex;
        justify-content: center;
    }

    .buttons{
        margin-bottom: 60px;
    }

    @keyframes animate {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(5px);
        }
        60% {
            transform: translateY(3px);
        }
    }
    @media screen and (max-width: 600px){
        img{
            height: 40px;
        }
    }
`;

export const ContentTop = styled.div`
    text-align: center;
    padding-top: 16vh;
    h1{
        font-weight: 400;
        letter-spacing: 0.5px;
        font-size: 2.5rem;
        color: var(--teslaColor);
    }
    p{
        font-size: 0.9rem;
        padding: 5px;
        color: rgba(59, 59, 59, 0.753);
    }
    a{
        text-decoration: underline;
        text-underline-position: under;
        display: inline-block;
        color: rgba(59, 59, 59, 0.753);
        transition: color 200ms ease-in;

        :hover{
            color: var(--teslaColor);
            text-decoration-thickness: 2px;
        }
    }

    animation: transform 1s;
    animation-timing-function: ease-in;
    @keyframes transform {
        0%{
            opacity: 0;
        }
        50%{
            opacity: 0.3;
        }
        100%{
            opacity: 1;
        }
    }
`;

export const ContentMid = styled.div`

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    button{
        padding: 12px 20px;
        width: 260px;
        border-radius: 20px;
        outline: none;
        border: none;
        font-size: 0.8rem;
        font-weight: 400;
        letter-spacing: 0.6px;
        opacity: 0.9;
        :hover{
            cursor: pointer;
        }
    }

    .left button{
        background-color: rgba(23,26,32,1);
        color: white;
        margin-right: 25px;
    }

    @media screen and (max-width: 600px){
        flex-direction: column;
        .left , .right{
            display: flex;
            justify-content: center;
        }
        .left button{
            margin-right: 0;
            margin-bottom: 15px;
        }
        button{
            width: 90%;
            padding: 5px 10px;
        }
    }

    animation: transform 1s;
    animation-timing-function: ease-in;
    @keyframes transform {
        0%{
            opacity: 0;
        }
        50%{
            opacity: 0.3;
        }
        100%{
            opacity: 1;
        }
    }
`;

export const Content = styled.div`

.Info-bar{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        h2{
        color: white;
        font-weight: 400;
        font-size: 1.8rem;
        letter-spacing: 0.6px;
        }
        p{
            padding-top: 8px;
            color: white;
            font-weight: 200;
            font-size: 0.8rem;
            letter-spacing: 0.3px;
        }
        button{
            outline: none;
            border: white solid 4px;
            border-radius: 20px;
            padding: 8px 55px;
            background-color: transparent;
            color: white;
            transition: all 300ms ease-in;
            cursor: pointer;
            :hover{
                background-color: white;
                color: #141414;
            }
        }

        @media screen and (max-width: 600px){
            .hp{
                display: none;
            }
            .order_btn{
                display: flex;
                justify-content: center;
                width: 100%;
                margin-top: 20px;
            }
            button{
                width: 90%;
                padding: 10px auto;
            }
            .Specs{
                margin: 10px 12px;
            }
            h2{
                font-size: 1.5rem;
            }
            p{
                font-size: 0.7rem;
            }
        }

    }
    .Specs{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px 40px;
    }

    animation: transform 1s;
    animation-timing-function: ease-in;
    @keyframes transform {
        0%{
            opacity: 0;
        }
        50%{
            opacity: 0.3;
        }
        100%{
            opacity: 1;
        }
    }
`;