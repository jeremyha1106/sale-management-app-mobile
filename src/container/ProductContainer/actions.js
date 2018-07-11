import axios from 'axios';
import _ from 'lodash';
import { AsyncStorage } from 'react-native';

import URL from '../../../constants/serverUrl';

export const fetchListProducts = () => async dispatch => {
  try {
    let token = await AsyncStorage.getItem('userToken');
    let data = await axios.get(`${URL}/api/products`, {
      headers: { 'x-auth': token }
    });

    if (!data.data) {
      dispatch({ type: 'FETCH_PRODUCT_FAILED' })
    } else {
      dispatch({ type: 'FETCH_PRODUCT_SUCCESS', payload: data.data })
    }
  } catch (error) {
    dispatch({ type: 'FETCH_PRODUCT_FAILED' })
  }
}

export const fetchListCategories = () => async dispatch => {
  try {
    let token = await AsyncStorage.getItem('userToken');
    let data = await axios.get(`${URL}/api/categories`, {
      headers: { 'x-auth': token }
    });

    if (!data.data) {
      dispatch({ type: 'FETCH_CATEGORY_FAILED' })
    } else {
      dispatch({ type: 'FETCH_CATEGORY_SUCCESS', payload: data.data })
    }
  } catch (error) {
    dispatch({ type: 'FETCH_CATEGORY_FAILED' })
  }
}

export const addProductToOrderingList = (item, list) => dispatch => {
  let index = _.findIndex(list, p => p._id === item._id);
  let data = {
    _id: item._id,
    quantity: 1,
    name: item.name,
    sell_price: item.sell_price[0].value,
  };
  index > -1 ? dispatch({ type: 'UPDATE_ORDER_QUANTITY_PLUS', payload: index }) 
    : dispatch({ type: 'ADD_NEW_ORDERLIST_SUCCESS', payload: data });
    dispatch({ type: 'UPDATE_TOTAL_ORDER_AMOUNT' });
    dispatch({ type: 'MONEY_CHANGE_CHANGED' })
}
