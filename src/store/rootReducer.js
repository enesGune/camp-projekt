// tüm stateleri toplandığı yer olarak kullanılır busayede tek bvir nokatada birleşir ve uygulam aeklernire

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";


const rootReducer = combineReducers({
    cart: cartReducer,
})

//defaoult olaark çıkardık
export default rootReducer;