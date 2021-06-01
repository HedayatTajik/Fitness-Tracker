import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Exercise } from './exercise.model';


@Injectable()
export class TrainigService {

    exerciseChanged = new Subject<Exercise>();

    constructor(private http: HttpClient) { }

    availableExercise: Exercise[] = [
        { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
        { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
        { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
        { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
    ]

    private runningExercise !: Exercise

    getAvailableExercises(): Exercise[] {
        return this.availableExercise.slice()
    }

    startExercise(selectedId: string) {
        const runningExercise: any = this.availableExercise.find(ex => ex.id === selectedId)
        this.runningExercise = runningExercise;
        this.exerciseChanged.next({ ...this.runningExercise })
    }

    getRunningExercise() {
        return { ...this.runningExercise }
    }
}