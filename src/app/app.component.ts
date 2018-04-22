import { Component } from '@angular/core';
import {log} from "util";
import {Data} from "./models/Data";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
})
export class AppComponent {
    constructor(){
        //defini l'objet data dans le localstorage si il n'existe pas
        if (localStorage.getItem("data") === null){
            log("Data créé");
            localStorage.setItem("data", JSON.stringify(new Data()));
        }else{
            //log("RESET DATA");
            //localStorage.setItem("data", JSON.stringify(new Data()));
            //log(JSON.parse(localStorage.getItem("data")));
        }
    }

    getName() {
        return "Angular";
    }
}