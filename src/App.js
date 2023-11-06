import { useEffect, useState } from "react";
import "./App.scss";
import { Routes, Route, Router } from "react-router-dom";
import Layout from "./pages/Layout";
import { Provider, useDispatch } from "react-redux";
import store from "./store";
import NotFound from "./pages/NotFound/NotFound";
import AllProducts from "./pages/AllProducts/AllProducts";
import ProductsSale from "./pages/ProductsSale/ProductsSale";
import HomePage from "./pages/Home/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import Categories from "./pages/Categories/Categories";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import CartPage from "./pages/CartPage/CartPage";


function App() {

    return (
        <Provider store={store}>
            <>
                <main className="main">
                    <Routes>
                      
                        <Route path="/" element={<Layout />}>
                            <Route index element={<HomePage />} />
                            <Route path="/products" element={<AllProducts />} />
                            <Route path="/sales" element={<ProductsSale />} />
                            <Route
                                path="/categories"
                                element={<Categories />}
                            />
                            <Route
                                path="/categories/:id"
                                element={<CategoryPage />}
                            />
                            <Route
                                path="/products/:id"
                                element={<ProductPage />}
                            />
                            <Route path="/cart" element={<CartPage />} />

                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </main>
            </>
        </Provider>
    );
}

export default App;