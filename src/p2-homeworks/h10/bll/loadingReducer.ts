type loadingACType = {
    type: 'IS-LOADING'
    loading: boolean
}

export type InitStateType = {
    loading: boolean
}

const initState: InitStateType = {
    loading: false
}

export const loadingReducer = (state: InitStateType = initState, action: loadingACType): InitStateType => {
    switch (action.type) {
        case 'IS-LOADING': {
            return {
                ...state,
                loading: action.loading
            }
        }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean): loadingACType => {
    return {type: 'IS-LOADING', loading}
}