import {mainParametersActionTypes} from './actions';
import {MAIN_PARAMETERS} from '../../constants/constans';

const initialState = {
    parameters:MAIN_PARAMETERS
}

export const mainParametersReducer = (  state = initialState, action: any ) => {
    const newParameters = ({id, value}: any) => {
        const maxLevel = state.parameters[id.mainIdx].value;

        if (value < 5 && maxLevel >= value) {
            state.parameters[id.mainIdx].skills[id.idx].level = value
        }

        return state.parameters;
    }

    switch (action.type) {
        case mainParametersActionTypes.SET_MAIN_PARAMETERS: {
            return {...state, parameters: action.payload.parameters};
        }
        case mainParametersActionTypes.SET_VALUE: {
            return {...state, parameters: state.parameters.map(p => p.shortName === action.payload.shortName ? action.payload : p)};
        }
        case mainParametersActionTypes.SET_SKILL_LEVEL: {
            return {...state, parameters: newParameters(action.payload)};
        }
        default:
            return state;
    }
}