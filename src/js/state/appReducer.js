let state = {
    isDarkMode: false,
};

/**
 * User Reducer
 *
 * @param {Object} action - And object with type (string) and payload (any)
 * @returns {Object} - returns the state object
 * @example
 * const res = userReducer();
 * const res = userReducer('TOGGLE_DARK_MODE');
 */
export default function userReducer(action = { type: 'NONE', payload: '' }) {
    switch (action.type) {
        case 'TOGGLE_DARK_MODE':
            state = { ...state, isDarkMode: !state.isDarkMode };
            return state;
        default:
            return state;
    }
}
