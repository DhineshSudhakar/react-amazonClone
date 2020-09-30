export const getBasketTotal = (basket) => (
    basket?.reduce((amount, item) => item.price + amount, 0)
)

export const initialState = {
    basket: [],
    user: null,
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            }
        case "ADD_TO_BASKET":
            // Logic for adding the item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            break;
        case "REMOVE_FROM_BASKET":
            // Login for removing item from basket
            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.id)
            }
            break;
        default:
            return state;

    }
}

export default reducer