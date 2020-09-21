import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@nx-base/ionic';

@NgModule({
  imports: [UIModule],
  exports: [UIModule],
})
export class SharedModule {}
