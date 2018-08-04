import { Injectable } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

/**
 * to prevent the race condition where in order start, start, complete are called,
 * we prevent the loading bar from being changed beyond the first start and the last complete,
 * by keeping track of the number of starts and completes called
 **/

@Injectable()
export class GlobalLoaderFacade {
  private NUM_ACTIVE: number = 0;

  constructor(private globalLoader: SlimLoadingBarService) {}

  public start(): void {
    if (this.NUM_ACTIVE === 0) {
      this.globalLoader.start();
    }

    this.NUM_ACTIVE += 1;
  }

  public complete(): void {
    if (this.NUM_ACTIVE === 0) {
      return;
    }

    this.NUM_ACTIVE -= 1;

    if (this.NUM_ACTIVE === 0) {
      this.globalLoader.complete();
    }
  }
}