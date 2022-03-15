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
`

export const ContainerButtons = styled.div`

`
