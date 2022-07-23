import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ICategory } from '../models/category.model';

import { CategoryService } from './category.service';

let Categories = [
  {
    id: 1,
    name: 'ram',
    isActive: true,
  },
  {
    id: 2,
    name: 'shyam',
    isActive: false,
  },
];

describe('CategoryService', () => {
  let categoryService: CategoryService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoryService],
    });
    categoryService = TestBed.inject(CategoryService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(categoryService).toBeTruthy();
  });

  describe('getAllCategories()', () => {
    it('should return all categories when getAllCategories() is called', (done: DoneFn) => {
      categoryService.getAllCategories().subscribe((data: ICategory[]) => {
        expect(data).toEqual(Categories);
        done();
      });

      const req = httpTestingController.expectOne(
        'https://lsc-essential-products.azurewebsites.net/api/category/all'
      );
      req.flush(Categories);
      expect(req.request.method).toEqual('GET');
    });
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
