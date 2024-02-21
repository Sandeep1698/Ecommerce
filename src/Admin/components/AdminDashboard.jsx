import { Grid } from '@mui/material'
import React from 'react'
import Achivement from './Achivement'
import MonthlyOverView from './MonthlyOverView'

const AdminDashboard = () => {
  return (
    <div className='pl-20 p-10'>
      <Grid container spacing={2} >
        <Grid item xs={12} md={4}>
            <Achivement/>
        </Grid>
        <Grid item xs={12} md={8}>
            <MonthlyOverView />
        </Grid>
        <Grid item xs={12} md={6}>
              
        </Grid>
      </Grid>
    </div>
  )
}

export default AdminDashboard