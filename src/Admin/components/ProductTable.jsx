import { Avatar, Button, Card, CardHeader, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { findProducts } from '../../Redux/Customers/Product/Action';
import { deleteProduct } from '../../Redux/Admin/Product/Action';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductTable = () => {
    const dispatch = useDispatch();
    const {products} = useSelector(store=>store);
    const {adminProduct} = useSelector(store=>store);
    const navigate = useNavigate();
    const location = useLocation();
    

    console.log("products-:",products)

    const handleProductDelete=(productId)=>{
        dispatch(deleteProduct(productId))
    }

    const handleProductUpdate=(productId)=>{
        dispatch(deleteProduct(productId))
    }
    const searchParams = new URLSearchParams(location.search);
    const pageNumber = searchParams.get("pageNumber");
    useEffect(()=>{
        const data={
            category:"",
            colors: [],
            sizes: [],
            minPrice:0,
            maxPrice:10000000,
            minDiscount:0,
            sort: "price_low",
            pageNumber: pageNumber || 0,
            pageSize: 8,
            stock: "",
          }
          dispatch(findProducts(data))
    },[adminProduct.deletedProduct,products.findProducts,pageNumber])

    
    const handlePaginationChange = (event,value) => {
        searchParams.set("pageNumber", value-1);
        const query = searchParams.toString();
        console.log(query)
        navigate({ search: `?${query}` });
      };

    return (
        <div className='pl-20 p-5 '>
            <Card className='mt-2'>
                <CardHeader title="All Produts"></CardHeader> 
                <TableContainer  component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell align="left">Title</TableCell>
                            <TableCell align="left">Brand</TableCell>
                            <TableCell align="left">Category</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left">Quantity</TableCell>
                            <TableCell align="left">Update</TableCell>
                            <TableCell align="left">Delete</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.products?.content?.map((item) => (
                            <TableRow
                                key={item.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">
                                    <Avatar src={item.imageUrl}></Avatar>
                                </TableCell>

                                <TableCell align="left">
                                    {item.title}
                                </TableCell>
                                <TableCell align="left">{item.brand}</TableCell>
                                <TableCell align="left">{item.category.name}</TableCell>
                                <TableCell align="left">{item.price}</TableCell>
                                <TableCell align="left">{item.quantity}</TableCell>
                                <TableCell align="left"><Button variant='outlined' >Update</Button></TableCell>
                                <TableCell align="left"><Button variant='outlined' onClick={()=>handleProductDelete(item.id)}>Delete</Button></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <section className='w-full px=[3.6rem'>
            <div className='px-4 py-5 flex justify-center'>
            <Pagination count={products.products?.totalPages} color="secondary" onChange={handlePaginationChange} />
            </div>
          </section>

            </Card>
                    
        </div>
    )
}

export default ProductTable