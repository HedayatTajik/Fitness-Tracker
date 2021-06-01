import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidnav-list',
  templateUrl: './sidnav-list.component.html',
  styleUrls: ['./sidnav-list.component.scss']
})
export class SidnavListComponent implements OnInit {
  @Output() sidnaveToggle = new EventEmitter<void>();
  isAuth = false

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  this.authService.authChange.subscribe(authChange => {
    this.isAuth = authChange
  })
  }

  onClose() {
    this.sidnaveToggle.emit()
  }
  
  onLogout(){
    this.authService.logout()
    this.sidnaveToggle.emit()
  }

}
