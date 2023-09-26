import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Category from "./pages/Category/Category";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./app.scss";

const Layout = () => {
  //using Outlet to present different pages
  //because we have a app classname here, we can add styles to all global elements
  return (
    <div>
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
