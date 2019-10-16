import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Training } from 'src/app/shared/training.model';
import { TrainingService } from 'src/app/shared/training.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-training',
  templateUrl: './trainingcreate.component.html',
  template: `<ejs-datepicker [value]='dateValue' placeholder='Enter date'></ejs-datepicker>`,
  styles: []
})

export class TrainingCreateComponent implements OnInit {
  formData: FormData;
  validateForm: any;
  isValidDate: any;
  model: Training;
  error: any;

 public dateValue: Date = new Date();
  // constructor() {
  // }
  constructor(private service: TrainingService,
    private router: Router,
    private toastr: ToastrService,
    private currentRoute: ActivatedRoute,
    private datePipe: DatePipe) { }

  ngOnInit() {
    const Id = this.currentRoute.snapshot.paramMap.get('ID');
    if (Id == null) {
        this.resetForm();
    } else {
      this.service.getTrainingByID(parseInt(Id)).then(res => {
        this.service.formData = res.training;
      });
    }

  }
  resetForm(form?: NgForm) {
    if (form = null) {
      form.resetForm();
    }
    this.service.formData = {
      ID: 1,
      Name: '',
      StartDate: null,
      EndDate: null
    };
  }

  transformDate(date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  onSubmit(form: NgForm) {
    this.model.StartDate =(this.datePipe.transform(this.model.StartDate, 'dd-MM-yyyy'));
    this.model.EndDate = this.datePipe.transform(this.model.EndDate, 'dd-MM-yyyy');

    this.isValidDate = this.validateDates(this.model.StartDate, this.model.EndDate);
    if(this.isValidDate){
      this.service.saveOrUpdateData().subscribe(res => {
        this.resetForm();
        this.toastr.success('Submitted Successfully', 'Training.');
        this.router.navigate(['/trainings']);
      });
    }
  }

  validateDates(sDate: string, eDate: string){
    this.isValidDate = true;
    if((sDate == null || eDate ==null)){
      this.error={isError:true,errorMessage:'Start date and end date are required.'};
      this.isValidDate = false;
    }

    if((sDate != null && eDate !=null) && (eDate) < (sDate)){
      this.error={isError:true,errorMessage:'End date should be grater then start date.'};
      this.isValidDate = false;
    }
    return this.isValidDate;
  }
}
