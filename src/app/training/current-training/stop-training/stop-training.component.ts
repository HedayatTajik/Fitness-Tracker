import { Component, Inject, OnInit} from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface matDialog  {
  progress : number 
}

@Component({
  selector: 'app-stop-training',
  templateUrl: './stop-training.component.html',
  styleUrls: ['./stop-training.component.scss']
})
export class StopTrainingComponent implements OnInit {
  progress: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: matDialog) { }

  ngOnInit(): void {

    this.progress = this.data.progress
  }

}
