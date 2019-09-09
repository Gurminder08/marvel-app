import { TestBed } from '@angular/core/testing';

import { CharacterComicsService } from './character-comics.service';

describe('CharacterComicsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharacterComicsService = TestBed.get(CharacterComicsService);
    expect(service).toBeTruthy();
  });
});
