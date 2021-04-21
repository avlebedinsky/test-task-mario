import {STATS} from '../../constants/constans';
import {statsActionTypes} from './actions';

const initialState = {
    items: STATS
};

export const statsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case statsActionTypes.SET_ALL_STATS: {
            return {
                ...state,
                items: action.payload.items
            };
        }
        case statsActionTypes.SET_STAT: {
            return {
                ...state,
                items: state.items.map(s => {
                    if (s.key === action.payload.key) {
                        s.value = action.payload.value;
                    }
                    return s;
                })
            };
        }
        case statsActionTypes.SET_HIT: {
           return {
               ...state,
               items: state.items.map(s => {
                if (s.key === action.payload.key) {
                    s.valueOf = action.payload.value;
                }
                return s;
            })
        };
        }
        default:
            return state;
    }
};