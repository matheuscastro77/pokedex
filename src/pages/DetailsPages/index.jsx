import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import HeaderDetails from '../../components/HeaderDetails';
import GlobalStateContext from '../../context/GlobalContext/GlobalStateContext';
import { CardCenter, ID, Name, DivButton, Button, DivId, DivName, DivTittleStats, CardLeft, DivMain, Stats, DivStats, TittleStats, PokeImg, CardRight, Container, DivCardCenter } from './styeld';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'


function DetailsPages() {

  const {pokemons, pokemonList, setPokemonList, setPokemons} = useContext(GlobalStateContext)

  const { name } = useParams()
    
  const addZeroes = ( num, len) => {
    var numberWithZeroes = String(num);
    var counter = numberWithZeroes.length;
      
  while(counter < len) {
  
      numberWithZeroes = "0" + numberWithZeroes;
    
    counter++;
  
    }
  
  return numberWithZeroes;
}

  const teste = pokemons.filter((teste2) => {
    return name === teste2.name
  })

  const HP = teste[0]?.stats[0].base_stat/125
  const Attack = teste[0]?.stats[1].base_stat/125
  const Defense = teste[0]?.stats[2].base_stat/125
  const Special_Attack = teste[0]?.stats[3].base_stat/125
  const Special_Defense = teste[0]?.stats[4].base_stat/125
  const Speed = teste[0]?.stats[5].base_stat/125 

  const data = [
    {
      data: {
        HP,
        Attack,
        Defense,
        Special_Attack,
        Special_Defense,
        Speed
      },
      meta: { color: "#E2BB25"},
    }    
  ];

const captions = {
    Special_Attack: 'Ataque Especial',
    Attack: 'Ataque',
    Defense: 'Defesa',
    Special_Defense: 'Defesa Especial',
    Speed: 'Velocidade',
    HP: 'Vida'
    
  };

  const options = {
    captionProps: () => ({
      textAnchor: 'middle',
      fontSize: 14,
      fontWeight: 'bold',
      fontFamily: 'sans-serif',
      fill: 'black'
    })
  }

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
      <HeaderDetails />
      <Container>
        <CardLeft>
        {pokemons.map((pokemon) => {
      if(name === pokemon.name ){
        return <DivMain key={pokemon.id}>
        <DivTittleStats><TittleStats>Tamanho</TittleStats></DivTittleStats>
        <DivStats><Stats>{pokemon.weight/10}kg</Stats></DivStats>
        <DivStats><Stats>{pokemon.height/10}m</Stats></DivStats>
        <DivTittleStats><TittleStats>Habilidade</TittleStats></DivTittleStats>
        <>{pokemon.abilities.map((pokemon) => {
          return  <DivStats key={pokemon.ability.name}><Stats>{pokemon.ability.name[0].toUpperCase() + pokemon.ability.name.slice(1)}</Stats></DivStats>
        })}</>
         <DivTittleStats><TittleStats>Tipo</TittleStats></DivTittleStats>
        <>{pokemon.types.map((pokemon) => {
          return <DivStats key={pokemon.type.name}><Stats>  {pokemon.type.name[0].toUpperCase() + pokemon.type.name.slice(1)}</Stats></DivStats>
        })}</>
        </DivMain>
      }
    })}
        </CardLeft>
        <CardCenter>
     {pokemons.map((pokemon) => {
      if(name === pokemon.name){
        return <DivCardCenter  key={pokemon.name}>
        <DivId><ID>#{addZeroes(pokemon.id, 3)}</ID></DivId>
        <PokeImg src={pokemon.image} alt={pokemon.name}/>
        <DivName><Name>{pokemon.name.toUpperCase()}</Name></DivName>
        <DivButton>
        <Button onClick={() => onClickAdd(pokemon)}>Adicionar</Button>
        <Button onClick={() => onClickRemover(pokemon)}>Remover</Button>
        </DivButton>
        </DivCardCenter>  
      }
    })}
        </CardCenter> 
        <CardRight>  
    <RadarChart className='shape'
    captions={captions}
    data={data}
    size={400}
    options={options}
    
  /> 
        </CardRight>
      </Container>
      
    </>
  );
}

export default DetailsPages;
