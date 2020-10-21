//Initial State

const initialState = {
    file: "",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "STORE_LOGO":
            return {
                ...state,
                file: action.file
            };
        case "REMOVE_LOGO":
            return {
                ...state,
                file: "",
            };
        default:
            return { ...state }
    }
}

export default reducer;