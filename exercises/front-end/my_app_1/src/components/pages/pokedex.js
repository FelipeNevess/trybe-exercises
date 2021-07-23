import React, { Component } from 'react';
import Pokemons from '../data/data';
import {Pokemon} from './pokemon';

export class Pokedex extends Component {
  render() {
    return (
      <div className="container">
        {Pokemons.map((element) => <Pokemon key={element.id} pokeInfo={element} />)}
      </div>
    )
  }
}
