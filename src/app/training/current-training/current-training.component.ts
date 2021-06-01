import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training/stop-training.component';




@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() trainingExit = new EventEmitter();
  progress = 0
  timer = 0
  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.startOrResumeTimer()

  }
  startOrResumeTimer() {
    this.timer = window.setInterval(() => {
      this.progress = this.progress + 5;
      if (this.progress >= 100) {
        clearInterval(this.timer)
      }
    }, 200)
  }
  onStop() {
    clearInterval(this.timer)

    const dialogConfig = new MatDialogConfig()
    dialogConfig.height = "25%"
    dialogConfig.width = "80%"
    dialogConfig.disableClose = true
    dialogConfig.data = { progress: this.progress }
    const dialogRef = this.matDialog.open(StopTrainingComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      if (res === true) {
        this.trainingExit.emit()
      }
      else {
        this.startOrResumeTimer()
      }
    })

  }



}
