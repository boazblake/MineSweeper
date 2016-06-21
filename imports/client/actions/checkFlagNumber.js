import Store from '../store/store';
import flagActions from '../constants/actionTypes';

export default function checkFlag(num){
  Store.dispatch({
    type: flagActions.UPDATE,
    data: num || 0
  });
}