import { ACTION_CONSTANTS } from '../config';
import { APP } from '../config';

const { ADD_TODO, DELETE_TODO, TOGGLE_TODO, DELETE_TODO_LIST } = ACTION_CONSTANTS;
const storageList = window.localStorage.getItem(APP.BROWSER_STORAGE_KEY);
const initialState = storageList ? JSON.parse(storageList) : [];

export function Reducer(state = initialState, action) {
  const actions = {
    [ADD_TODO]: (state, action) => {
      return [action.payload, ...state];
    },
    [DELETE_TODO]: (state, action) => {
      return [...state].splice(action.payload, 1);
    },
    [TOGGLE_TODO]: (state, action) => {
      let updatedList = [...state];
      updatedList[action.payload.index]['done'] = action.payload.checked;
      if (action.payload.checked) {
        const checked = updatedList[action.payload.index];
        updatedList.splice(action.payload.index, 1);
        updatedList = [...updatedList, checked];
      } else {
        const unchecked = updatedList[action.payload.index];
        updatedList.splice(action.payload.index, 1);
        updatedList = [unchecked, ...updatedList];
      }
      return updatedList;
    },
    [DELETE_TODO_LIST]: (state, action) => {
      return [];
    },
  };

  return actions[action.type] ? actions[action.type](state, action) : state;
}
