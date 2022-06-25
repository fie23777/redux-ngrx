import { createAction, props } from '@ngrx/store';

export const crear = createAction('[Todo] Criar', props<{texto: string}>());
