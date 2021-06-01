import { TrainigService } from './training.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit, OnDestroy {
  onGoingTraining = false;
  exerciseSubscription !: Subscription
  constructor(private trainigService:TrainigService) { }

  ngOnInit(): void {
this.exerciseSubscription = this.trainigService.exerciseChanged.subscribe(exercise =>
  {
    if(exercise){
this.onGoingTraining = true;
    }else{
      this.onGoingTraining = false;
    }
  })

  }


  ngOnDestroy() {

  }
}
