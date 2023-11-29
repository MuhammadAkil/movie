import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseMoviesComponent } from './browse-movies.component';

describe('BrowseMoviesComponent', () => {
  let component: BrowseMoviesComponent;
  let fixture: ComponentFixture<BrowseMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowseMoviesComponent]
    });
    fixture = TestBed.createComponent(BrowseMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
