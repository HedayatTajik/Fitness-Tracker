import { Exercise } from './../exercise.model';
import { Component, OnInit, } from '@angular/core';
import { TrainigService } from '../training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
  value: any = 0
  exercises: Exercise[] = []
  constructor(private trainigService: TrainigService) { }

  ngOnInit(): void {
    this.getExercises()
  }

  onStartTraining(selectedId: number) {
    this.trainigService.startExercise(selectedId.toString())
  }

  getExercises() {
    this.exercises = this.trainigService.getAvailableExercises()
  }

}
