import { useState, useEffect } from "react";
import type { Pokemon } from "../types/Pokemon";

export function usePokemon() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemon() {
      setLoading(true);
      const response = await fetch("/pokemon.json");
      const data = await response.json();
      setPokemon(data);
      setLoading(false);
    }

    fetchPokemon();
  }, []);

  return { pokemon, loading };
}
