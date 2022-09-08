import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-http-client-get',
  templateUrl: './http-client-get.component.html',
  styleUrls: ['./http-client-get.component.scss'],
})
export class HttpClientGetComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((x) => {
      console.log(x);
    });
  }
}
