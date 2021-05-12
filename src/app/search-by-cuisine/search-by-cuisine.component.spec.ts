import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByCuisineComponent } from './search-by-cuisine.component';

describe('SearchByCuisineComponent', () => {
  let component: SearchByCuisineComponent;
  let fixture: ComponentFixture<SearchByCuisineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByCuisineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByCuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
