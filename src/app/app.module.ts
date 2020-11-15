import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourselistComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Erro404Component } from './erro404/erro404.component';
import { CourseInfoComponent } from './courses/course-info.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    CourselistComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Erro404Component,
    CourseInfoComponent,
    FooterComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
