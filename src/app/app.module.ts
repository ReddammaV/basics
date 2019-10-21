import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { AttributeComponent } from './attribute/attribute.component';
import { InputParentComponent } from './input-parent/input-parent.component';
import { InputChildComponent } from './input-child/input-child.component';
import { PipesComponent } from './pipes/pipes.component';
import { PropertyComponent } from './property/property.component';
import { EventComponent } from './event/event.component';
import { CustompipesComponent } from './custompipes/custompipes.component';
import { WelcomeuppercasePipe } from './allpipes/welcomeuppercase.pipe';
import { WelcomePipe } from './allpipes/welcome.pipe';
import { ReversePipe } from './allpipes/reverse.pipe';
import { LimitwordPipe } from './allpipes/limitword.pipe';
import { BoldPipe } from './allpipes/bold.pipe';
import { GreetPipe } from './allpipes/greet.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent,
    NgstyleComponent,
    NgclassComponent,
    AttributeComponent,
    InputParentComponent,
    InputChildComponent,
    PipesComponent,
    PropertyComponent,
    EventComponent,
    CustompipesComponent,
    WelcomeuppercasePipe,
    WelcomePipe,
    ReversePipe,
    LimitwordPipe,
    BoldPipe,
    GreetPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
