import { combineReducers } from '@reduxjs/toolkit';
import reducer from './Redux/Reducer';
import productReducer from './ProdutRedux/ProductReducer';

const RootReducer = combineReducers({
   reducer,
   productReducer
})

export default RootReducer