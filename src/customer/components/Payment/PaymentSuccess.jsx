import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { updatePayment } from '../../../Redux/Customers/Payment/Action';
import { getOrderById } from '../../../Redux/Customers/Order/Action';
import { Alert, AlertTitle, Grid } from '@mui/material';
import OrderTracker from '../Order/OrderTracker';
import AdressCard from '../AddressCard/AdressCard';

const PaymentSuccess = () => {

    const [paymentId, setPaymentId] = useState();
    const [referenceId, setReferenceId] = useState();
    const [paymentStatus, setPaymentStatus] = useState();
    const { orderId } = useParams();
    const dispatch = useDispatch();
    const { order } = useSelector(store => store);

    console.log("order", order.order)

    useEffect(() => {
        const urlParam = new URLSearchParams(window.location.search);
        setPaymentId(urlParam.get("razorpay_payment_id"));
        setPaymentStatus(urlParam.get("razorpay_payment_link_status"))
    }, [])

    useEffect(() => {
        if (paymentId) {
            const data = { orderId, paymentId }
            dispatch(getOrderById(orderId))
            dispatch(updatePayment(data))
        }
    }, [orderId, paymentId])

    return (
        <div className="px-2 lg:px-36">
            <div className="flex flex-col justify-center items-center">
                <Alert
                    variant="filled"
                    severity="success"
                    sx={{ mb: 6, width: "fit-content" }}
                >
                    <AlertTitle>Payment Success</AlertTitle>
                    Congratulation Your Order Get Placed
                </Alert>
            </div>

            <OrderTracker activeStep={1} />

            <Grid container className="space-y-5 py-5 pt-20">
                {order.order?.orderItems.map((item) => (
                    <Grid
                        container
                        item
                        className="shadow-xl rounded-md p-5 border"
                        sx={{ alignItems: "center", justifyContent: "space-between" }}
                    >
                        <Grid item xs={6}>
                            {" "}
                            <div className="flex  items-center ">
                                <img
                                    className="w-[5rem] h-[5rem] object-cover object-top"
                                    src={item?.product.imageUrl}
                                    alt=""
                                />
                                <div className="ml-5 space-y-2">
                                    <p className="">{item.product.title}</p>
                                    <p className="opacity-50 text-xs font-semibold space-x-5">
                                        <span>Color: {item.color}</span> <span>Size: {item.size}</span>
                                    </p>
                                    <p>Seller: {item.product.brand}</p>
                                    <p>₹{item.price}</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item>
                            <AdressCard address={order.order?.shippingAddress} />
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default PaymentSuccess