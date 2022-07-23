import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loader = new BehaviorSubject<boolean>(false);
  public readonly loader$ = this.loader.asObservable();
  constructor() {}

  public toggleLoader(value: boolean): void {
    return this.loader.next(value);
  }
}
