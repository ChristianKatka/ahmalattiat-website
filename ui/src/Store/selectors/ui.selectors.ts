import { createSelector } from '@ngrx/store';
import { getUiState } from '../reducers';

export const isMobileScreen = createSelector(
  getUiState,
  (state) => state.isMobileScreen
);
