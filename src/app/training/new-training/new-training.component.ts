import { Exercise } from './../exercise.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrainigService } from '../training.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ViewFlags } from '@angular/compiler/src/core';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  value: any = 0
  exercises !: any
  subscription!: Subscription
  constructor(
    private firestore: AngularFirestore,
    private trainigService: TrainigService) { }

  ngOnInit(): void {
    this.trainigService.fetchAvailableExercises();
    this.subscription = this.trainigService.exercisesChanged.subscribe(exercises => {
      this.exercises = exercises
    })
  }

  onStartTraining(selectedId: number) {
    this.trainigService.startExercise(selectedId.toString())
  }

  getExercises() {
    this.firestore.collection('availableExercises').snapshotChanges().pipe(
      map(docArray => {
        return docArray.map(doc => {
          return {
            id: doc.payload.doc.id,
            ...doc.payload.doc.data() as Exercise
          };
        });
      })
    )
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe()

    }
  }

}
