import { combineReducers} from 'redux';

import {mainParametersReducer as mainParameters} from './main-parameters';
import {characterReducer as character} from './character'
import {statsReducer as stats} from './stats'

export const reducers = combineReducers({
    mainParameters,
    character,
    stats,
})