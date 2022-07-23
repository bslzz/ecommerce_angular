import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductViewContentComponent } from './product-view-content/product-view-content.component';
import { ProductViewFilterComponent } from './product-view-filter/product-view-filter.component';
import { ProductViewLayoutComponent } from './product-view-layout/product-view-layout.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductViewContentComponent,
    ProductViewFilterComponent,
    ProductViewLayoutComponent,
    WishlistComponent,
  ],
  imports: [CommonModule, SharedModule, ProductRoutingModule, FormsModule],
})
export class ProductsModule {}
