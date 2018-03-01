const INITIAL_STATE = { step: 1, number: 0}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'INC':
            return { ...state, number: state.number + state.step }
        case 'DEC':
            return { ...state, number: state.number - state.step }
        case 'STEP_CHANGED':
            return { ...state, step: +action.payload}//Se não tivesse este mais ele iria concatenar o texto e não somar.
        default:
            return state
    }
}