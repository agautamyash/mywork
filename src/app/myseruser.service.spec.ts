import { TestBed, inject } from '@angular/core/testing';

import { MyseruserService } from './myseruser.service';

describe('MyseruserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyseruserService]
    });
  });

  it('should be created', inject([MyseruserService], (service: MyseruserService) => {
    expect(service).toBeTruthy();
  }));
});
