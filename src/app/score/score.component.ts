import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Data} from "../models/Data";
import {Stats} from "../models/Stats";

@Component({
    selector : 'app-score',
    templateUrl: './score.component.html',
    styleUrls: [ './score.component.css' ]
})
export class ScoreComponent {
    private data: Data;
    private idJoueur : string;
    private statJ : Stats;

    constructor(public router: Router, private route: ActivatedRoute) {
        this.data = JSON.parse(localStorage.getItem("data"));
        this.idJoueur = localStorage.getItem("idj");

        for (let s of this.data.listeStats){
            if (s.id == this.idJoueur){
                this.statJ = s;
            }
        }

        localStorage.removeItem("idj");
    }


}