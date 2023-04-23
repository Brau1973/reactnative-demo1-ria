import { ScrollView } from "react-native";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";
import Stats from "../components/Pokemon/Stats";

export default function Pokemon() {
  const types = [
    {
      slot: 1,
      type: {
        name: "electric",
        url: "https://pokeapi.co/api/v2/type/13/",
      },
    },
  ];

  const stats = [
    {
      base_stat: 35,
      effort: 0,
      stat: {
        name: "hp",
        url: "https://pokeapi.co/api/v2/stat/1/",
      },
    },
    {
      base_stat: 55,
      effort: 0,
      stat: {
        name: "attack",
        url: "https://pokeapi.co/api/v2/stat/2/",
      },
    },
    {
      base_stat: 40,
      effort: 0,
      stat: {
        name: "defense",
        url: "https://pokeapi.co/api/v2/stat/3/",
      },
    },
    {
      base_stat: 50,
      effort: 0,
      stat: {
        name: "special-attack",
        url: "https://pokeapi.co/api/v2/stat/4/",
      },
    },
    {
      base_stat: 50,
      effort: 0,
      stat: {
        name: "special-defense",
        url: "https://pokeapi.co/api/v2/stat/5/",
      },
    },
    {
      base_stat: 90,
      effort: 2,
      stat: {
        name: "speed",
        url: "https://pokeapi.co/api/v2/stat/6/",
      },
    },
  ];

  return (
    <ScrollView>
      <Header
        name={"Pikachu"}
        order={1}
        image={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        }
        type={"electric"}
      />
      <Type types={types} />
      <Stats stats={stats} />
    </ScrollView>
  );
}
