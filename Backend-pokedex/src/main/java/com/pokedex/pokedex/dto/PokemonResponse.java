package com.pokedex.pokedex.dto;

public class PokemonResponse {

    private String name;
    private int id;
    private int height;
    private int weight;
    private String imageUrl;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getHeight() {
		return height;
	}
	public void setHeight(int height) {
		this.height = height;
	}
	public int getWeight() {
		return weight;
	}
	public void setWeight(int weight) {
		this.weight = weight;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public PokemonResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	public PokemonResponse(String name, int id, int height, int weight, String imageUrl) {
		super();
		this.name = name;
		this.id = id;
		this.height = height;
		this.weight = weight;
		this.imageUrl = imageUrl;
	}
	@Override
	public String toString() {
		return "PokemonResponse [name=" + name + ", id=" + id + ", height=" + height + ", weight=" + weight
				+ ", imageUrl=" + imageUrl + "]";
	}

    
}
