import { Component, OnInit } from '@angular/core';
import { HttpPayload, HttpService } from '../../common/services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  users = [];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    const req: HttpPayload = {
      url: '/users?page=2',
      method: 'get'
    };
    this.http.callApi(req).subscribe((res) => {
      console.log(res, 'reponsesesse');
      this.users = res.data;
    });
  }

}
