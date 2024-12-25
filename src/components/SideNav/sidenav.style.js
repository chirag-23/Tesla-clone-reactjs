import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;

    a{
        text-decoration: none;
    }

    list-style: none;
    padding: 20px;
    overflow-y: scroll;

    /* display: ${props => props.show ? 'block' : 'none'}; */
    transition: transform 400ms ease-in;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    /* translateX(100%) means the wrapper is off the screen/vw*/
`;

export const Content = styled.div`
    margin-top: 55px;
    margin-bottom: 30px;
    li{
        padding: 8px 15px;
        margin: 10px;
        font-size: 0.95rem;
        letter-spacing: 0.4px;
        border-radius: 8px;
        transition: all 300ms ease-in;
        cursor: pointer;
        :hover{
            background-color: rgba(90, 90, 90, 0.1);
            font-weight: 600;
        }
    }

    @media screen and (min-width: 1150px){
        .half{
            display: none;
        }
    }
`;