import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterComicsPage } from './character-comics.page';

describe('CharacterComicsPage', () => {
  let component: CharacterComicsPage;
  let fixture: ComponentFixture<CharacterComicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterComicsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterComicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
