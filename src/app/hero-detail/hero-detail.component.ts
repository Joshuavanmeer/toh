﻿import { Component, Input } from '@angular/core';
import { Hero } from './../models/hero';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent {
    
    @Input() selectedHero: Hero;

}