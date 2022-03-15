import React from 'react';
import person from '../../assets/image.png'
import logo from '../../assets/logo.png'
import { IoEnterOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';
import { Button, Container, DivButton, ImgLogo, ImgPerson, Logo, Main, PButton, Person } from './styled';


const Home = () => {

  const navigate = useNavigate()

  const goToListPokemons = () => {
    navigate('/list_pokemons')
  }

  return (
    <Main>
      <Logo>
        <ImgLogo src={logo} />
      </Logo>
      <Container>
        <DivButton>
          <Button onClick={goToListPokemons}>
            <PButton>ENTRAR</PButton> <IoEnterOutline style={{ fontSize: '35px', color: '#1E82DE' }} />
          </Button>
        </DivButton>
        <Person>
          <ImgPerson src={person} />
        </Person>
      </Container>
    </Main>
  );
}

export default Home;