import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Merchant/Home";
import ProductUpload from "./components/Merchant/ProductUpload"
import RateSet from "./components/Merchant/RateSetting"
import Selected from "./components/Merchant/SelectedGrozo"
import Reports from "./components/Merchant/ItemActive"
import PartnerPanel from "./components/Admin/PartnerPanel";
import MerchantPanel from "./components/Admin/MerchantPanel";
import Upload from "./components/Upload"
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import PrivateRoutes from  "./components/Auth/PrivateRoutes";
import RequireAuth from "./components/Auth/RequireAuth";
import Unauthorized from "./components/Unauthorized"

function App() {
 const ROLES ={
  'User': 'admin',
  'Admin': 'superadmin'
 }
  return(
<BrowserRouter>
<Routes>
  <Route path="/" element={<Login/>}></Route>
  <Route path="/unauthorized" element={<Unauthorized/>}></Route>
  <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
  {/* <Route path="/home" element={<Home/>}></Route> */}
  <Route path="/product" element={<ProtectedRoute><ProductUpload/></ProtectedRoute>}/>
  <Route path="/rate" element={<ProtectedRoute><RateSet/></ProtectedRoute>}/>
  <Route path="/selected" element={<ProtectedRoute><Selected/></ProtectedRoute>}/>
  <Route path="/reports" element={<ProtectedRoute><Reports/></ProtectedRoute>}/>
  
  <Route path="/admin" element={<PrivateRoutes><PartnerPanel/></PrivateRoutes>}/>
  <Route path="/merchant" element={<PrivateRoutes><MerchantPanel/></PrivateRoutes>}/>

  </Routes>
</BrowserRouter>
  );
}

export default App;
