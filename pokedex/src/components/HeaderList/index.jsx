import React from 'react'
import {Container, Img, Button} from './styled'
import Logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  
  const history = useNavigate()
  
  return (
    <>  
    <Container> 
    <Img src={Logo} alt="logo"/>    
    <Button onClick={() => history('/pokedex_page')}>MEUS POKEMONS </Button>
    </Container>    
    </>
  )
}

export default Header 

