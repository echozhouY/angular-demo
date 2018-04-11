import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes} from '@angular/router';
import { LoginModule, DemoMaterialModule } from './login/login.module';
import { AuthService } from './core/auth.service';
import { routing } from './app.routes';
import { TodoComponent } from './todo/todo.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { HeroService} from './heroes/hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessageService } from './message.service';
import { MessageComponent } from './message/message.component';
import { NavbarComponent } from './navbar/navbar.component';
// const appRoutes:Routes = [
//   {path: '', redirectTo: 'home', pathMatch: 'full'},
//   {path: 'home', component: HomeComponent},
//   {path: 'about', component: AboutComponent},
//   {path: 'login', component: LoginComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TodoComponent,
    TodoFooterComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    MessageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    LoginModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    routing
  ],
  providers: [{
    provide: 'auth', useClass: AuthService
  }, {
    provide: 'hero', useClass: HeroService
  }, {
    provide: 'message', useClass: MessageService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
