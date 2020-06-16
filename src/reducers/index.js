import { INCERMENT_SECONDS } from '../actions';

const InitializeState = {
  seconds: 0
};

export default function(state = InitializeState, action) {  
  switch(action.type) {
    case INCERMENT_SECONDS: 
      return { 
        ...state, 
        seconds: state.seconds + 1
      }
    default:
      return { ...state };
  }
}
