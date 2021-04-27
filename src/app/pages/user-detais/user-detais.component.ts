import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpPayload, HttpService } from 'src/app/common/services/http.service';

@Component({
  selector: 'app-user-detais',
  templateUrl: './user-detais.component.html',
  styleUrls: ['./user-detais.component.sass']
})
export class UserDetaisComponent implements OnInit {
  userDetails: any = {};
  userId = '';
  isPrime = true;

  constructor(private http: HttpService, private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.aRoute.params.subscribe((pathParam) => {
      this.userId = pathParam.userId;
      this.getUserDetails();
    });
  }

  getUserDetails(): void {
    const req: HttpPayload = {
      url: 'userDetails',
      method: 'get',
      pathVariables: [this.userId]
    };
    this.http.callApi(req).subscribe((res) => {
      console.log(res, 'reponsesesse');
      this.userDetails = res.data;
    });
  }

  checkUserHasPrimeId(num: number): void {
    for (let iter = 2; iter < (num / 2); iter++) {
      if (num % iter === 0) {
        this.isPrime = false;
        break;
      }
    }
  }

}
