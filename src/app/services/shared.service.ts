import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private eventEmitter$: Subject<any> = new Subject<any>();

  emitEvent(data: any) {
    this.eventEmitter$.next(data);
  }

  getEventEmitter() {
    return this.eventEmitter$.asObservable();
  }
}
