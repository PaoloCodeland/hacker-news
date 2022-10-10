const initialState = {
    isDarkMode: false,
    favourites: [],
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_DARK_MODE':
            return { ...state, isDarkMode: !state.isDarkMode };
        case 'ADD_FAVORITE':
            return {
                ...state,
                favourites: [...state.favourites, action.payload],
            };
        case 'REMOVE_FAVORITE':
            return {
                ...state,
                favourites: state.favourites.filter(
                    fav => fav.id !== action.payload.id
                ),
            };
        default:
            return state;
    }
}

function createStore(reducer) {
    let currentState = reducer(undefined, {});

    return {
        getState: () => currentState,
        dispatch: action => {
            currentState = reducer(currentState, action);
        },
    };
}

const store = createStore(appReducer);
export default store;
