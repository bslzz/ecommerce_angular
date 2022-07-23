import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  let ProductsMockData = [
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

  const productServicesStub = jasmine.createSpyObj({
    getAllProducts: of(ProductsMockData),
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      providers: [{ provide: ProductService, useValue: productServicesStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // describe('getAllProducts()', () => {
  //   it('should get all products from the backend', () => {
  //     component.getAllProducts();
  //     expect(component.products).toEqual(ProductsMockData);
  //   });
  // });
});
