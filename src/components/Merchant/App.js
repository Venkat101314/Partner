import "./App.css";
import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Suspense } from "react";
import { Rings, RotatingLines } from "react-loader-spinner";

const Login = React.lazy(()=>import("./components/Login"))
const Home = React.lazy(()=>import("./components/Merchant/Home"))
const ProductUpload = React.lazy(()=>import("./components/Merchant/ProductUpload"))
const RateSet = React.lazy(()=>import("./components/Merchant/RateSetting"))
const Selected = React.lazy(()=>import("./components/Merchant/SelectedGrozo"))
const Reports = React.lazy(()=>import("./components/Merchant/ItemActive"))
const PartnerPanel = React.lazy(()=>import("./components/Admin/PartnerPanel"))
const MerchantPanel = React.lazy(()=>import("./components/Admin/MerchantPanel"))
const Upload = React.lazy(()=>import("./components/Upload"))
const ProtectedRoute = React.lazy(()=>import("./components/Auth/ProtectedRoute"))
const PrivateRoutes = React.lazy(()=>import("./components/Auth/PrivateRoutes"))
const RequireAuth = React.lazy(()=>import("./components/Auth/RequireAuth"))
const Unauthorized = React.lazy(()=>import("./components/Unauthorized"))

function App() {
 const ROLES ={
  'User': 'admin',
  'Admin': 'superadmin'
 }
  return(
<BrowserRouter>
<Suspense fallback={<div style={{
          width:"100%",
          height:"95vh",
          textAlign:'center',
          alignItems:"center",
          display:'flex',
          justifyContent:'center',
        }}>          
          <RotatingLines
           strokeColor="#0d6efd"
           strokeWidth="5"
           animationDuration="0.75"
           width="96"
           visible={true}
         />
      </div>}> 
   <Routes>
 
  <Route path="/" element={<Login/>}/>
  <Route path="/unauthorized" element={<Unauthorized/>}/>
  <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
  <Route path="/product" element={<ProtectedRoute><ProductUpload/></ProtectedRoute>}/>
  <Route path="/rate" element={<ProtectedRoute><RateSet/></ProtectedRoute>}/>
  <Route path="/selected" element={<ProtectedRoute><Selected/></ProtectedRoute>}/>
  <Route path="/reports" element={<ProtectedRoute><Reports/></ProtectedRoute>}/>
  
  <Route path="/admin" element={<PrivateRoutes><PartnerPanel/></PrivateRoutes>}/>
  <Route path="/merchant" element={<PrivateRoutes><MerchantPanel/></PrivateRoutes>}/>
 
   </Routes>
   </Suspense> 
</BrowserRouter>
  );
}

export default App;
