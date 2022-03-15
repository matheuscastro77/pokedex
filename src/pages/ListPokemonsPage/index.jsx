import React, {useContext} from 'react';
import HeaderList from '../../components/HeaderList'
import GlobalStateContext from "../../context/GlobalContext/GlobalStateContext"
import { useNavigate } from 'react-router-dom'
import {Container, ContainerCard, Card, Button, Img } from './styled'
import { List } from 'antd'

function ListPokemonsPage() {
  const {pokemons, setPokemons, pokemonList, setPokemonList}=useContext(GlobalStateContext)

  const history = useNavigate()

  const onClickAdd = ((pokeToAdd)=>{
    
    const index = pokemonList.findIndex((pokemon)=>{
        return pokemon.name === pokeToAdd.name
    })

    if(index === -1){
        const listaPokes = pokemonList
        listaPokes.push(pokeToAdd)
        setPokemonList(listaPokes)
        console.log(pokemonList)

        const newPokemonList = pokemons.filter((pokemon)=>{ //removendo da home
          return pokemon.name !== pokeToAdd.name
      })
      setPokemons(newPokemonList)
      localStorage.setItem('pokedex', JSON.stringify(pokemonList))
    }

})

  return (
    <>
    <Container>
      <HeaderList /> 
      <ContainerCard>
      <List
        grid={{ gutter: 0, column: 4, 
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 4,}}
      pagination={{
        pageSize: 20,
      }}
      dataSource={pokemons}
      renderItem={res => (
            <Card key={res.id}>
                <p>{res.name[0].toUpperCase() + res.name.slice(1)}</p>
                <Img src={res.image} alt={res.name}/>
              <div>
                <Button onClick={() => {onClickAdd(res)}}>Adicionar</Button>
                <Button onClick={() => history(`/details_pages/${res.name}`)}>Detalhes</Button>
              </div>
            </Card>)
          }
        
        >
      
      </List>
      </ContainerCard> 
      </Container>  
    </>
  );
}

export default ListPokemonsPage;