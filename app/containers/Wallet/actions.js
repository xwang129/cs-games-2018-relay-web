import { LOAD_WALLETS } from './constants';
//I think that there are much more actions available to add here, but I really cannot find them
//Maybe we should develop actions by ourselves? like create new one? or show the status of an account?
export function loadWallets() {
  return {
    type: LOAD_WALLETS,
  };
}
