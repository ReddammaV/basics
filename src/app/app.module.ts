import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
import { OutputParentComponent } from './output-parent/output-parent.component';
import { OutputChildComponent } from './output-child/output-child.component';
import { TemplateformsComponent } from './templateforms/templateforms.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { ContentParentComponent } from './contentchild/content-parent/content-parent.component';
import { ContentChildComponent } from './contentchild/content-child/content-child.component';
import { ContentComponent } from './contentchild/content/content.component';
import { ViewParentComponent } from './viewchild/view-parent/view-parent.component';
import { ViewChildComponent } from './viewchild/view-child/view-child.component';
import { ViewReferenceComponent } from './viewchild/view-reference/view-reference.component';
import { ViewchildrenParentComponent } from './view-children/viewchildren-parent/viewchildren-parent.component';
import { ViewchildrenChildComponent } from './view-children/viewchildren-child/viewchildren-child.component';
import { ChangecolorDirective } from './directives/changecolor.directive';
import { MydirectiveComponent } from './directives/mydirective/mydirective.component';
import { ContentchildParentComponent } from './contentchild2/contentchild-parent/contentchild-parent.component';
import { ContentchildChildComponent } from './contentchild2/contentchild-child/contentchild-child.component';
import { Contentchild2Component } from './contentchild2/contentchild2/contentchild2.component';
import { ContentMainComponent } from './content-children/content-main/content-main.component';
import { ContentchildrenParentComponent } from './content-children/contentchildren-parent/contentchildren-parent.component';
import { ContentchildrenChildComponent } from './content-children/contentchildren-child/contentchildren-child.component';
import { ContentDirectiveComponent } from './directives/content-directive/content-directive.component';
import { DirectiveContentComponent } from './directives/directive-content/directive-content.component';
import { StructuraldirectiveDirective } from './directives/structuraldirective.directive';
import { StructuraldirectiveComponent } from './directives/structuraldirective/structuraldirective.component';

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
    OutputParentComponent,
    OutputChildComponent,
    TemplateformsComponent,
    ReactiveformsComponent,
    ContentParentComponent,
    ContentChildComponent,
    ContentComponent,
    ViewParentComponent,
    ViewChildComponent,
    ViewReferenceComponent,
    ViewchildrenParentComponent,
    ViewchildrenChildComponent,
    ChangecolorDirective,
    MydirectiveComponent,
    ContentchildParentComponent,
    ContentchildChildComponent,
    Contentchild2Component,
    ContentMainComponent,
    ContentchildrenParentComponent,
    ContentchildrenChildComponent,
    ContentDirectiveComponent,
    DirectiveContentComponent,
    StructuraldirectiveDirective,
    StructuraldirectiveComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
