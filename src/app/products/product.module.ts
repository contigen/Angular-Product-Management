import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: `products`,
        component: ProductListComponent,
      },
      {
        path: `products/:id`,
        component: ProductDetailComponent,
      },
    ]),
  ],
})
export class ProductModule {}
