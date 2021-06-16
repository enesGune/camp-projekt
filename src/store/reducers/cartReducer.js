import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

// aşağıtaki sayfanı defalt değeridir 
const initialState = {
    cartItems: cartItems
}

// sabit değerimiz ve ackyonumuz gönderdik 
// switch hangi type gelirse ben neyapatım demek
export default function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_CART:
            // suanki statete bulunan cart ıtemslara bak ve pot id si payload eşit olan id ye at
            let post = state.cartItems.find(c => c.post.id === payload.id)
            // eğer o post varsa bir attrı ve güncelle dedik yoksa yeni bir item oluştur dedik
            if (post) {
                post.quantity++;
                return {
                    ...state
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { quantity: 1, post: payload }]
                };
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(c => c.post.id === payload.id)
            };


        default:
            return state;
    }
}