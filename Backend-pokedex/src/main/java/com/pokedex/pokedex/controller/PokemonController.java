package com.pokedex.pokedex.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pokedex.pokedex.dto.PokemonResponse;
import com.pokedex.pokedex.service.PokemonService;

@RestController
@RequestMapping("/api/pokemon")
@CrossOrigin(origins = "http://localhost:5173")
public class PokemonController {

    @Autowired
    private PokemonService service;

    @GetMapping("/{name}")
    public PokemonResponse getPokemon(@PathVariable String name) {
        return service.getPokemon(name.toLowerCase());
    }

    @GetMapping("/random")
    public List<String> randomCards() {
        return service.getRandomCards();
    }
}
