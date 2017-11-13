

const reducer = (state = {}, {type, payload = null}) => {
    switch (type) {
        case 'persist/REHYDRATE':
            return persistStore(state, payload);
        default:
            return state
    }
};

function persistStore(state, payload) {
    state = Object.assign({}, state,payload);
    return state;
}

export default reducer