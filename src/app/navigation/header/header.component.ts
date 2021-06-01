import { AuthService } from './../../auth/auth.service';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuth !: boolean;
  subscription: Subscription = new Subscription;
  @Output() sidnaveToggle = new EventEmitter<void>();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  this.subscription =   this.authService.authChange.subscribe(authchange => {
      this.isAuth = authchange
    }
    )
  }

  onToggleSidenav() {
    this.sidnaveToggle.emit()

  }
  
  onLogout(){
    this.authService.logout()
  }

  ngOnDestroy(){
    if(this.subscription)
    {
      this.subscription.unsubscribe()
    }
  }



}
