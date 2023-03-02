import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent {

  students:any;

  constructor (private anything:CommonService) {
    this.students = anything.students;
  }
}
