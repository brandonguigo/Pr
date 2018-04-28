import { Component } from '@angular/core';
import {Produit} from "../../models/Models";

@Component({
    selector : 'app-admin',
    templateUrl: './admin-mod.component.html',
    styleUrls: [ './admin-mod.component.css' ]
})
export class AdminModComponent {
    produits : Produit[];
    private nomMod: string;
    private ind = -1;
    private j = 0;

    constructor(){
        this.produits = JSON.parse(localStorage.getItem("listeProd"));
    }
    
    affInfProd(){
        this.nomMod = (<HTMLInputElement>document.getElementById('nomMod')).value;
        for (let p of this.produits){
            if (p.nom == this.nomMod){
                this.ind = this.j;
                console.log(this.ind);
            }
            this.j++;
        }
        document.body.innerHTML += "<div id='infoProd'><form>" +
            "<input type='text' id='nomProd' value='"+this.produits[this.ind].nom+"'>" +
            "<input type='text' id='descrCProd' value='"+this.produits[this.ind].descriptionCourte+"'>" +
            "<input type='text' id='descrLProd' value='"+this.produits[this.ind].descriptionLongue+"'>" +
            "<input type='text' id='prixProd' value='"+this.produits[this.ind].prix+"'></form>" +
            "<button onclick='alert(\"Modification effectuée avec succès\")'>Modifier le produit</button>" +
            "</div>";
    }

    modProd(){
        this.produits[this.ind].nom = (<HTMLInputElement>document.getElementById('nomProd')).value;
        this.produits[this.ind].descriptionCourte = (<HTMLInputElement>document.getElementById('descrCProd')).value;
        this.produits[this.ind].descriptionLongue = (<HTMLInputElement>document.getElementById('descrLProd')).value;
        this.produits[this.ind].prix = parseFloat((<HTMLInputElement>document.getElementById('prixProd')).value);

        alert("Modification effectuée avec succès");
    }
}