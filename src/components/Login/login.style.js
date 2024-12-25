import styled from "styled-components";

export const Wrapper = styled.div`

    display: flex;
    flex-direction: column;
    gap: 50px;
    overflow-x: scroll;

    height: 100vh;
    
    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 6px 30px;
        margin-right: 20px;

        img{
            margin-top: 10px;
            height: 16px;
            width: 120px;
        }
    }
    .lang{
        display: flex;
        align-items: center;
        cursor: pointer;
        span{
            padding-left:4px;
            font-size: 0.94rem;
        }
        padding: 10px;
        border-radius: 10px;
        transition: all 200ms ease-in;
        :hover{
            background-color: hsla(0,0%,50.2%,0.125);
        }
    }

    @media screen and (max-width: 400px){
        .header{
            margin: 6px 10px;
        }
    }
`;

export const Content = styled.div`
        display: flex;
        flex-direction: column;
        gap: 40px;
        min-width:320px;
        margin: 0 auto;
    form{
        display: flex;
        flex-direction: column;
        gap: 15px;

        label{
            color: #5c5e62;
            font-weight: 400;
            font-size: 0.95rem;
            padding-left: 15px;
        }
        input{
            background-color: #f4f4f4;
            margin-bottom: 20px;
            outline: none;
            border: none;
            padding: 12px 20px;
            border-radius: 20px;
            font-size: 0.95rem;
            transition: all 0.2s;
            :focus{
                border: 1px solid lightgrey;
            }
        }
        button{
            border: none;
            outline: none;
            padding: 12px 20px;
            font-weight: 300;
            font-size: 0.85rem;
            letter-spacing: 0.6px;
            border-radius: 25px;
            color: white;
            text-transform: uppercase;
            background-color: #3d69e1;
            cursor: pointer;
            transition: all 300ms ease-in;
            :hover{
                background-color: #3457b1;
            }
        }
    }

    h1{
        text-align: left;
        font-weight: 400;
        letter-spacing: 1px;
        font-size: 2.1rem;
        color: black;
        margin-left: -15px;
    }

    button{
            min-width: 320px;
            border: 3px solid black;
            outline: none;
            padding: 10px 20px;
            font-weight: 300;
            font-size: 0.9rem;
            letter-spacing: 0.6px;
            border-radius: 25px;
            color: black;
            text-transform: uppercase;
            background-color: white;
            cursor: pointer;
            transition: all 300ms ease-in;
            :hover{
                background-color: black;
                color: white;
            }
    }

    .line{
        display: flex;
        align-items: center;
        justify-content: space-between;

        hr{
            width: 43%;
            height: 0;
            opacity: 0.4;
        }
        span{
            color: #5c5e62;
        }
    }
    @media screen and (max-width: 400px){
        h1{
            margin-left: 0;
            text-align: center;
        }
    }
`;