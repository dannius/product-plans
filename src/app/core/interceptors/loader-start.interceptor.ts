import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable } from "rxjs";

import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderStartInterceptor implements HttpInterceptor {

  constructor(private _loaderSvc: LoaderService) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this._loaderSvc.start();
    return next.handle(req);
  }
}
