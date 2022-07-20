import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [ProductsComponent, LoaderComponent],
  imports: [CommonModule],
  exports: [ProductsComponent, LoaderComponent],
})
export class SharedModule {}
