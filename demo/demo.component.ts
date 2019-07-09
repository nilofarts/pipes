import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  public name = 'VISHWAS';
 public message="welcome to pipe demo";
  public person = {
  'firstname': 'vishwas',
  'lastname': 'Raj'
  }
 public date=new Date();
  constructor() { }

  ngOnInit() {
  }

}
