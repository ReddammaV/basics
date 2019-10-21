import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { AttributeComponent } from './attribute/attribute.component';
import { InputParentComponent } from './input-parent/input-parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { PropertyComponent } from './property/property.component';
import { EventComponent } from './event/event.component';
import { CustompipesComponent } from './custompipes/custompipes.component';


const routes: Routes = [
  {path:'', component:NgifComponent},
  {path:'ngif', component:NgifComponent},
  {path:'ngfor', component:NgforComponent},
  {path:'ngswitch', component:NgswitchComponent},
  {path:'ngstyle', component:NgstyleComponent},
  {path:'ngclass', component:NgclassComponent},
  {path:'attribute', component:AttributeComponent},
  {path:'input', component:InputParentComponent},
  {path:'pipes', component:PipesComponent},
  {path:'property', component:PropertyComponent},
  {path:'event', component:EventComponent},
  {path:'custompipes', component:CustompipesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
