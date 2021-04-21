import {characterActionType} from './actions';
import {CHARACTER} from '../../constants/constans';

export const characterReducer = ( state = CHARACTER, action: any ) => {
   switch (action.type) {
      case characterActionType.SET_NAME: {
         return {...state, name: action.payload};
      }
      default:
         return state;
   }
}