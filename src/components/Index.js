import React from 'react'
import AddProduct from './pages/AddProduct'
import Odders from './pages/Odders'
import ProductList from './pages/ProductList'
import Seles from './pages/Seles'
import SideBar from './SideBar'

const Index = () => {
    return (
        <div>
            <SideBar />
            <ProductList />
            <AddProduct />
            <Odders />
            <Seles />
        </div>
    )
}

export default Index