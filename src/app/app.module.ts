import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ProjectsComponent,
    HeroDetailComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

