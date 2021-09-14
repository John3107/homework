type initStateType = typeof initState

type TextType = ReturnType<typeof themeAC>

const initState = ['darkgreen', 'dark', 'red', 'some', 'blue', 'white']

export const themeReducer = (state = initState, action: TextType): initStateType => {
    switch (action.type) {
        case 'THEME': {
            let stateCopy = [...state]
            let copy = stateCopy.filter(f => f !== action.theme)
            let newCopy = [action.theme, ...copy]
            return newCopy;
        }

        default:
            return state;
    }
};

export const themeAC = (theme: string) => ({type: 'THEME', theme} as const)