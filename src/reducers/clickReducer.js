import { CLICK_CARD, CLICK_CLOSE } from '../actions/types'

const initialState = {
  clickedCard: 0,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case CLICK_CARD:
      return {
        clickedCard: action.payload
      };

    case CLICK_CLOSE:
      return {
        clickedCard: action.payload
      }

    default:
      return state
  }
}
