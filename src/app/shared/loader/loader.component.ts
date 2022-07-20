import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  public loader$!: Observable<boolean>;
  constructor(private productService: ProductService) {
    this.loader$ = this.productService.loader$;
  }

  ngOnInit(): void {}
}
