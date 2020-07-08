import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders,
} from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoaderStartInterceptor } from './interceptors/loader-start.interceptor';
import { LoaderStopInterceptor } from './interceptors/loader-stop.interceptor';

@NgModule({
  imports: [ HttpClientModule ],
  exports: [ BrowserAnimationsModule, HttpClientModule ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderStartInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderStopInterceptor, multi: true },
  ]
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
    };
  }
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only',
      );
    }
  }
}
