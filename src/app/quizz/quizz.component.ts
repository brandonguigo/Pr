import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Data} from "../models/Data";
import {Stats} from "../models/Stats";

@Component({
    selector : 'app-quizz',
    templateUrl: './quizz.component.html',
    styleUrls: [ './quizz.component.css' ]
})

export class QuizzComponent{
    private data: Data;
    private sub: any;
    private idQuest: number;
    private idJoueur: string | null;

    constructor(public router: Router, private route: ActivatedRoute) {
        this.data = JSON.parse(localStorage.getItem("data"));
        this.idJoueur = localStorage.getItem("idj");

        this.sub = this.route.params.subscribe(params => {
            this.idQuest = +params['idQuest'];
        });

        let find = false;
        for (let s of this.data.listeStats){
            if (s.id == this.idJoueur){
                find = true;
                if (this.idQuest == 0){
                    s.nbVictoires = 0;
                    s.nbJouee =0;
                }
            }
        }
        if (!find){
            this.data.listeStats[this.data.listeStats.length] = new Stats(this.idJoueur, 0, 0);
        }
    }

    public reponse(idBoutton : number){
        if (this.data.listeQuest[this.idQuest].noRep == idBoutton){
            for (let s of this.data.listeStats){
                if (s.id == this.idJoueur){
                        s.nbVictoires++;
                        s.nbJouee++;
                    }

                }

        }else{
            for (let s of this.data.listeStats) {
                if (s.id == this.idJoueur){
                            s.nbJouee++;
                    }
                }

            }

            if (this.idQuest == this.data.listeQuest.length-1){
                localStorage.setItem("data", JSON.stringify(this.data));
                this.router.navigate(['/score']);
            }else{
                localStorage.setItem("data", JSON.stringify(this.data));
                this.router.navigate(['/quizz', this.idQuest+1]);
            }
        }
    }
