import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ICategory } from 'src/app/models/category.model';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let productService: ProductService;
  let httpTestingController: HttpTestingController;

  let Products = [
    {
      id: 1,
      name: 'ram',
      descriptions: 'this is the description of the product',
      price: 100,
      availableSince: '2020-01-01',
      isActive: true,
      categoryId: 1,
      productImages: [
        {
          id: 1,
          base64Image: 'base64Image',
          mime: 'mime',
          imageName: 'imageName',
          productId: 1,
          isActive: true,
        },
      ],
    },
  ];

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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    });
    productService = TestBed.inject(ProductService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(productService).toBeTruthy();
  });

  describe('getAllProducts()', () => {
    it('should return all products when getAllProducts() is called', (done: DoneFn) => {
      productService.getAllProducts().subscribe((data: any[]) => {
        expect(data).toEqual(Products);
        done();
      });

      const req = httpTestingController.expectOne(
        'https://lsc-essential-products.azurewebsites.net/api/product/all'
      );
      req.flush(Products);
      expect(req.request.method).toEqual('GET');
    });
  });

  describe('getAllCategories()', () => {
    it('should return all categories when getAllCategories() is called', (done: DoneFn) => {
      productService.getAllCategories().subscribe((data: ICategory[]) => {
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
