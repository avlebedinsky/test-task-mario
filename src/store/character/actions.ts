export const characterActionType = {
    SET_NAME: 'CHARACTER.SET_NAME'
}

export const characterAction = {
    setName: (payload: string) => ({type: characterActionType.SET_NAME, payload})
}
