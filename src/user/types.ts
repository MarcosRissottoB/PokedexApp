import { Pokemon } from '@/pokemon/types'

export interface User {
  id: string;
  name: string;
  points: number;
  pokemonList: Pokemon[];
}
