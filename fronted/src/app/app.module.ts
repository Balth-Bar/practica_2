import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import{FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniComponent } from './componets/ini/ini.component';
import { NavComponent } from './componets/nav/nav.component';
import { InfoComponent } from './componets/info/info.component';
import { RegisterComponent } from './componets/register/register.component';
import { SearchComponent } from './componets/search/search.component';
import { HomeComponent } from './componets/home/home.component';
import { ContactComponent } from './componets/contact/contact.component';
import { from } from 'rxjs';
import { importType } from '@angular/compiler/src/output/output_ast';



@NgModule({
  declarations: [
    AppComponent,
    IniComponent,
    NavComponent,
    InfoComponent,
    RegisterComponent,
    SearchComponent,
    HomeComponent,
    ContactComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
