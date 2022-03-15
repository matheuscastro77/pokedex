import React from 'react'
import {Container, Img, Button, ContainerButtons} from './styled'
import Logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'


const HeaderDetails = () => {
  
  const history = useNavigate()
  
  return (
    <>  
    <Container>           
    <Img src={Logo} alt="logo"/>
    <Button onClick={() => history(-1)}>VOLTAR </Button>
    <ContainerButtons>
    <Button onClick={() => history('/pokedex_page')}>MEUS POKEMONS </Button>
    </ContainerButtons>
    </Container>    
    </>
  )
}

export default HeaderDetails 

