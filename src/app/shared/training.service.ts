import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Training } from './training.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  formData: Training;
  trainingItems: Training[];


  constructor(private http: HttpClient) { }

  saveOrUpdateData() {
    var body = {
      ...this.formData,
      trainingItems: this.trainingItems
    };
    return this.http.post(environment.apiURL + '/Training', body);
  }
  getTrainingList() {
    return this.http.get(environment.apiURL + '/Training').toPromise();
   }

   getTrainingByID(id: number): any {
    return this.http.get(environment.apiURL + '/Training/' + id).toPromise();
  }
}
