import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';

@NgModule({
  imports: [StoreModule.forRoot(reducers), StoreDevtoolsModule.instrument()],
})
export class StateModule {}
