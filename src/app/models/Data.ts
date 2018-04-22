import {Questions} from "./Models";
import {Joueur} from "./Joueur";
import {Stats} from "./Stats";

export class Data{

    public listeQuest : Questions[] = [];
    public listeJoueur : Joueur[] = [];
    public listeStats : Stats[] = [];

    constructor(){
        this.listeQuest[0] = new Questions("Quel célèbre flic homme-robot a été adapté en comics par Frank Miller ?", "Terminator", "Robocop", "Bender", "Wall-E", 2);
        this.listeQuest[1] = new Questions("Question 2", "1", "OK", "3", "4", 2);
        this.listeQuest[2] = new Questions("Question 3", "1", "2", "OK", "4", 3);
        this.listeQuest[3] = new Questions("Question 4", "OK", "2", "3", "4", 1);
        this.listeQuest[4] = new Questions("Question 5", "1", "OK", "3", "4", 2);
        this.listeQuest[5] = new Questions("Question 6", "1", "2", "3", "OK", 4);
        this.listeQuest[6] = new Questions("Question 7", "1", "2", "OK", "4", 3);
        this.listeQuest[7] = new Questions("Question 8", "1", "2", "3", "OK", 4);
        this.listeQuest[8] = new Questions("Question 9", "OK", "2", "3", "4", 1);
        this.listeQuest[9] = new Questions("Question 10", "1", "OK", "3", "4", 2);

        this.listeJoueur[0] = new Joueur("admin", "admin", 20, "azer@ty.com", "admin");
    }
}
