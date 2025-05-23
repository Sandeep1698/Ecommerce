import { api } from "../../../config/api";
import { CANCELED_ORDER_FAILURE, CANCELED_ORDER_REQUEST, CANCELED_ORDER_SUCCESS, CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS } from "./ActionType";

export const getOrders = (reqData) => {
  console.log("get all orders ", reqData);
  return async (dispatch) => {
    dispatch({type: GET_ORDERS_REQUEST});
    try {
     
      const response = await api.get(`/api/admin/orders/getAllOrders`);
      console.log("get all orders ", response.data);
      dispatch({type:GET_ORDERS_SUCCESS,payload:response.data});
    } catch (error) {
      console.log("catch error ", error);
      dispatch({type:GET_ORDERS_FAILURE,payload:error.message});
    }
  };
};

export const confirmOrder = (orderId) => async (dispatch) => {
  dispatch({type:CONFIRMED_ORDER_REQUEST});

  try {
    const response = await api.put(
      `/api/admin/orders/confirmOrder?orderId=${orderId}`
    );
    const data = response.data;
    console.log("confirm_order ",data)
    dispatch({
      type: CONFIRMED_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CONFIRMED_ORDER_FAILURE,
      payload: error.message,
    });
  }
};

export const shipOrder = (orderId) => {
  return async (dispatch) => {
    try {
      dispatch({type:SHIP_ORDER_REQUEST});
      const {data} = await api.put(`/api/admin/orders/shipOrder?orderId=${orderId}`);
      console.log(" shipped order",data)
      dispatch({type:SHIP_ORDER_SUCCESS,payload:data});
    } catch (error) {
      dispatch({type:SHIP_ORDER_FAILURE,payload:error.message});
    }
  };
};

export const deliveredOrder = (orderId) => async (dispatch) => {
  dispatch({type:DELIVERED_ORDER_REQUEST});
  try {
    const response = await api.put(
      `/api/admin/orders/deliverOrder?orderId=${orderId}`
    );
    const data = response.data;
    console.log("dilivered order ",data)
    dispatch({type:DELIVERED_ORDER_SUCCESS,payload:data});
  } catch (error) {
    dispatch({type:DELIVERED_ORDER_FAILURE,payload:error.message});
  }
};

export const cancelOrder = (orderId) => async (dispatch) => {
  dispatch({type:CANCELED_ORDER_REQUEST});

  try {
    const response = await api.put(
      `/api/admin/orders/cancelOrder?orderId=${orderId}`
    );
    const data = response.data;
    dispatch({type:CANCELED_ORDER_SUCCESS,payload:data});
  } catch (error) {
    dispatch({type:CANCELED_ORDER_FAILURE,payload:error.message});
  }
};

// Async action creator for deleting an order
export const deleteOrder = (orderId) => {
  return async(dispatch) => {
    dispatch({type:DELETE_ORDER_REQUEST});     
   try {
     const {data} = await api.delete(`/api/admin/orders/deleteOrder?orderId=${orderId}`);
     console.log("delete order ",data)
     dispatch({type:DELETE_ORDER_SUCCESS,payload:data});
   } catch (error) {
    console.log("catch error ",error)
     dispatch({type:DELETE_ORDER_FAILURE,payload:error.message});
   }
      
  };
};
