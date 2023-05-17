import { Route, Routes } from "react-router-dom";
import Products from "../pages/products/Products";
import MyCart from "../pages/my-cart/MyCart";
import MyOrder from "../pages/my-order/MyOrder";
import Layout from "../layout/Layout";
import ProductDetails from "../pages/products/ProductDetails";


const AppRoutes = ({ products }) => {
    return(
        <div>
      <Routes>
        <Route/>
        <Route path='*' element={<Layout/>}/>
        <Route path='/' element={<Layout/>}/>
        <Route path='/products' element={<Products />}/>
        <Route path="/products/:id/Details" element={<ProductDetails />}/>
        <Route path='/mycart' element={<MyCart/>}/>
        <Route path='/myorder' element={<MyOrder/>}/>
      </Routes>
        </div>
    )
}

export default AppRoutes