import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderStopInterceptor implements HttpInterceptor {

  constructor(private _loaderSvc: LoaderService) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this._loaderSvc.stop();
          return event.clone();
        }
      })
    );
  }
}
