import { createAction, props } from '@ngrx/store';

export const handleToggleLargeImages = createAction('[COVER] TOGGLE_IMAGE_SIZE', props<{ showLargeImages: boolean }>());
