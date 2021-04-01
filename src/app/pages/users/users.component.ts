import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpPayload, HttpService } from 'src/app/common/services/http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  users = [];
  totalPages = 0;

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.getUserList(1);
  }

  getUserList(currentPage: number): void {
    const req: HttpPayload = {
      url: 'users',
      method: 'get',
      pathVariables: [currentPage]
    };
    this.http.callApi(req).subscribe((res) => {
      console.log(res, 'reponsesesse');
      this.totalPages = res.total;
      this.users = res.data;
    });
  }

  gotoUserList(user: any, ind: number): void {
    this.router.navigate(['users', user.id]);
  }

  paginate(event: any): void {
    this.getUserList(event.page + 1);
}
}
