import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentAreaComponent } from './contentArea/app.contentAreaComponent';
import { footerComponent } from './footer/app.footerComponent';
import { aboutComponent } from './about/app.aboutComponent';
import { contactComponent } from './contact/app.contactComponent';


@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    navComponent,
    contentAreaComponent,
    footerComponent,
    aboutComponent,
    contactComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'about',
        component: aboutComponent
      },
      {
        path: 'contact',
        component: contactComponent
      },
      {
        path: '',
        component: contentAreaComponent
      }


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
