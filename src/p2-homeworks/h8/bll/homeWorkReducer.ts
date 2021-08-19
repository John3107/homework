import {UserType} from "../HW8";
//import {initialState} from "./tests/homeWorkReducer.test";

type SortUpActionCreatorType = {
    type: 'SORT-UP'
}

type SortDownActionCreatorType = {
    type: 'SORT-DOWN'

}

type CheckEighteenPlusActionCreatorType = {
    type: 'CHECK-EIGHTEEN-PLUS'
}

type ActionsType = SortUpActionCreatorType
    | SortDownActionCreatorType
    | CheckEighteenPlusActionCreatorType;

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => {
    switch (action.type) {
        case 'SORT-UP':
            let newUpState = [...state]
            return newUpState.sort(function (a, b) {
                if (a.name < b.name)
                    return -1;
                else if (a.name > b.name)
                    return 1;
                return 0;
            })
        case 'SORT-DOWN':
            let newDownState = [...state]
            return newDownState.sort(function (a, b) {
                if (a.name < b.name)
                    return 1;
                else if (a.name > b.name)
                    return -1;
                return 0;
            })
        case 'CHECK-EIGHTEEN-PLUS': {
            return state.filter(f => f.age > 18)
        }
        default:
            return state
    }
}

export const SortUpAC = (): SortUpActionCreatorType => {
    return {type: 'SORT-UP'} as const
}

export const SortDownAC = (): SortDownActionCreatorType => {
    return {type: 'SORT-DOWN'} as const
}

export const CheckEighteenPlusAC = (): CheckEighteenPlusActionCreatorType => {
    return {type: 'CHECK-EIGHTEEN-PLUS'} as const
}
