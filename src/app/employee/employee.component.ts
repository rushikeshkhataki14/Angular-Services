import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  students:any;
  constructor(private common:CommonService) {
    this.students = common.students;
  }

}
