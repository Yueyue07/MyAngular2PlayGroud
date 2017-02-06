import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';
import { Hero } from './hero';

@Injectable()

export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    } // stub

    getHeroesNoPromise(): Hero[] {
        return HEROES;
    }
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()),2000);
        });
    }
}