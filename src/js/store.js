export const initialState = {
    isDarkMode: true,
    favourites: [],
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_DARK_MODE': {
            state = {
                ...state,
                isDarkMode: !state.isDarkMode,
            };
            localStorage.setItem('pdhn-data', JSON.stringify(state));
            return state;
        }
        case 'ADD_FAVORITE': {
            state = {
                ...state,
                favourites: [...state.favourites, action.payload],
            };
            localStorage.setItem('pdhn-data', JSON.stringify(state));
            return state;
        }
        case 'REMOVE_FAVORITE':
            state = {
                ...state,
                favourites: state.favourites.filter(
                    fav => fav.id !== action.payload.id
                ),
            };
            localStorage.setItem('pdhn-data', JSON.stringify(state));
            return state;
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
