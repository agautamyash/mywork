import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyseruserComponent } from './myseruser.component';

describe('MyseruserComponent', () => {
  let component: MyseruserComponent;
  let fixture: ComponentFixture<MyseruserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyseruserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyseruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
