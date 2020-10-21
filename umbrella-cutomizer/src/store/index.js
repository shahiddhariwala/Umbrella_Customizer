//Initial State

const initialState = {
    file: "",
    selectedUmbrella: "pink",
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
        case "SELECT_UMBRELLA":
            return {
                ...state,
                selectedUmbrella: action.umbrella,
            };
        default:
            return { ...state }
    }
}

export default reducer;