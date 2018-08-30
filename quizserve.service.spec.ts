import { TestBed, inject } from '@angular/core/testing';

import { QuizserveService } from './quizserve.service';

describe('QuizserveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizserveService]
    });
  });

  it('should be created', inject([QuizserveService], (service: QuizserveService) => {
    expect(service).toBeTruthy();
  }));
});
