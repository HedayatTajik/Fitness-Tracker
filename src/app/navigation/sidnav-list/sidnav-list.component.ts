import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidnav-list',
  templateUrl: './sidnav-list.component.html',
  styleUrls: ['./sidnav-list.component.scss']
})
export class SidnavListComponent implements OnInit {
  @Output() sidnaveToggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.sidnaveToggle.emit()

  }

}
