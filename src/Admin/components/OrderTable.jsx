import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { confirmOrder, deleteOrder, deliveredOrder, getOrders, shipOrder } from '../../Redux/Admin/Orders/Action';
import { Avatar, AvatarGroup, Button, Card, CardHeader, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const OrderTable = () => {
  const dispatch = useDispatch();
  const { adminOrder } = useSelector(store => store);
  const [anchorEl, setAnchorEl] = React.useState([]);

  const handleClick = (event, index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorEl(newAnchorElArray);
  };

  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = null
    setAnchorEl(newAnchorElArray);
  };

  useEffect(() => {
    dispatch(getOrders())
  }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered,adminOrder.deletedOrder])

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };

  console.log("admin orders:", adminOrder)

  const handleShippedOrder = (orderId) => {
    dispatch(shipOrder(orderId))
    handleClose()
  }

  const handleConfirmedOrder = (orderId) => {
    dispatch(confirmOrder(orderId))
    handleClose()
  }

  const handleDeliveredOrder = (orderId) => {
    dispatch(deliveredOrder(orderId))
    handleClose()
  }

  return (
    <div className='pl-20 p-5 '>
      <Card className='mt-2'>
        <CardHeader title="All Orders"></CardHeader>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Total Price</TableCell>
                <TableCell align="left">Total Discounted Price</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Update</TableCell>
                <TableCell align="left">Delete</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder?.orders?.map((item, index) => (
                <TableRow
                  key={item.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
                      {item.orderItems.map((orderItem) =>
                        <Avatar src={orderItem.product.imageUrl}></Avatar>)}
                    </AvatarGroup>

                  </TableCell>
                  <TableCell align='left' scope='row'>
                    {item.orderItems.map((orderItem) =>
                      <p>{orderItem.product.title}</p>)}
                  </TableCell>
                  {/* <TableCell align="left">{item.quantity}</TableCell> */}
                  <TableCell align="center">{item.totalItem}</TableCell>
                  <TableCell align="left">{item.totalPrice}</TableCell>
                  <TableCell align="center">{item.totalDiscountedPrice}</TableCell>
                  <TableCell align="center"><span className={
                    `text-white px-5 py-2 rounded-full
                                  ${item.orderStatus === "CONFIRMED" ? "bg-[#369236]" :
                      item.orderStatus === "SHIPPED" ? "bg-[#4241ff]" :
                        item.orderStatus === "PLACED" ? "bg-[#02B290]" :
                          item.orderStatus === "PENDING" ? "bg-[grey]" : "bg-[#925720]"}`}>{item.orderStatus}</span></TableCell>
                  <TableCell align="left">
                    <Button

                      id="basic-button"
                      aria-haspopup="true"
                      onClick={(event)=>handleClick(event,index)}
                      aria-controls={`basic-menu-${item.id}`}
                      aria-expanded={Boolean(anchorEl[index])}>
                      Status
                    </Button>
                    <Menu
                      id={`basic-menu-${item.id}`}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={()=>handleClose(index)}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={() => handleConfirmedOrder(item.id)}>Confirmed Order</MenuItem>
                      <MenuItem onClick={() => handleShippedOrder(item.id)}>Shipped Order</MenuItem>
                      <MenuItem onClick={() => handleDeliveredOrder(item.id)}>Delivered Order</MenuItem>
                    </Menu></TableCell>
                  <TableCell align="left"><Button variant='outlined' onClick={() => handleDeleteOrder(item.id)}>Delete</Button></TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <section className='w-full px=[3.6rem'>
            <div className='px-4 py-5 flex justify-center'>
            <Pagination count={products.products?.totalPages} color="secondary" onChange={handlePaginationChange} />
            </div>
          </section> */}

      </Card>

    </div>
  )
}

export default OrderTable