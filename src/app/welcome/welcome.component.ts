import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }
  myArra: number[] = [1, 3, 4, 5, 7, 6, 9, 10, 2, 8]
  ngOnInit(): void {

    var temp;
    for (let i = 0; i < this.myArra.length - 1; i++) {
      
      for (let j = 0; j < this.myArra.length - (1 + i); j++) {
        if(this.myArra[j] > this.myArra[j+1] ){
          temp = this.myArra[j+1] ;
        this.myArra[ j +1] = this.myArra[j]
        this.myArra[j] = temp
        }
      } 

    }

    console.log("myArray", this.myArra);



  }

}
