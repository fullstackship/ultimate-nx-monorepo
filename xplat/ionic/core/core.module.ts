import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { throwIfAlreadyLoaded } from '@nx-base/utils';
import { NxBaseCoreModule } from '@nx-base/web';

@NgModule({
  imports: [NxBaseCoreModule, IonicModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
})
export class NxBaseIonicCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: NxBaseIonicCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'NxBaseIonicCoreModule');
  }
}
