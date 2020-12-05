import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs";


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countryservice: any;

 constructor() { }

  CountryArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();

  ngOnInit() {

    this.countryservice.getStudentList().subscribe(data =>{
    this.CountryArray = data;
    this.dtTrigger.next();
    })
  }

}
