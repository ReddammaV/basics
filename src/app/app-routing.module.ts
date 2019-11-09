import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { AttributeComponent } from './attribute/attribute.component';
import { InputParentComponent } from './input-parent/input-parent.component';
import { OutputParentComponent } from './output-parent/output-parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { PropertyComponent } from './property/property.component';
import { EventComponent } from './event/event.component';
import { CustompipesComponent } from './custompipes/custompipes.component';
import { TemplateformsComponent } from './templateforms/templateforms.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { ContentComponent } from './contentchild/content/content.component';
import { ViewParentComponent } from './viewchild/view-parent/view-parent.component';
import { ViewReferenceComponent } from './viewchild/view-reference/view-reference.component';
import { ViewchildrenParentComponent } from './view-children/viewchildren-parent/viewchildren-parent.component';
import { MydirectiveComponent } from './directives/mydirective/mydirective.component';
// import { ContentchildParentComponent } from './contentchild2/contentchild-parent/contentchild-parent.component';
import { Contentchild2Component } from './contentchild2/contentchild2/contentchild2.component';
import { ContentMainComponent } from './content-children/content-main/content-main.component';
import { ContentDirectiveComponent } from './directives/content-directive/content-directive.component';

const routes: Routes = [
  { path: '', component: NgifComponent },
  { path: 'ngif', component: NgifComponent },
  { path: 'ngfor', component: NgforComponent },
  { path: 'ngswitch', component: NgswitchComponent },
  { path: 'ngstyle', component: NgstyleComponent },
  { path: 'ngclass', component: NgclassComponent },
  { path: 'attribute', component: AttributeComponent },
  { path: 'input', component: InputParentComponent },
  { path: 'output', component: OutputParentComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'property', component: PropertyComponent },
  { path: 'event', component: EventComponent },
  { path: 'custompipes', component: CustompipesComponent },
  { path: 'templatedriven', component: TemplateformsComponent },
  { path: 'reactive', component: ReactiveformsComponent },
  { path: 'contentchild', component: ContentComponent },
  { path: 'viewchild', component: ViewParentComponent },
  { path: 'viewchildref', component: ViewReferenceComponent },
  { path: 'viewchildren', component: ViewchildrenParentComponent },
  { path: 'colorchange', component: MydirectiveComponent },
  { path: 'contentchild2', component: Contentchild2Component },
  { path: 'contentchildren', component: ContentMainComponent },
  { path: 'contentdirective', component: ContentDirectiveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
