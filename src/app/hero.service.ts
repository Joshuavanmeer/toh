import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './models/hero';

@Injectable()
export class HeroService {
    
    heroes: Hero[];
    
    getHeroes (): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }


}