import { CLICK_CARD, CLICK_CLOSE } from './types';

export const clickCard = obj => ({
  type: CLICK_CARD,
  payload: obj
})

export const clickClose = obj => ({
  type: CLICK_CLOSE,
  payload: 0
})
