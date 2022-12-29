import { Grid } from '@mui/material'
import React, { useState } from 'react'
import useStyle from './style'
import OrderList from '../OrderList'

const Dashboard = () => {
 const classes = useStyle()
 const [data, setData] = useState({})
  return (
    <Grid container>
      <Grid>
      <OrderList setData={setData} />
      </Grid>
    </Grid>
  )
}

export default Dashboard