type initStateType = typeof initState

type ThemeType = ReturnType<typeof textAC>

export const initState = ['dark-text', 'red-text', 'some-text', 'cornflowerblue-text', 'dodgerblue-text']

export const textReducer = (state = initState, action: ThemeType): initStateType => {
    debugger
    switch (action.type) {

        case 'TEXT': {
            let stateCopy = [...state]
            let copy = stateCopy.filter(f => f === action.text)
            return copy;
        }
        default:
            return state;
    }
};

export const textAC = (text: string) => ({type: 'TEXT', text} as const)