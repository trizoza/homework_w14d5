import React, { Component } from 'react'

class Pokemons extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    var pictures = this.props.pokemons.map(function(pokemon, index) {
      ///////ROW QUESTIONS////////////////////
      return <img key={index} src={pokemon.front_picture} className={pokemon.className}/>
    });
    // console.log('pokemons', this.props.pokemons)
    return (
      <div className='board'>
        {pictures}
      </div>
    );
  }

}

export default Pokemons