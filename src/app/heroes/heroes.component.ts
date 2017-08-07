import { Component, OnInit } from '@angular/core';
import { Hero } from './../models/hero';
import { HeroService } from './../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    

    // inject services
    constructor(
        private heroService: HeroService
    ){}


    title: string = 'Tour of Heroes';
    hero: Hero = {
        id: 0,
        name: 'WindStorm'
    };
    heroes: Hero[];
    selectedHero: Hero;


    private onSelect(newHero: Hero):void {
        this.selectedHero = newHero;
    }


    private getHeroes():void {
        this.heroService.getHeroes().then( res => this.heroes = res);
    }

    ngOnInit() {
        this.getHeroes();
    }
    

    

}
