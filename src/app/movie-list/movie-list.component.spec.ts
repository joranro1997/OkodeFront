import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieListComponent } from './movie-list.component';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      declarations: [MovieListComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter movies based on search text', () => {
    component.movies = [
      { id: '1', title: 'Movie 1', release_date: '2022-01-01', original_language: 'en', overview: 'Overview 1' },
      { id: '2', title: 'Movie 2', release_date: '2022-02-01', original_language: 'fr', overview: 'Overview 2' },
      { id: '3', title: 'Movie 3', release_date: '2022-03-01', original_language: 'es', overview: 'Overview 3' }
    ];
    component.searchFilter = 'movie 2';
  });
});


