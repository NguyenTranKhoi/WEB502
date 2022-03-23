import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'

import { ProductType } from './types/products'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { add, list, remove, update } from './api/product'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ProductDetail from './pages/ProductDetail'
import AdminLayouts from './pages/layouts/Adminlayouts'
import Dashboard from './pages/Dashboard'
import WebsiteLayout from './pages/layouts/Websitelayout'
import ProductAdd from './pages/ProductAdd'
import ProductManager from './pages/ProductManager'
import ProductEdit from './pages/ProductEdit'


function App() {
    const [products, setProducts] = useState<ProductType[]>([])

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await list();
            setProducts(data);
        }
        getProducts();
    }, []);

    //Add Product
    const onHandleAdd = async (product: any) => {
        const { data } = await add(product);
        setProducts([...products, data]);
    }

    const onHandleRemove = async (id: number) => {
        remove(id);
        //rerender
        setProducts(products.filter(item => item.id !== id))
    }

    const onHandleUpdate = async (product: ProductType) => {
        try {
            const { data } = await update(product);
            setProducts(products.map(item => item.id === data.id ? product : item))
        } catch (error) {

        }
    }

    return (
        <div className="App">
            <header>
                <ul>
                    <li><NavLink to="">Home Page</NavLink></li>
                    <li><NavLink to="">Product</NavLink></li>
                    <li><NavLink to="">About</NavLink></li>
                </ul>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<WebsiteLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path="product">
                            <Route index element={<ProductPage />} />
                            <Route path=":id" element={<ProductDetail />} />
                        </Route>
                    </Route>
                    <Route path="admin" element={<AdminLayouts />}>
                        <Route index element={<Navigate to="dashboard" />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="product">
                            <Route index element={<ProductManager products={products} onRemove={onHandleRemove} />} />
                            <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate} />} />
                            <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
                        </Route>
                    </Route>
                </Routes>
            </main>
        </div >
    )
}

export default App
