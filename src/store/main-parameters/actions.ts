export const  mainParametersActionTypes = {
    SET_VALUE: 'MAIN_PARAMETERS.SET_VALUE',
    SET_SKILL_LEVEL: 'MAIN_PARAMETERS.SET_SKILL_LEVEL',
    SET_MAIN_PARAMETERS: 'MAIN_PARAMETERS.SET_MAIN_PARAMETERS',
}

export const mainParametersAction = {
    setMainParameters: (payload: any) => ({type: mainParametersActionTypes.SET_MAIN_PARAMETERS, payload}),
    setValue: (payload: any) => ({type: mainParametersActionTypes.SET_VALUE, payload}),
    setSkillLevel: (payload: any) => ({type: mainParametersActionTypes.SET_SKILL_LEVEL, payload})
}
