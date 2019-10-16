import { TrainingService } from './shared/training.service';
import { TrainingCreateComponent } from './trainings/trainingcreate.compoment';
import { Training } from './shared/training.model';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'training', component: TrainingCreateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
