import { Component, OnInit } from '@angular/core';
import { Student } from './model/demo'
@Component({
  selector: 'app-demo-pure-impure',
  templateUrl: './demo-pure-impure.component.html',
  styleUrls: ['./demo-pure-impure.component.css']
})
export class DemoPureImpureComponent implements OnInit {

  
  students: Student[] = [
    { name: 'Vijay', isPassed: true },
    { name: 'Santosh', isPassed: false },
    { name: 'Prashant', isPassed: true },
    { name: 'Sachin', isPassed: false },
    { name: 'Mahadev', isPassed: true },
    { name: 'Mahendra', isPassed: false },
  ];

  toggleStudentPass = true;

  constructor() { }

  ngOnInit() {
  }

  changeSelection(student: Student) {
    student.isPassed = !student.isPassed;
  }

  handleMakeAllStudentPass() {

    if (this.toggleStudentPass) {
      this.students.forEach(student => {
        if (!student.isPassed) {
          student.isPassed = true;
        }
      });
    } else {
      this.students.forEach((student, index) => {
        if (index % 2 === 0) {
          student.isPassed = false;
        }
      });
    }

    this.toggleStudentPass = !this.toggleStudentPass;
  }

  handleAddStudent(name: string) {
    //this.students.push({ name: name, isPassed: true });
    this.students = [{ name: name, isPassed: true }]
  }


}
