import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -35px;

    .bottom{
        a{
            transition: color 200ms ease-in;
            :hover{
                color: white;
            }
        }
    }
    @media screen and (max-width: 420px){
        margin-top: -45px;
    }
`;

export const Content = styled.div`

    display: flex;
    flex-wrap: wrap;

    a{
        text-decoration: none;
        font-size: 0.85rem;
        font-weight: 500;
        padding: 5px 18px;
        letter-spacing: 0.4px;
        color: rgba(59, 59, 59, 0.753);
        transition: color 200ms ease-in;
        :hover{
            color: black;
        }
    }

    @media screen and (max-width: 430px) {
        flex-direction: column;
        align-items: center;
    }
`;