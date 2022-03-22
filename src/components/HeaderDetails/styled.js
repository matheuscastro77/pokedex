import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #1E82DE;
    height: 93px;
    padding: 0px 20px;
`

export const Img = styled.img`
    width: 18%;

  @media screen and (max-width: 740px){
    width: 28%;
  }
`

export const Button = styled.button`
    background-color: #E2BB25;
    color: #FFFFFF;
    height: 40px;
    border: 0px;
    border-radius: 10px;
    padding: 0px 20px;
    &:hover{
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.5s ease 0s;
  }
    font-weight: bold;
    margin: 10px;

  @media screen and (max-width: 360px){
    height: 35px;
    font-size: 0.7rem;
  }

  @media screen and (max-width: 412px){
    height: 35px;
    font-size: 0.7rem;
  }

  @media screen and (max-width: 740px){
    height: 30px;
    font-size: 0.6rem;
    max-width: 40% ;
  }

  @media screen and (max-width: 844px){
    height: 35px;
    font-size: 0.7rem;
  }

`

export const ContainerButtons = styled.div`
    display: flex;
`
