import React, { Component } from 'react'
import Pokemons from '../components/Pokemons'
import Questions from '../components/Questions'

class SrcPokemon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      srcPokemon: [
        {
          _id: "58b0416d2a67fb7209c741d5",
          name: "bulbasaur",
          id: 1,
          defense: 49,
          attack: 49,
          hp: 45,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
          type: "poison",
          move: "razor-wind"
        },
        {
          _id: "58b041aa4aa5f772344778e4",
          name: "venusaur",
          id: 3,
          defense: 83,
          attack: 82,
          hp: 80,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
          type: "poison",
          move: "swords-dance"
        },
        {
          _id: "58b041ab4aa5f772344778e5",
          name: "ivysaur",
          id: 2,
          defense: 63,
          attack: 62,
          hp: 60,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
          type: "poison",
          move: "swords-dance"
        },
        {
          _id: "58b041ab4aa5f772344778e6",
          name: "pidgeot",
          id: 18,
          defense: 75,
          attack: 80,
          hp: 83,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/18.png",
          type: "flying",
          move: "razor-wind"
        },
        {
          _id: "58b041ac4aa5f772344778e7",
          name: "butterfree",
          id: 12,
          defense: 50,
          attack: 45,
          hp: 60,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png",
          type: "flying",
          move: "razor-wind"
        },
        {
          _id: "58b041ac4aa5f772344778e8",
          name: "weedle",
          id: 13,
          defense: 30,
          attack: 35,
          hp: 40,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/13.png",
          type: "poison",
          move: "poison-sting"
        },
        {
          _id: "58b041ac4aa5f772344778e9",
          name: "kakuna",
          id: 14,
          defense: 50,
          attack: 25,
          hp: 45,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/14.png",
          type: "poison",
          move: "string-shot"
        },
        {
          _id: "58b041ad4aa5f772344778ea",
          name: "charmeleon",
          id: 5,
          defense: 58,
          attack: 64,
          hp: 58,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png",
          type: "fire",
          move: "mega-punch"
        },
        {
          _id: "58b041ae4aa5f772344778eb",
          name: "pidgey",
          id: 16,
          defense: 40,
          attack: 45,
          hp: 40,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/16.png",
          type: "flying",
          move: "razor-wind"
        },
        {
          _id: "58b041ae4aa5f772344778ec",
          name: "beedrill",
          id: 15,
          defense: 40,
          attack: 90,
          hp: 65,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/15.png",
          type: "poison",
          move: "swords-dance"
        },
        {
          _id: "58b041af4aa5f772344778ed",
          name: "raticate",
          id: 20,
          defense: 60,
          attack: 81,
          hp: 55,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/20.png",
          type: "normal",
          move: "swords-dance"
        },
        {
          _id: "58b041b04aa5f772344778ee",
          name: "charmander",
          id: 4,
          defense: 43,
          attack: 52,
          hp: 39,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
          type: "fire",
          move: "mega-punch"
        },
        {
          _id: "58b041b04aa5f772344778ef",
          name: "rattata",
          id: 19,
          defense: 35,
          attack: 56,
          hp: 30,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/19.png",
          type: "normal",
          move: "cut"
        },
        {
          _id: "58b041b04aa5f772344778f0",
          name: "caterpie",
          id: 10,
          defense: 35,
          attack: 30,
          hp: 45,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png",
          type: "bug",
          move: "tackle"
        },
        {
          _id: "58b041b14aa5f772344778f1",
          name: "blastoise",
          id: 9,
          defense: 100,
          attack: 83,
          hp: 79,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png",
          type: "water",
          move: "mega-punch"
        },
        {
          _id: "58b041b14aa5f772344778f2",
          name: "metapod",
          id: 11,
          defense: 55,
          attack: 20,
          hp: 50,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/11.png",
          type: "bug",
          move: "string-shot"
        },
        {
          _id: "58b041b24aa5f772344778f3",
          name: "pidgeotto",
          id: 17,
          defense: 55,
          attack: 60,
          hp: 63,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/17.png",
          type: "flying",
          move: "razor-wind"
        },
        {
          _id: "58b041b24aa5f772344778f4",
          name: "arbok",
          id: 24,
          defense: 69,
          attack: 85,
          hp: 60,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/24.png",
          type: "poison",
          move: "bind"
        },
        {
          _id: "58b041b34aa5f772344778f5",
          name: "raichu",
          id: 26,
          defense: 55,
          attack: 90,
          hp: 60,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/26.png",
          type: "electric",
          move: "mega-punch"
        },
        {
          _id: "58b041b44aa5f772344778f6",
          name: "fearow",
          id: 22,
          defense: 65,
          attack: 90,
          hp: 65,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/22.png",
          type: "flying",
          move: "razor-wind"
        },
        {
          _id: "58b041b44aa5f772344778f7",
          name: "nidorina",
          id: 30,
          defense: 67,
          attack: 62,
          hp: 70,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/30.png",
          type: "poison",
          move: "scratch"
        },
        {
          _id: "58b041b54aa5f772344778f8",
          name: "pikachu",
          id: 25,
          defense: 40,
          attack: 55,
          hp: 35,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
          type: "electric",
          move: "mega-punch"
        },
        {
          _id: "58b041b64aa5f772344778f9",
          name: "ekans",
          id: 23,
          defense: 44,
          attack: 60,
          hp: 35,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/23.png",
          type: "poison",
          move: "bind"
        },
        {
          _id: "58b041b64aa5f772344778fa",
          name: "spearow",
          id: 21,
          defense: 30,
          attack: 60,
          hp: 40,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/21.png",
          type: "flying",
          move: "razor-wind"
        },
        {
          _id: "58b041b74aa5f772344778fb",
          name: "wartortle",
          id: 8,
          defense: 80,
          attack: 63,
          hp: 59,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png",
          type: "water",
          move: "mega-punch"
        },
        {
          _id: "58b041b74aa5f772344778fc",
          name: "squirtle",
          id: 7,
          defense: 65,
          attack: 48,
          hp: 44,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
          type: "water",
          move: "mega-punch"
        },
        {
          _id: "58b041b84aa5f772344778fd",
          name: "charizard",
          id: 6,
          defense: 78,
          attack: 84,
          hp: 78,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
          type: "flying",
          move: "mega-punch"
        },
        {
          _id: "58b041b94aa5f772344778fe",
          name: "nidoran-f",
          id: 29,
          defense: 52,
          attack: 47,
          hp: 55,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/29.png",
          type: "poison",
          move: "scratch"
        },
        {
          _id: "58b041b94aa5f772344778ff",
          name: "sandshrew",
          id: 27,
          defense: 85,
          attack: 75,
          hp: 50,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/27.png",
          type: "ground",
          move: "scratch"
        },
        {
          _id: "58b041ba4aa5f77234477900",
          name: "sandslash",
          id: 28,
          defense: 110,
          attack: 100,
          hp: 75,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/28.png",
          type: "ground",
          move: "scratch"
        },
        {
          _id: "58b0423a608d0472848cad28",
          name: "nidoran-m",
          id: 32,
          defense: 40,
          attack: 57,
          hp: 46,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/32.png",
          type: "poison",
          move: "cut"
        },
        {
          _id: "58b0423a608d0472848cad29",
          name: "nidorino",
          id: 33,
          defense: 57,
          attack: 72,
          hp: 61,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/33.png",
          type: "poison",
          move: "cut"
        },
        {
          _id: "58b0423b608d0472848cad2a",
          name: "diglett",
          id: 50,
          defense: 25,
          attack: 55,
          hp: 10,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/50.png",
          type: "ground",
          move: "scratch"
        },
        {
          _id: "58b0423c608d0472848cad2b",
          name: "clefable",
          id: 36,
          defense: 73,
          attack: 70,
          hp: 95,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/36.png",
          type: "fairy",
          move: "double-slap"
        },
        {
          _id: "58b0423d608d0472848cad2c",
          name: "wigglytuff",
          id: 40,
          defense: 45,
          attack: 70,
          hp: 140,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/40.png",
          type: "fairy",
          move: "double-slap"
        },
        {
          _id: "58b0423e608d0472848cad2d",
          name: "vileplume",
          id: 45,
          defense: 85,
          attack: 80,
          hp: 75,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/45.png",
          type: "poison",
          move: "swords-dance"
        },
        {
          _id: "58b0423f608d0472848cad2e",
          name: "meowth",
          id: 52,
          defense: 35,
          attack: 45,
          hp: 40,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/52.png",
          type: "normal",
          move: "pay-day"
        },
        {
          _id: "58b04240608d0472848cad2f",
          name: "nidoking",
          id: 34,
          defense: 77,
          attack: 102,
          hp: 81,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/34.png",
          type: "ground",
          move: "mega-punch"
        },
        {
          _id: "58b04241608d0472848cad30",
          name: "parasect",
          id: 47,
          defense: 80,
          attack: 95,
          hp: 60,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/47.png",
          type: "grass",
          move: "scratch"
        },
        {
          _id: "58b04241608d0472848cad31",
          name: "growlithe",
          id: 58,
          defense: 45,
          attack: 70,
          hp: 55,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/58.png",
          type: "fire",
          move: "double-kick"
        },
        {
          _id: "58b04242608d0472848cad32",
          name: "zubat",
          id: 41,
          defense: 35,
          attack: 45,
          hp: 40,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/41.png",
          type: "flying",
          move: "razor-wind"
        },
        {
          _id: "58b04243608d0472848cad33",
          name: "vulpix",
          id: 37,
          defense: 40,
          attack: 41,
          hp: 38,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/37.png",
          type: "fire",
          move: "headbutt"
        },
        {
          _id: "58b04244608d0472848cad34",
          name: "dugtrio",
          id: 51,
          defense: 50,
          attack: 80,
          hp: 35,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/51.png",
          type: "ground",
          move: "scratch"
        },
        {
          _id: "58b04244608d0472848cad35",
          name: "poliwag",
          id: 60,
          defense: 40,
          attack: 50,
          hp: 40,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/60.png",
          type: "water",
          move: "double-slap"
        },
        {
          _id: "58b04245608d0472848cad36",
          name: "venomoth",
          id: 49,
          defense: 60,
          attack: 65,
          hp: 70,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/49.png",
          type: "poison",
          move: "razor-wind"
        },
        {
          _id: "58b04245608d0472848cad37",
          name: "gloom",
          id: 44,
          defense: 70,
          attack: 65,
          hp: 60,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/44.png",
          type: "poison",
          move: "swords-dance"
        },
        {
          _id: "58b04246608d0472848cad38",
          name: "paras",
          id: 46,
          defense: 55,
          attack: 70,
          hp: 35,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/46.png",
          type: "grass",
          move: "scratch"
        },
        {
          _id: "58b04247608d0472848cad39",
          name: "clefairy",
          id: 35,
          defense: 48,
          attack: 45,
          hp: 70,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png",
          type: "fairy",
          move: "pound"
        },
        {
          _id: "58b04248608d0472848cad3a",
          name: "nidoqueen",
          id: 31,
          defense: 87,
          attack: 92,
          hp: 90,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/31.png",
          type: "ground",
          move: "mega-punch"
        },
        {
          _id: "58b04249608d0472848cad3b",
          name: "persian",
          id: 53,
          defense: 60,
          attack: 70,
          hp: 65,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/53.png",
          type: "normal",
          move: "pay-day"
        },
        {
          _id: "58b0424a608d0472848cad3c",
          name: "venonat",
          id: 48,
          defense: 50,
          attack: 55,
          hp: 60,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/48.png",
          type: "poison",
          move: "tackle"
        },
        {
          _id: "58b0424a608d0472848cad3d",
          name: "golbat",
          id: 42,
          defense: 70,
          attack: 80,
          hp: 75,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/42.png",
          type: "flying",
          move: "razor-wind"
        },
        {
          _id: "58b0424b608d0472848cad3e",
          name: "mankey",
          id: 56,
          defense: 35,
          attack: 80,
          hp: 40,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/56.png",
          type: "fighting",
          move: "karate-chop"
        },
        {
          _id: "58b0424c608d0472848cad3f",
          name: "arcanine",
          id: 59,
          defense: 80,
          attack: 110,
          hp: 90,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/59.png",
          type: "fire",
          move: "headbutt"
        },
        {
          _id: "58b0424c608d0472848cad40",
          name: "psyduck",
          id: 54,
          defense: 48,
          attack: 52,
          hp: 50,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/54.png",
          type: "water",
          move: "mega-punch"
        },
        {
          _id: "58b0424d608d0472848cad41",
          name: "golduck",
          id: 55,
          defense: 78,
          attack: 82,
          hp: 80,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/55.png",
          type: "water",
          move: "mega-punch"
        },
        {
          _id: "58b0424e608d0472848cad42",
          name: "jigglypuff",
          id: 39,
          defense: 20,
          attack: 45,
          hp: 115,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/39.png",
          type: "fairy",
          move: "pound"
        },
        {
          _id: "58b0424f608d0472848cad43",
          name: "primeape",
          id: 57,
          defense: 60,
          attack: 105,
          hp: 65,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/57.png",
          type: "fighting",
          move: "karate-chop"
        },
        {
          _id: "58b04250608d0472848cad44",
          name: "ninetales",
          id: 38,
          defense: 75,
          attack: 76,
          hp: 73,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/38.png",
          type: "fire",
          move: "headbutt"
        },
        {
          _id: "58b042f75553b472c6cb0586",
          name: "oddish",
          id: 43,
          defense: 55,
          attack: 50,
          hp: 45,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/43.png",
          type: "poison",
          move: "swords-dance"
        },
        {
          _id: "58b0432aac635f72f92db585",
          name: "golem",
          id: 76,
          defense: 130,
          attack: 120,
          hp: 80,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/76.png",
          type: "ground",
          move: "mega-punch"
        },
        {
          _id: "58b0432bac635f72f92db586",
          name: "alakazam",
          id: 65,
          defense: 45,
          attack: 50,
          hp: 55,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/65.png",
          type: "psychic",
          move: "mega-punch"
        },
        {
          _id: "58b0432cac635f72f92db587",
          name: "kadabra",
          id: 64,
          defense: 30,
          attack: 35,
          hp: 40,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/64.png",
          type: "psychic",
          move: "mega-punch"
        },
        {
          _id: "58b0432dac635f72f92db588",
          name: "tentacool",
          id: 72,
          defense: 35,
          attack: 40,
          hp: 40,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/72.png",
          type: "poison",
          move: "swords-dance"
        },
        {
          _id: "58b0432dac635f72f92db589",
          name: "slowbro",
          id: 80,
          defense: 110,
          attack: 75,
          hp: 95,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/80.png",
          type: "psychic",
          move: "mega-punch"
        },
        {
          _id: "58b0432eac635f72f92db58a",
          name: "ponyta",
          id: 77,
          defense: 55,
          attack: 85,
          hp: 50,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/77.png",
          type: "fire",
          move: "stomp"
        },
        {
          _id: "58b0432fac635f72f92db58b",
          name: "machop",
          id: 66,
          defense: 50,
          attack: 80,
          hp: 70,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/66.png",
          type: "fighting",
          move: "karate-chop"
        },
        {
          _id: "58b04330ac635f72f92db58c",
          name: "geodude",
          id: 74,
          defense: 100,
          attack: 80,
          hp: 40,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/74.png",
          type: "ground",
          move: "mega-punch"
        },
        {
          _id: "58b04330ac635f72f92db58d",
          name: "slowpoke",
          id: 79,
          defense: 65,
          attack: 65,
          hp: 90,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/79.png",
          type: "psychic",
          move: "pay-day"
        },
        {
          _id: "58b04331ac635f72f92db58e",
          name: "doduo",
          id: 84,
          defense: 45,
          attack: 85,
          hp: 35,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/84.png",
          type: "flying",
          move: "whirlwind"
        },
        {
          _id: "58b04332ac635f72f92db58f",
          name: "tentacruel",
          id: 73,
          defense: 65,
          attack: 70,
          hp: 80,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/73.png",
          type: "poison",
          move: "swords-dance"
        },
        {
          _id: "58b04332ac635f72f92db590",
          name: "victreebel",
          id: 71,
          defense: 65,
          attack: 105,
          hp: 80,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/71.png",
          type: "poison",
          move: "swords-dance"
        },
        {
          _id: "58b04333ac635f72f92db591",
          name: "farfetchd",
          id: 83,
          defense: 55,
          attack: 65,
          hp: 52,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/83.png",
          type: "flying",
          move: "razor-wind"
        },
        {
          _id: "58b04334ac635f72f92db592",
          name: "dewgong",
          id: 87,
          defense: 80,
          attack: 70,
          hp: 90,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/87.png",
          type: "ice",
          move: "pay-day"
        },
        {
          _id: "58b04334ac635f72f92db593",
          name: "bellsprout",
          id: 69,
          defense: 35,
          attack: 75,
          hp: 50,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/69.png",
          type: "poison",
          move: "swords-dance"
        },
        {
          _id: "58b04335ac635f72f92db594",
          name: "shellder",
          id: 90,
          defense: 100,
          attack: 65,
          hp: 30,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/90.png",
          type: "water",
          move: "tackle"
        },
        {
          _id: "58b04336ac635f72f92db595",
          name: "muk",
          id: 89,
          defense: 75,
          attack: 105,
          hp: 105,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/89.png",
          type: "poison",
          move: "pound"
        },
        {
          _id: "58b04336ac635f72f92db596",
          name: "poliwrath",
          id: 62,
          defense: 95,
          attack: 95,
          hp: 90,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/62.png",
          type: "fighting",
          move: "double-slap"
        },
        {
          _id: "58b04337ac635f72f92db597",
          name: "magneton",
          id: 82,
          defense: 95,
          attack: 60,
          hp: 50,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/82.png",
          type: "steel",
          move: "tackle"
        },
        {
          _id: "58b04338ac635f72f92db598",
          name: "magnemite",
          id: 81,
          defense: 70,
          attack: 35,
          hp: 25,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/81.png",
          type: "steel",
          move: "tackle"
        },
        {
          _id: "58b04338ac635f72f92db599",
          name: "graveler",
          id: 75,
          defense: 115,
          attack: 95,
          hp: 55,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/75.png",
          type: "ground",
          move: "mega-punch"
        },
        {
          _id: "58b04339ac635f72f92db59a",
          name: "grimer",
          id: 88,
          defense: 50,
          attack: 80,
          hp: 80,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/88.png",
          type: "poison",
          move: "pound"
        },
        {
          _id: "58b0433aac635f72f92db59b",
          name: "poliwhirl",
          id: 61,
          defense: 65,
          attack: 65,
          hp: 65,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/61.png",
          type: "water",
          move: "double-slap"
        },
        {
          _id: "58b0433aac635f72f92db59c",
          name: "weepinbell",
          id: 70,
          defense: 50,
          attack: 90,
          hp: 65,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/70.png",
          type: "poison",
          move: "swords-dance"
        },
        {
          _id: "58b0433bac635f72f92db59d",
          name: "abra",
          id: 63,
          defense: 15,
          attack: 20,
          hp: 25,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/63.png",
          type: "psychic",
          move: "mega-punch"
        },
        {
          _id: "58b0433cac635f72f92db59e",
          name: "machoke",
          id: 67,
          defense: 70,
          attack: 100,
          hp: 80,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/67.png",
          type: "fighting",
          move: "karate-chop"
        },
        {
          _id: "58b0433cac635f72f92db59f",
          name: "rapidash",
          id: 78,
          defense: 70,
          attack: 100,
          hp: 65,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/78.png",
          type: "fire",
          move: "stomp"
        },
        {
          _id: "58b0433dac635f72f92db5a0",
          name: "machamp",
          id: 68,
          defense: 80,
          attack: 130,
          hp: 90,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/68.png",
          type: "fighting",
          move: "karate-chop"
        },
        {
          _id: "58b0433eac635f72f92db5a1",
          name: "seel",
          id: 86,
          defense: 55,
          attack: 45,
          hp: 65,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/86.png",
          type: "water",
          move: "pay-day"
        },
        {
          _id: "58b0433eac635f72f92db5a2",
          name: "dodrio",
          id: 85,
          defense: 70,
          attack: 110,
          hp: 60,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/85.png",
          type: "flying",
          move: "whirlwind"
        },
        {
          _id: "58b04362d8e17e731dcb12cc",
          name: "weezing",
          id: 110,
          defense: 120,
          attack: 90,
          hp: 65,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/110.png",
          type: "poison",
          move: "tackle"
        },
        {
          _id: "58b04363d8e17e731dcb12cd",
          name: "kangaskhan",
          id: 115,
          defense: 80,
          attack: 95,
          hp: 105,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/115.png",
          type: "normal",
          move: "comet-punch"
        },
        {
          _id: "58b04363d8e17e731dcb12ce",
          name: "electrode",
          id: 101,
          defense: 70,
          attack: 50,
          hp: 60,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/101.png",
          type: "electric",
          move: "headbutt"
        },
        {
          _id: "58b04364d8e17e731dcb12cf",
          name: "gengar",
          id: 94,
          defense: 60,
          attack: 65,
          hp: 60,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/94.png",
          type: "poison",
          move: "mega-punch"
        },
        {
          _id: "58b04365d8e17e731dcb12d0",
          name: "onix",
          id: 95,
          defense: 160,
          attack: 45,
          hp: 35,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/95.png",
          type: "ground",
          move: "bind"
        },
        {
          _id: "58b04365d8e17e731dcb12d1",
          name: "voltorb",
          id: 100,
          defense: 50,
          attack: 30,
          hp: 40,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/100.png",
          type: "electric",
          move: "headbutt"
        },
        {
          _id: "58b04366d8e17e731dcb12d2",
          name: "koffing",
          id: 109,
          defense: 95,
          attack: 65,
          hp: 40,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/109.png",
          type: "poison",
          move: "tackle"
        },
        {
          _id: "58b04367d8e17e731dcb12d3",
          name: "cubone",
          id: 104,
          defense: 95,
          attack: 50,
          hp: 50,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/104.png",
          type: "ground",
          move: "mega-punch"
        },
        {
          _id: "58b04367d8e17e731dcb12d4",
          name: "gastly",
          id: 92,
          defense: 30,
          attack: 35,
          hp: 30,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/92.png",
          type: "poison",
          move: "fire-punch"
        },
        {
          _id: "58b04368d8e17e731dcb12d5",
          name: "lickitung",
          id: 108,
          defense: 75,
          attack: 55,
          hp: 90,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/108.png",
          type: "normal",
          move: "mega-punch"
        },
        {
          _id: "58b04369d8e17e731dcb12d6",
          name: "cloyster",
          id: 91,
          defense: 180,
          attack: 95,
          hp: 50,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/91.png",
          type: "ice",
          move: "take-down"
        },
        {
          _id: "58b0436ad8e17e731dcb12d7",
          name: "chansey",
          id: 113,
          defense: 5,
          attack: 5,
          hp: 250,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/113.png",
          type: "normal",
          move: "pound"
        },
        {
          _id: "58b0436bd8e17e731dcb12d8",
          name: "tangela",
          id: 114,
          defense: 115,
          attack: 55,
          hp: 65,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/114.png",
          type: "grass",
          move: "swords-dance"
        },
        {
          _id: "58b0436cd8e17e731dcb12d9",
          name: "hitmonlee",
          id: 106,
          defense: 53,
          attack: 120,
          hp: 50,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/106.png",
          type: "fighting",
          move: "mega-punch"
        },
        {
          _id: "58b0436cd8e17e731dcb12da",
          name: "exeggutor",
          id: 103,
          defense: 85,
          attack: 95,
          hp: 95,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/103.png",
          type: "psychic",
          move: "swords-dance"
        },
        {
          _id: "58b0436dd8e17e731dcb12db",
          name: "seadra",
          id: 117,
          defense: 95,
          attack: 65,
          hp: 55,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/117.png",
          type: "water",
          move: "headbutt"
        },
        {
          _id: "58b0436ed8e17e731dcb12dc",
          name: "rhyhorn",
          id: 111,
          defense: 95,
          attack: 85,
          hp: 80,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/111.png",
          type: "rock",
          move: "swords-dance"
        },
        {
          _id: "58b0436fd8e17e731dcb12dd",
          name: "rhydon",
          id: 112,
          defense: 120,
          attack: 130,
          hp: 105,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/112.png",
          type: "rock",
          move: "mega-punch"
        },
        {
          _id: "58b04370d8e17e731dcb12de",
          name: "hitmonchan",
          id: 107,
          defense: 79,
          attack: 105,
          hp: 50,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/107.png",
          type: "fighting",
          move: "comet-punch"
        },
        {
          _id: "58b04370d8e17e731dcb12df",
          name: "goldeen",
          id: 118,
          defense: 60,
          attack: 67,
          hp: 45,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/118.png",
          type: "water",
          move: "horn-attack"
        },
        {
          _id: "58b04371d8e17e731dcb12e0",
          name: "hypno",
          id: 97,
          defense: 70,
          attack: 73,
          hp: 85,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/97.png",
          type: "psychic",
          move: "pound"
        },
        {
          _id: "58b04372d8e17e731dcb12e1",
          name: "exeggcute",
          id: 102,
          defense: 80,
          attack: 40,
          hp: 60,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/102.png",
          type: "psychic",
          move: "swords-dance"
        },
        {
          _id: "58b04372d8e17e731dcb12e2",
          name: "seaking",
          id: 119,
          defense: 65,
          attack: 92,
          hp: 80,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/119.png",
          type: "water",
          move: "horn-attack"
        },
        {
          _id: "58b04373d8e17e731dcb12e3",
          name: "drowzee",
          id: 96,
          defense: 45,
          attack: 48,
          hp: 60,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/96.png",
          type: "psychic",
          move: "pound"
        },
        {
          _id: "58b04374d8e17e731dcb12e4",
          name: "marowak",
          id: 105,
          defense: 110,
          attack: 80,
          hp: 60,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/105.png",
          type: "ground",
          move: "mega-punch"
        },
        {
          _id: "58b04375d8e17e731dcb12e5",
          name: "haunter",
          id: 93,
          defense: 45,
          attack: 50,
          hp: 45,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/93.png",
          type: "poison",
          move: "fire-punch"
        },
        {
          _id: "58b04376d8e17e731dcb12e6",
          name: "staryu",
          id: 120,
          defense: 55,
          attack: 45,
          hp: 30,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/120.png",
          type: "water",
          move: "tackle"
        },
        {
          _id: "58b04376d8e17e731dcb12e7",
          name: "horsea",
          id: 116,
          defense: 70,
          attack: 40,
          hp: 30,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/116.png",
          type: "water",
          move: "razor-wind"
        },
        {
          _id: "58b04377d8e17e731dcb12e8",
          name: "kingler",
          id: 99,
          defense: 115,
          attack: 130,
          hp: 55,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/99.png",
          type: "water",
          move: "vice-grip"
        },
        {
          _id: "58b04378d8e17e731dcb12e9",
          name: "krabby",
          id: 98,
          defense: 90,
          attack: 105,
          hp: 30,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/98.png",
          type: "water",
          move: "vice-grip"
        },
        {
          _id: "58b043a3dba4ff734d5095e9",
          name: "scyther",
          id: 123,
          defense: 80,
          attack: 110,
          hp: 70,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/123.png",
          type: "flying",
          move: "razor-wind"
        },
        {
          _id: "58b043bba156a9736aab954c",
          name: "articuno",
          id: 144,
          defense: 100,
          attack: 85,
          hp: 90,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/144.png",
          type: "flying",
          move: "razor-wind"
        },
        {
          _id: "58b043bca156a9736aab954d",
          name: "pinsir",
          id: 127,
          defense: 100,
          attack: 125,
          hp: 65,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/127.png",
          type: "bug",
          move: "vice-grip"
        },
        {
          _id: "58b043bda156a9736aab954e",
          name: "starmie",
          id: 121,
          defense: 85,
          attack: 75,
          hp: 60,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/121.png",
          type: "psychic",
          move: "tackle"
        },
        {
          _id: "58b043bda156a9736aab954f",
          name: "omanyte",
          id: 138,
          defense: 100,
          attack: 40,
          hp: 35,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/138.png",
          type: "water",
          move: "bind"
        },
        {
          _id: "58b043bea156a9736aab9550",
          name: "jolteon",
          id: 135,
          defense: 60,
          attack: 65,
          hp: 65,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/135.png",
          type: "electric",
          move: "double-kick"
        },
        {
          _id: "58b043bfa156a9736aab9551",
          name: "dragonite",
          id: 149,
          defense: 95,
          attack: 134,
          hp: 91,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/149.png",
          type: "flying",
          move: "fire-punch"
        },
        {
          _id: "58b043c0a156a9736aab9552",
          name: "moltres",
          id: 146,
          defense: 90,
          attack: 100,
          hp: 90,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/146.png",
          type: "flying",
          move: "razor-wind"
        },
        {
          _id: "58b043c0a156a9736aab9553",
          name: "dragonair",
          id: 148,
          defense: 65,
          attack: 84,
          hp: 61,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/148.png",
          type: "dragon",
          move: "bind"
        },
        {
          _id: "58b043c1a156a9736aab9554",
          name: "lapras",
          id: 131,
          defense: 80,
          attack: 85,
          hp: 130,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/131.png",
          type: "ice",
          move: "headbutt"
        },
        {
          _id: "58b043c2a156a9736aab9555",
          name: "eevee",
          id: 133,
          defense: 50,
          attack: 55,
          hp: 55,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/133.png",
          type: "normal",
          move: "sand-attack"
        },
        {
          _id: "58b043c2a156a9736aab9556",
          name: "gyarados",
          id: 130,
          defense: 79,
          attack: 125,
          hp: 95,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/130.png",
          type: "flying",
          move: "headbutt"
        },
        {
          _id: "58b043c3a156a9736aab9557",
          name: "dratini",
          id: 147,
          defense: 45,
          attack: 64,
          hp: 41,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/147.png",
          type: "dragon",
          move: "bind"
        },
        {
          _id: "58b043c4a156a9736aab9558",
          name: "mr-mime",
          id: 122,
          defense: 65,
          attack: 45,
          hp: 40,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/122.png",
          type: "fairy",
          move: "double-slap"
        },
        {
          _id: "58b043c5a156a9736aab9559",
          name: "snorlax",
          id: 143,
          defense: 65,
          attack: 110,
          hp: 160,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/143.png",
          type: "normal",
          move: "mega-punch"
        },
        {
          _id: "58b043c5a156a9736aab955a",
          name: "vaporeon",
          id: 134,
          defense: 60,
          attack: 65,
          hp: 130,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/134.png",
          type: "water",
          move: "sand-attack"
        },
        {
          _id: "58b043c6a156a9736aab955b",
          name: "magmar",
          id: 126,
          defense: 57,
          attack: 95,
          hp: 65,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/126.png",
          type: "fire",
          move: "mega-punch"
        },
        {
          _id: "58b043c7a156a9736aab955c",
          name: "omastar",
          id: 139,
          defense: 125,
          attack: 60,
          hp: 70,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/139.png",
          type: "water",
          move: "bind"
        },
        {
          _id: "58b043c7a156a9736aab955d",
          name: "porygon",
          id: 137,
          defense: 70,
          attack: 60,
          hp: 65,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/137.png",
          type: "normal",
          move: "tackle"
        },
        {
          _id: "58b043c9a156a9736aab955e",
          name: "kabutops",
          id: 141,
          defense: 105,
          attack: 115,
          hp: 60,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/141.png",
          type: "water",
          move: "scratch"
        },
        {
          _id: "58b043caa156a9736aab955f",
          name: "flareon",
          id: 136,
          defense: 60,
          attack: 130,
          hp: 65,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/136.png",
          type: "fire",
          move: "sand-attack"
        },
        {
          _id: "58b043caa156a9736aab9560",
          name: "electabuzz",
          id: 125,
          defense: 57,
          attack: 83,
          hp: 65,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/125.png",
          type: "electric",
          move: "mega-punch"
        },
        {
          _id: "58b043cca156a9736aab9562",
          name: "tauros",
          id: 128,
          defense: 95,
          attack: 100,
          hp: 75,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/128.png",
          type: "normal",
          move: "stomp"
        },
        {
          _id: "58b043cca156a9736aab9563",
          name: "jynx",
          id: 124,
          defense: 35,
          attack: 50,
          hp: 65,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/124.png",
          type: "psychic",
          move: "pound"
        },
        {
          _id: "58b043cda156a9736aab9564",
          name: "magikarp",
          id: 129,
          defense: 55,
          attack: 10,
          hp: 20,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/129.png",
          type: "water",
          move: "tackle"
        },
        {
          _id: "58b043cda156a9736aab9565",
          name: "aerodactyl",
          id: 142,
          defense: 65,
          attack: 105,
          hp: 80,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/142.png",
          type: "flying",
          move: "razor-wind"
        },
        {
          _id: "58b043cfa156a9736aab9566",
          name: "mew",
          id: 151,
          defense: 100,
          attack: 100,
          hp: 100,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/151.png",
          type: "psychic",
          move: "pound"
        },
        {
          _id: "58b043d0a156a9736aab9567",
          name: "zapdos",
          id: 145,
          defense: 85,
          attack: 90,
          hp: 90,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/145.png",
          type: "flying",
          move: "razor-wind"
        },
        {
          _id: "58b043d0a156a9736aab9568",
          name: "ditto",
          id: 132,
          defense: 48,
          attack: 48,
          hp: 48,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
          type: "normal",
          move: "transform"
        },
        {
          _id: "58b043d0a156a9736aab9569",
          name: "kabuto",
          id: 140,
          defense: 90,
          attack: 80,
          hp: 30,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/140.png",
          type: "water",
          move: "scratch"
        },
        {
          _id: "58b043d1a156a9736aab956a",
          name: "mewtwo",
          id: 150,
          defense: 90,
          attack: 110,
          hp: 106,
          front_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
          back_picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/150.png",
          type: "psychic",
          move: "mega-punch"
        }
      ],
      selected15Pokemon: [],
      questions: [
      "Is he in the 1st row?",
      "Is he in the 2nd row?",
      "Is he in the 3rd row?",
      "Is he in the 1st column?",
      "Is he in the 2nd column?",
      "Is he in the 3rd column?",
      "Is he in the 4th column?",
      "Is he in the 5th column?"
      ],
      askedQuestions: [],
      questionAsked: undefined
    }
    this.componentDidMount = this.componentDidMount.bind(this),
    this.didSelectQuestion = this.didSelectQuestion.bind(this)
  }

  componentDidMount() {
    /////////// POPULATE RANDOM POKEMON ////////////////////
    var dataPokemon = []
    var randNumbers = []
    do {
      const num = Math.floor(Math.random() * (151));
      if (randNumbers.includes(num) === false) {
        randNumbers.push(num)
      }
    } while (randNumbers.length < 15);
    // console.log('randNumbers', randNumbers)
    for (const each of randNumbers) {
      dataPokemon.push(this.state.srcPokemon[each])
    }
    for (let i = 0; i < dataPokemon.length; i++) {
      dataPokemon[i].selected = false;
      dataPokemon[i].column = Math.floor(i % 5) + 1;
      dataPokemon[i].row = Math.floor(i / 5) + 1;
      dataPokemon[i].className = "poke_pic";
    }
    // console.log('selected15Pokemon', dataPokemon)
    const selectedNum = Math.floor(Math.random() * 15);
    // console.log('selectedNum', selectedNum)
    dataPokemon[selectedNum].selected = true
    // console.log('dataPokemon', dataPokemon[selectedNum])
    // console.log('selectedPokemon', this.state.selected15Pokemon)
    ///////////////// POPULATE QUESTIONS //////////////////////
    var questions = this.state.questions.slice()
    for (const each of dataPokemon) {
      let newQuestion = `Is he of ${each.type} type?`
      if (questions.includes(newQuestion) === false) {
        questions.push(newQuestion)
      }
    }
    ///////////////////////////////////////////////////////////
    this.setState({ selected15Pokemon: dataPokemon, questions: questions})
    // console.log('questions', questions)




    let row = 0
    let column = 0
    let type = ""
    let selectedPokemon = ''
    for (const each of this.state.selected15Pokemon) {
      if (each.selected === true) {
        selectedPokemon = each
      }
    }
    row = selectedPokemon.row
    console.log('row', row)
    column = selectedPokemon.column
    console.log('column', column)
    type = selectedPokemon.type
    console.log('type', type)
    if (this.state.askedQuestions.length > 0) {
      for (const each of this.state.askedQuestions) {
        if (each.includes('row') && each.includes('2')) {
          console.log('true')
          if (row == 2) {
            for (let i = 5; i < 10; i++) {
              this.setState({ selected15pokemon: selected15pokemon[i].className = 'true' })
            }
          }
          else {
            for (let i = 5; i < 10; i++) {
              this.setState({ selected15pokemon: selected15pokemon[i].className = 'false' })
            }
          }
        }
        console.log('false')
      }
    }
  }

  render() {
    return (
      <div>
        <h2>Guess which Pokemon!</h2>
        <Pokemons pokemons={this.state.selected15Pokemon} />
        <Questions 
        questions={this.state.questions}
        didSelectQuestion={this.didSelectQuestion}
        askedQuestions={this.state.askedQuestions}/>
      </div>
    )
  }

  didSelectQuestion(question) {

    this.setState( {questionAsked: question} )
    console.log('questionAsked', this.state.questionAsked)

    var askedQuestions = this.state.askedQuestions.slice()
    askedQuestions.push(question)
    this.setState({ askedQuestions: askedQuestions })

    var questions = this.state.questions.slice()
    if (this.state.questions.length > 0) {
      for (let i = 0; i < questions.length; i++) {
        if (this.state.questions[i] === question) {
          questions.splice(i, 1)
        }
      }
    }
    this.setState({ questions: questions })
  }

}

export default SrcPokemon