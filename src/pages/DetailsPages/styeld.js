import styled from 'styled-components'
import background from '../../assets/background.svg'

export const Container = styled.div`
  display: flex ;
  justify-content: center;
  margin-top: 4%;
  justify-content: space-evenly;

  @media screen and (max-width: 640px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 820px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
`

export const DivButton = styled.div`
  display: flex;
  margin-bottom: 10%;
`

export const Button = styled.button`
    background-color: #E2BB25;
    color: #FFFFFF;
    height: 40px;
    border: 0px;
    border-radius: 10px;
    padding: 10px;
    &:hover{
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.5s ease 0s;
  }
    font-weight: bold;
    margin: 10px;
`

export const DivCardCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 57vh;
  max-width: 50%;
`

export const DivMain = styled.div`
  max-height: 95%;
`

export const DivTittleStats = styled.div`
  height: 5.5vh;
  text-align: center;

  @media screen and (max-width: 640px){
     height: 6.5vh;
  }

  @media screen and (max-width: 414px){
    height: 6vh;
  }

`

export const TittleStats = styled.h3`
  color: #E2BB25;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.3rem;
  
  @media screen and (max-width: 960px){
    font-size: 1.1rem;
  }

  @media screen and (max-width: 640px){
    font-size: 1.3rem;
  }

  @media screen and (max-width: 414px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 820px){
    font-size: 1.4rem;
  }

`

export const Stats = styled.p`
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  height: 3.5vh;

  @media screen and (max-width: 960px){
    font-size: 0.9rem;
  }

  @media screen and (max-width: 640px){
    font-size: 1.1rem;
  }

  @media screen and (max-width: 414px){
    font-size: 0.9rem;
  }

  @media screen and (max-width: 820px){
    font-size: 1.2rem;
  }

`

export const DivStats = styled.div`
  text-align: center;
  height: 5vh;

  @media screen and (max-width: 640px){
     height: 6.5vh;
  }

  @media screen and (max-width: 414px){
    height: 6vh;
  }
`

export const ID = styled.p`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  padding: 0px 10px 10px 10px;

  @media screen and (max-width: 640px){
    font-size: 1.6rem; 
  }

  @media screen and (max-width: 414px){
    font-size: 1.4rem;
  }

  @media screen and (max-width: 820px){
    font-size: 2rem;
  }

  @media screen and (max-width: 1366px){
    font-size: 1.6rem;
  }

  @media screen and (max-width: 768px){
    font-size: 2rem;
  }

  @media screen and (max-width: 1024px){
    font-size: 1.2rem;
  }

`

export const DivId = styled.div`
  width: 42%;
  height:5.7vh ;
  background-color: #E2BB25;
  border-radius: 0px 0px 25px 25px;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-bottom: 10%;

  @media screen and (max-width: 960px){
    border-radius: 0px 0px 15px 15px;
    width: 48%;
  }

  @media screen and (max-width: 1024px){
    border-radius: 0px 0px 15px 15px;
    width: 55%;
  }

  @media screen and (max-width: 640px){
    width: 60%;
    height:6vh ;
  }

  @media screen and (max-width: 414px){
    width: 50%;
    height: 4.5vh ;
  }

  @media screen and (max-width: 820px){
    height: 4.5vh ;
    width: 40%;
  }

  @media screen and (max-width: 1366px){
    height: 5vh ;
    width: 45%;
  }

`

export const PokeImg = styled.img`
  width: 70%;
  max-height: 30vh;
  margin-top: -5%;
  margin-bottom: 2.5%;

  @media screen and (max-width: 640px){
    width: 80%;
    height: 46vh;
  }
`

export const Name = styled.p`
  color: #E2BB25;
  font-size: 2rem;
  padding: 10px;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  @media screen and (max-width: 960px){
    font-size: 1.6rem;
  }

  @media screen and (max-width: 820px){
    font-size: 2rem;
  }

`

export const DivName = styled.div`
  height: 5vh;
  text-align: center;

  @media screen and (max-width: 960px){
    margin-bottom: 12%;
  }
  
`

export const CardLeft = styled.div`
  width: 22%;
  height: 56vh;
	background: #1E82DE;
	transform: perspective(300px) rotateY(25deg);
  margin-top: 3.2% ;
  border-radius: 10px ;
  transition: all 1s ease 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover{
    transform: perspective(300px) rotateY(0deg);
    transition: all 0.8s ease 0s;
  }

  @media screen and (max-width: 640px){
    width: 52%;
    transform: none;
    height: 70vh;
  }

  @media screen and (max-width: 360px){
    width: 80%;
    height: 60vh;
    transform: none;
  }

  @media screen and (max-width: 414px){
    width: 80%;
    height: 55vh;
    transform: none;
  }

  @media screen and (max-width: 820px){
    width: 80%;
    height: 52vh;
    transform: none;
  }

  @media screen and (max-height:  1440px){
    margin-top: 6.2% ;
  }

  @media screen and (max-width: 768px){
    width: 80%;
    transform: none;
    height: 65vh;
  }

`

export const CardCenter = styled.div`
  width: 28.8%;
  margin-top: 3%;
  height: 57vh;
	border-radius: 25px;
	background-image: url(${background});
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 640px){
    width: 52%;
    height: 60vh;
  }

  @media screen and (max-width: 360px){
    width: 80%;
    height: 60vh;
  }

  @media screen and (max-width: 414px){
    width: 80%;
    height: 55vh;
  }

  @media screen and (max-width: 820px){
    width: 80%;
    height: 52vh;
  }

  @media screen and (max-height:  1440px){
    margin-top: 6% ;
  }

  @media screen and (max-width: 768px){
    width: 80%;
    transform: none;
    height: 55vh;
  }
`

export const CardRight = styled.div`
  width: 22%;
	height: 56vh;
	background: #1E82DE;
	transform: perspective(300px) rotateY(-25deg);
  margin-top: 3.2% ;
  border-radius: 10px ;
  transition: all 1s ease 0s;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover{
    transform: perspective(300px) rotateY(0deg);
    transition: all 0.8s ease 0s;
  }
  
  @media screen and (max-width: 360px){
    width: 80%;
    transform: none;
    height: 50vh;
    margin-bottom: 5%;
  }

  @media screen and (max-width: 414px){
    width: 80%;
    height: 50vh;
    margin-bottom: 5%;
    transform: none;
  }

  @media screen and (max-width: 820px){ 
    width: 80%;
    transform: none;
    height: 50vh;
    margin-bottom: 5%;
  }

  @media screen and (max-width: 768px){ 
    width: 80%;
    transform: none;
    height: 70vh;
    margin-bottom: 5%;
  }

  @media screen and (max-height:  1440px){
    margin-top: 6.2% ;
  }

`
