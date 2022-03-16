import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'

import { Products } from './types/products'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { list } from './api/product'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ProductDetail from './pages/ProductDetail'
import AdminLayouts from './pages/layouts/Adminlayouts'
import Dashboard from './pages/Dashboard'
import WebsiteLayout from './pages/layouts/Websitelayout'


function App() {
    const [products, setProducts] = useState<{ _id: number, name: string }[]>([])

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await list();
            setProducts(data);
        }
        getProducts();
    }, [])

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
                        <Route path="product" element={<ProductPage />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                    </Route>
                    <Route path="admin" element={<AdminLayouts />}>
                        <Route index element={<Navigate to="dashboard" />} />
                        <Route path="dashboard" element={<Dashboard />} />
                    </Route>
                </Routes>
            </main>
        </div >
    )
}

export default App
