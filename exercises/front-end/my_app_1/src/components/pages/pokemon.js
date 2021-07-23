import React, { Component } from 'react';

export class Pokemon extends Component {
  render() {
    const {pokeInfo} = this.props
    const {name, type, averageWeight: {value, measurementUnit}, image, moreInfo} = pokeInfo

    return (
      <div className="sub_container">
        <div className="c1">
          <p>Nome: {name}</p>
          <p>Tipo: {type}</p>
          <p>Average Weight: {value} {measurementUnit}</p>
          <a href={moreInfo}><button>Mais Informações</button></a>
        </div>
        <div className="c2">
          <img src={image} alt={name} className="img"/>
        </div>
      </div>
    )
  }
}
