import React, { lazy, Suspense } from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider, Link } from "react-router-dom";
import HeaderComponent from "./component/HeaderComponent";
import MainBodyComponent from "./component/BodyComponent";
import FooterComponent from "./component/FooterComponent";
import SignUpComponent from "./component/SignUpComponent";
import Error from "./component/Error";
import CarouselComponent from "./component/CarouselComponent";
import RestaurantMenu from "./component/RestaurantMenu";
import LoginComponent from "./component/LoginComponent";
import useOnline from "./utils/useOnline";
import ShimmerUI from "./component/Shimmer";
// Lazy Loading of Food Mart Component
const FoodMartComponent = lazy(() => import("./component/FoodMartComponent"));


const style = {
    color: 'black',
    textAlign: 'center',
    margin: 'auto',
    padding: '20px'
}

const AppLayout = () => {

    // Using Custom Hook to check the internet connectivity
    const isOnline = useOnline();

    if (!isOnline) {
        return (
            <>
                <h1 style={style}>🔴 You are Offline. Please check your internet connection❗</h1>

            </>

        );
    }

    return (
        <>
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </>
    );
};


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <CarouselComponent />,
                errorElement: <Error />
            },

            {
                path: "/restaurant",
                element: <MainBodyComponent />,
                errorElement: <Error />,
            },

            {
                path: "/signup",
                element: <SignUpComponent />,
                errorElement: <Error />
            },
            {
                path: "/login",
                element: <LoginComponent />,
                errorElement: <Error />
            },
            {
                path: "/foodMart",
                element: <Suspense fallback={<ShimmerUI />}>
                    <FoodMartComponent />
                </Suspense>,
                errorElement: <Error />
            },

        ]
    },
    {
        path: '/restaurant-menu/:id',
        element: <RestaurantMenu />,
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
