import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {enableProdMode} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { TrainingCreateComponent } from './trainings/trainingcreate.compoment';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

import { TrainingService } from './shared/training.service';

@NgModule({
  declarations: [
    AppComponent,
    TrainingCreateComponent
  ],
  imports: [
    BrowserModule,
    DatePickerModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  entryComponents: [TrainingCreateComponent],
  providers: [TrainingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
