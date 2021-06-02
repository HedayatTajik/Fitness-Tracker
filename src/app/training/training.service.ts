
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Exercise } from './exercise.model';


@Injectable()
export class TrainigService {

    exerciseChanged = new Subject<Exercise>();
    exercisesChanged = new Subject<Exercise[]>();
    finishedExercisesChanged = new Subject<Exercise[]>();
    private runningExercise !: Exercise;
    availableExercise: Exercise[] = []

    constructor(private firestore: AngularFirestore,
    ) { }

    // availableExercise: Exercise[] = [
    //     { id: 'crunches', name: 'Crunches', duration: 5, calories: 8 },
    //     { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    //     { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    //     { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
    // ]


    fetchAvailableExercises() {
        this.firestore.collection('availableExercises').snapshotChanges().pipe(
            map(docArray => {
                return docArray.map(doc => {
                    return {
                        id: doc.payload.doc.id,
                        ...doc.payload.doc.data() as Exercise
                    };
                });
            })
        ).subscribe(exercises => {
            this.availableExercise = exercises
            this.exercisesChanged.next([...this.availableExercise])
        })


    }

    startExercise(selectedId: string) {
        const runningExercise: any = this.availableExercise.find(ex => ex.id === selectedId)
        this.runningExercise = runningExercise;
        this.exerciseChanged.next({ ...this.runningExercise })
    }

    completeExercise() {
        this.addDatatoDatabase({ ...this.runningExercise, date: new Date(), state: 'completed' })
        this.runningExercise = null as any;
        this.exerciseChanged.next(null as any)

    }
    cancleExercise(progress: number) {
        this.addDatatoDatabase(
            {
                ...this.runningExercise,
                date: new Date(),
                state: 'cancelled',
                duration: this.runningExercise.duration * (progress / 100),
                calories: this.runningExercise.duration * (progress / 100),
            });
        this.runningExercise = null as any;
        this.exerciseChanged.next(null as any)

    }

    getRunningExercise() {
        return { ...this.runningExercise }
    }

    fetchCompletedOrCancelledExercises() {
        this.firestore.collection('finishedExercises').
            valueChanges().
            subscribe((exercises: any[]) => {
                this.finishedExercisesChanged.next(exercises)
                console.log("time", exercises);
            })
    }

    private addDatatoDatabase(exercise: Exercise) {
        this.firestore.collection('finishedExercises').add(exercise)

    }

}