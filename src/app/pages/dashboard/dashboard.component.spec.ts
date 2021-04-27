import 'zone.js/dist/zone-testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpService } from 'src/app/common/services/http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DashboardComponent } from './dashboard.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let httpMock: any;
  let httpService: HttpService;


  beforeEach(async () => {
    httpMock = jasmine.createSpyObj('HttpService', ['callApi']);
    httpMock.callApi.and.returnValue(of({
      data: []
    }));

    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ {provide: HttpService, useValue: httpMock} ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpService = fixture.debugElement.injector.get(HttpService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test API', () => {
    const req = {
      url: 'users',
      method: 'get'
    };
    component.getDashboardUsers();
    expect(httpService.callApi).toHaveBeenCalledWith(req);
    expect(component.users.length).toEqual(0);
  });

});
