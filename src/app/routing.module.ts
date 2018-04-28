import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {ContactComponent} from "./contact/contact.component";
import {QuizzComponent} from "./quizz/quizz.component";
import {ScoreComponent} from "./score/score.component";
import {AdminComponent} from "./admin/admin.component";

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent},
    { path: 'notfound', component : NotfoundComponent},
    { path: 'quizz/:idQuest', component: QuizzComponent},
    { path: 'score', component: ScoreComponent},
    { path: '**', redirectTo: '/notfound' },
];


export const routing = RouterModule.forRoot(routes,{
    enableTracing: true
});