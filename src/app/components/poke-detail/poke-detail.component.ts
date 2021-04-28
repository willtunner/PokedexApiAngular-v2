import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from './../../services/pokemon.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss'],
})
export class PokeDetailComponent implements OnInit {

  pokemon: any = '';
  pokemonType = [];
  pokemonImg = '';


  constructor(private pokemonService: PokemonService, private activatedRouter: ActivatedRoute) {
    // Pega o id que passa na url como params
    this.activatedRouter.params.subscribe(
      params => {
        this.getPokemon(params['id']);
      }
    )
  }

  public leadingZero(srt: string | number, size: number = 3): string {
    let s = String(srt);
    while (s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }

  ngOnInit(): void {}

  getPokemon(id:number) {
    this.pokemonService.getPokemons(id).subscribe(
      res => {
        console.log(res);
        this.pokemon = res;
        this.pokemonImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.leadingZero(this.pokemon.id)}.png`;
        this.pokemonType = res.types[0].type.name;
      },
      err => {

      }
    )
  }
}
