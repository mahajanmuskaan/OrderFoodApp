import React, { lazy, Suspense, useContext, useState } from "react";
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
import Help from "./component/Help";
import UserContext from "./utils/UserContext";

// Lazy Loading of Food Mart Component
const FoodMartComponent = lazy(() => import("./component/FoodMartComponent"));

// CSS style for offline message
const style = {
    color: 'black',
    textAlign: 'center',
    margin: 'auto',
    padding: '20px'
}

const AppLayout = () => {

    // Using Custom Hook to check the internet connectivity
    const isOnline = useOnline();
    const [user, setUser] = useState({
        email: "",
    });

    // Render an offline message if the user is offline
    if (!isOnline) {
        return (
            <>
                <h1 style={style}>🔴 You are Offline. Please check your internet connection❗</h1>
            </>
        );
    }

    // Render the app layout with header, outlet, and footer components
    return (
        <>
            <UserContext.Provider value={{ user: user, setUser: setUser }}>
                <HeaderComponent />
                <Outlet />
                <FooterComponent />
            </UserContext.Provider>
        </>
    );
};


const appRouter = createBrowserRouter([
    {
        path: '/',
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
                path: "/help",
                element: <Help />,
                errorElement: <Error />
            },
            {
                path: "/foodMart",
                element: <Suspense fallback={<ShimmerUI />}>
                    <FoodMartComponent />
                </Suspense>,
                errorElement: <Error />
            },
            {
                path: '/restaurant-menu/:id',
                element: <RestaurantMenu />,
                errorElement: <Error />
            },

        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
