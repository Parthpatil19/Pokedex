package com.pokedex.pokedex.service;

import java.util.List;
import java.util.Map;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.pokedex.pokedex.dto.PokemonResponse;

@Service
public class PokemonService {

    private final RestTemplate restTemplate = new RestTemplate();
    private static final String BASE_URL =
            "https://pokeapi.co/api/v2/pokemon/";

    @Cacheable(value = "pokemon", key = "#name")
    public PokemonResponse getPokemon(String name) {

        Map data = restTemplate.getForObject(BASE_URL + name, Map.class);

        PokemonResponse p = new PokemonResponse();
        p.setName((String) data.get("name"));
        p.setId((Integer) data.get("id"));
        p.setHeight((Integer) data.get("height"));
        p.setWeight((Integer) data.get("weight"));

        Map sprites = (Map) data.get("sprites");
        p.setImageUrl((String) sprites.get("front_default"));

        return p;
    }

    public List<String> getRandomCards() {
        return List.of(
            "🔥 Fire Pokémon have high attack",
            "💧 Water Pokémon are defensive",
            "⚡ Electric Pokémon are fast",
            "🌿 Grass Pokémon recover health"
        );
    }
}
