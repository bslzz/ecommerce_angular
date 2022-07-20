import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoaderComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // describe('showLoader', () => {
  //   it('should show loader', () => {
  //     component.loader$.next(true);
  //     fixture.detectChanges();
  //     const loader = fixture.nativeElement.querySelector('.spinner-border');
  //     console.log('loader', loader);

  //     expect(loader).toBeTruthy();

  //     component.loader$.next(false);
  //     fixture.detectChanges();
  //     const hideLoader = fixture.nativeElement.querySelector('.spinner-border');
  //     console.log('loader2', hideLoader);
  //     expect(hideLoader).toBeFalsy();
  //   });
  // });
});
