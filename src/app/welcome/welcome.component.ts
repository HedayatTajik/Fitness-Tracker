import { Observable } from 'rxjs';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FakeJsonService } from './fake-json.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, AfterViewInit {
  Users: any
  dataSource: any
  displayedColumns: string[] = ['id', 'userId', 'title', 'completed'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private fakeJsonService: FakeJsonService) { }

  ngOnInit(): void {

    this.fakeJsonService.getAll().subscribe(users => {
      this.dataSource = new MatTableDataSource<any>(users);
    })


  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
