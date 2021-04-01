import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetaisComponent } from './user-detais.component';

describe('UserDetaisComponent', () => {
  let component: UserDetaisComponent;
  let fixture: ComponentFixture<UserDetaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
