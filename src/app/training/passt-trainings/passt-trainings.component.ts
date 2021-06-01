import { Exercise } from './../exercise.model';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TrainigService } from '../training.service';

@Component({
  selector: 'app-passt-trainings',
  templateUrl: './passt-trainings.component.html',
  styleUrls: ['./passt-trainings.component.scss']
})
export class PasstTrainingsComponent implements OnInit {
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state']
  dataSource = new MatTableDataSource<Exercise>();


  constructor(private trainigService: TrainigService) { }

  ngOnInit(): void {
    this.dataSource.data = this.trainigService.getCompletedOrCancelledExercises()
  }

}
