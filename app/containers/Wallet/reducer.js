import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

import {
  LOAD_WALLETS
} from './constants';
import isLoadingReducer from '../../asyncDisplayer/containers/IsLoading/reducer';
import hasErrorReducer from '../../asyncDisplayer/containers/HasError/reducer';
import { SUCCESS } from '../../asyncDisplayer/containers/constants';



export const WALLETS_REDUCER_INITIAL_STATE = fromJS({
  wallets: []
});

function walletReducer(state = WALLETS_REDUCER_INITIAL_STATE, action) {
  switch (action.type) {
    case `${LOAD_WALLETS}${SUCCESS}`:
      return state
      .set('wallets', fromJS(action.entity));
    //Cause there exists a switch statement, I think we need to add more cases(actions)
    //and the actions may be the same with what we add to the Wallet/actions.js file
      
      
    default:
      return state;
  }
}

const options = {
  action: LOAD_WALLETS,
};

export default combineReducers({
  entity: walletReducer,
  isLoading: isLoadingReducer(options),
  hasError: hasErrorReducer(options),
});
