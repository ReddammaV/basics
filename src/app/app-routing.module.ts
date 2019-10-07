import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';

const routes: Routes = [
  {path:'', component:NgifComponent},
  {path:'ngif', component:NgifComponent},
  {path:'ngfor', component:NgforComponent},
  {path:'ngswitch', component:NgswitchComponent},
  {path:'ngstyle', component:NgstyleComponent},
  {path:'ngclass', component:NgclassComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
