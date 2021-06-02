import { Exercise } from './../exercise.model';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TrainigService } from '../training.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-passt-trainings',
  templateUrl: './passt-trainings.component.html',
  styleUrls: ['./passt-trainings.component.scss']
})
export class PasstTrainingsComponent implements OnInit, AfterViewInit {
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state']
  dataSource = new MatTableDataSource<Exercise>();
  @ViewChild(MatSort) sort !: MatSort
  @ViewChild(MatPaginator) paginator !: MatPaginator;


  constructor(private trainigService: TrainigService) { }

  ngOnInit(): void {
    this.trainigService.fetchCompletedOrCancelledExercises()
    this.trainigService.finishedExercisesChanged.subscribe(
      exercises => {
        this.dataSource.data = exercises
      }
    )
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(event: any) {
    const value = event.target.value
    this.dataSource.filter = value.trim().toLowerCase()
  }

}
