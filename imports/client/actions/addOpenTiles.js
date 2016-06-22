import Store from '../store/store';

import { openTiles } from '../constants/actionTypes';

export default function addTile() {
  Store.dispatch({
    type: openTiles.UPDATE
  })
};