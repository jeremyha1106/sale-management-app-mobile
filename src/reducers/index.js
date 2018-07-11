import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import productsReducer from '../container/ProductContainer/reducer';
import addProductReducer from '../container/AddProductContainer/reducer';
import categoryReducer from '../container/CategoryContainer/reducer';
import productForm from '../container/ProductFormContainer/reducer';
import Cart from '../container/CartContainer/reducer';
import Customer from '../container/CustomerContainer/reducer';

export default combineReducers({
  form: formReducer,
  product_list: productsReducer,
  add_product: addProductReducer,
  product_form: productForm,
  category: categoryReducer,
  cart: Cart,
  customer: Customer,
});
