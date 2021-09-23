type initStateType = {
    value: string
    text: string[]
}

type ThemeType = ReturnType<typeof textAC>

export const initState = {
    text: ['dark-text', 'red-text', 'some-text', 'cornflowerblue-text', 'dodgerblue-text'],
    value: 'dark-text'
}
export const textReducer = (state: initStateType = initState, action: ThemeType): initStateType => {
    switch (action.type) {

        case 'TEXT':
            return {
                ...state, value: action.text
            }
        default:
            return state;
    }
};

export const textAC = (text: string) => ({type: 'TEXT', text} as const)