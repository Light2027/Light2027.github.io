import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ProjectInfo } from 'src/app/models/project-info';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.sass']
})
export class ProjectInfoComponent implements OnInit {
  @Input() projectInfo:ProjectInfo = new ProjectInfo("","", "", [], []);
  @Input() carouselId:string = "";

  constructor() { 
  }

  ngOnInit(): void {
  }
}