import React, { useContext ,useEffect} from "react";
import HeaderPokedex from "../../components/HeaderPokedex";
import GlobalStateContext from "../../context/GlobalContext/GlobalStateContext";
import { Container, Card, Button } from "./styled";
import { useNavigate } from 'react-router-dom'


function PokedexPage() {

  const {
    pokemonList,
    setPokemonList,
  } = useContext(GlobalStateContext);

  const history = useNavigate()
  
  
  const onClickRemover = (res) => {
    let index = pokemonList.findIndex(item => item.id === res)
    if(index === -1){
      const listaPokes = pokemonList
      listaPokes.push(res)
      setPokemonList(listaPokes)

      const newPokemonList = pokemonList.filter((pokemon)=>{ //removendo da home
        return pokemon.name !== res.name
    })
    setPokemonList(newPokemonList);
    
  };
}
  return (
    <>
      <HeaderPokedex />
      <Container>
        {pokemonList.length > 0 ? (pokemonList.map((res) => (
          <Card key={res.id}>
            <p>{res.name[0].toUpperCase() + res.name.slice(1)}</p>
            <img src={res.image} alt={res.name} style={{ width: "50%" }} />
            <div>
              <Button onClick={() => onClickRemover(res)}>Remover</Button>
              <Button onClick={() => history(`/details_pages/${res.name}`)}>Detalhes</Button>
            </div>
          </Card>
        )))
        :(<h2>Sua Pokedex está Vazia, inclua Pokemons!!</h2>)
        }
      </Container>
    </>
  );
}

export default PokedexPage;
