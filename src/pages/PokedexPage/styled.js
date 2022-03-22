import styled from 'styled-components'
import background from '../../assets/background.svg'

export const Container = styled.div`
    margin: 50px auto;
    max-width: 90%;
    max-height: 92vh;
    grid-gap: 15px;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(280px, 4fr));
`

export const Card = styled.div`
    background-image: url(${background}) ;
    background-size: cover ;
    max-width: 25vw ;
    margin: 10px;
    border-radius: 10px;
    padding: 10px;
    color: #FFCB04;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 360px){
        min-width: 80% ;   
        min-height: 40vh;
    }   

    @media screen and (max-width: 412px){
        min-width: 80% ;   
        min-height: 40vh;
    }

    @media screen and (max-width: 600px){
        min-width: 80% ;   
        min-height: 40vh;
    }
`
export const Button = styled.button`
    border: 0;
    padding: 6px;
    border-radius: 6px;
    margin: 4px;
    cursor: pointer;
    color: #FFCB04;
    font-weight: bold;
    background-color: #3274EA;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`