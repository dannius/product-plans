import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private _isLoading = new BehaviorSubject(false);

  constructor() { }

  public start() {
    this._isLoading.next(true);
  }

  public stop() {
    this._isLoading.next(false);
  }

  public get isLoading(): Observable<boolean> {
    return this._isLoading.asObservable();
  }

}
