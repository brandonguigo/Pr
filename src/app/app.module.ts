import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {routing} from "./routing.module";
import {HomeComponent} from "./home/home.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoginComponent} from "./login/login.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {ContactComponent} from "./contact/contact.component";
import {QuizzComponent} from "./quizz/quizz.component";
import {ScoreComponent} from "./score/score.component";
import {AdminRoutingModule} from "./admin/admin.routing.module";
import {AdminComponent} from "./admin/admin.component";
import {AdminModules} from "./admin/admin.modules";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        BrowserAnimationsModule,
        AdminRoutingModule,
        AdminModules
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        ContactComponent,
        NotfoundComponent,
        QuizzComponent,
        ScoreComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}