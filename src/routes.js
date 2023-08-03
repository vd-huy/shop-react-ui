import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/productlist", component: ProductList },
    { path: "/product", component: Product },
    { path: "/register", component: Register },
    { path: "/login", component: Login },
    { path: "/cart", component: Cart },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };