import styled from 'styled-components';
import background from '../../assets/background.svg'

export const Main = styled.div`
  background-image: url(${background}) ;
  background-size: cover ;
  min-height: 100vh ;
`

export const Logo = styled.div`
  margin-left: auto ;
  margin-right: auto ;
  height: 28.5vh ;
  width: 45%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 360px){
    width: 90%;
    height: 25vh;
  }

  @media screen and (max-width: 412px){
    width: 90%;
    height: 25vh;
  }

  @media screen and (max-width: 600px){
    width: 90%;
    height: 25vh;
  }

  @media screen and (max-width: 820px){
    width: 90%;
    height: 25vh;
  }

  @media screen and (max-width: 412px){
    width: 80%;
    height: 22vh;
  }
  
`

export const ImgLogo = styled.img`
  width: 100% ;
  padding: 10px ;

`

export const Person = styled.div`
  margin-right: 2px ;
  margin-bottom: -10px ;
`

export const ImgPerson = styled.img`
  width: 100% ;
  height: 65vh ;

  @media screen and (max-width: 360px){
    width: 100% ;
    height: 45vh;
  }

  @media screen and (max-width: 412px){
    width: 100%;
    height: 45vh;
  }

  @media screen and (max-width: 600px){
    width: 100%;
    height: 45vh;
  }

  @media screen and (max-width: 820px){
    width: 100%;
    height: 45vh;
  }
`

export const Container = styled.div`
  width: 100% ;
  display: flex ;
  justify-content: space-between;
  align-items: center;
  position: fixed ;
  bottom: 0px ;

  @media screen and (max-width: 360px){
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 412px){
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 600px){
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 820px){
    display: flex;
    flex-direction: column;
  }
`

export const DivButton = styled.div`
  display: flex ;
  justify-content: center;
  width: 50.1% ;
  height: 10vh ;

  @media screen and (max-width: 360px){
    margin-bottom: 20%;
    height: 8vh;
  }

  @media screen and (max-width: 412px){
    margin-bottom: 20%;
    height: 8vh;
  }

  @media screen and (max-width: 600px){
    margin-bottom: 20%;
    height: 8vh;
  }

  @media screen and (max-width: 820px){
    margin-bottom: 20%;
    height: 8vh;
  }
`

export const Button = styled.button`
  width: 32%;
  display: flex ;
  align-items: center;
  justify-content: center ;
  border-radius: 15px ;
  border: 0px ;
  background-color: white ;
  :hover{
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.5s ease 0s;
  }  

  @media screen and (max-width: 360px){
    width: 82%;
  }

  @media screen and (max-width: 412px){
    width: 82%;
  }

  @media screen and (max-width: 600px){
    width: 82%;
  }
  
  @media screen and (max-width: 820px){
    width: 62%;
  }
  
`

export const PButton = styled.p`
  margin-right: 10% ;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 22px;
  font-weight: bold ;
  color: #1E82DE ;

  @media screen and (max-width: 360px){
    font-size: 18px;
  }

  @media screen and (max-width: 960px){
    font-size: 18px;
  }

  @media screen and (max-width: 600px){
    font-size: 22px;
  }

  @media screen and (max-width: 375px){
    font-size: 17px;
  }

  @media screen and (max-width: 820px){
    font-size: 22px;
  }

  @media screen and (max-width: 412px){
    font-size: 17px;
  }
`