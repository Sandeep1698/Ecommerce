import { Box, CssBaseline, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People'; import DashboardIcon from '@mui/icons-material/Dashboard';
import ShopIcon from '@mui/icons-material/Shop';
import SellIcon from '@mui/icons-material/Sell';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateProductForm from './components/CreateProductForm';
import ProductTable from './components/ProductTable';
import OrderTable from './components/OrderTable';
import CustomerTable from './components/CustomerTable';
import AdminDashboard from './components/AdminDashboard';

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <ShopIcon /> },
  { name: "Customers", path: "/admin/customers", icon: <PeopleIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <SellIcon /> },
  { name: "Add Products", path: "/admin/product/create", icon: <AddBoxIcon /> },
]
const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box sx={{
      overflow: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%"
    }}>
      {/* {isLargeScreen && <Toolbar></Toolbar>} */}
      <List>
        {menu.map((item, index) => <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
          <ListItemButton>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText>{item.name}</ListItemText>
          </ListItemButton>
        </ListItem>)}
      </List>

      <List>
        <ListItem disablePadding >
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText >Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>

    </Box>
  )

  return (
    // <div className='relative'>
      <div className='relative flex h-[100vh]'>
        <CssBaseline />
        <div className=' w-[20%] border border-r-gray-300 h-full fixed top-0'>
          {drawer}
        </div>
        <div className='w-[80%] h-full ml-[15%]'>
          <Routes>
            <Route path='/' element={<AdminDashboard />}></Route>
            <Route path='/product/create' element={<CreateProductForm/>} />
            <Route path='/products' element={<ProductTable />} />
            <Route path='/orders' element={<OrderTable />} />
            <Route path='/customers' element={<CustomerTable />} />
          </Routes>
        </div>
      {/* </div> */}
    </div>
  )
}

export default Admin