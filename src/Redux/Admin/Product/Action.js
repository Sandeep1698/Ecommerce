import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
} from "./ActionType";
import { api } from "../../../config/api";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS_REQUEST });

    const { data } = await api.get(`/api/admin/products/`);

    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PRODUCT_REQUEST });
    console.log("data: ",product)
    const { data } = await api.post(`/api/admin/products/createProduct`,product );
    console.log("created product:",data)
    dispatch({
      type: CREATE_PRODUCT_SUCCESS,
      payload: data,
    });

    console.log("created product ", data);
  } catch (error) {
    dispatch({
      type: CREATE_PRODUCT_FAILURE,
      payload: error.message,
    });
  }
};

export const updateProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PRODUCT_REQUEST });

    const { data } = await api.put(
      `/api/admin/products/updateProduct/${product.productId}`,
      product
    );

    dispatch({
      type: UPDATE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });

    const {data}=await api.delete(`/api/admin/products/deleteProduct?productId=${productId}`);
    console.log("Delete product:",data)
    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: productId,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAILURE,
      payload:error.message,
    });
  }
};
