import React from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HeaderComponent from "./component/HeaderComponent";
import MainBodyComponent from "./component/BodyComponent";
import FooterComponent from "./component/FooterComponent";
import SignUpComponent from "./component/SignUpComponent";
import Error from "./component/Error";
import CarouselComponent from "./component/CarouselComponent";
import RestaurantMenu from "./component/RestaurantMenu";


const AppLayout = () => {

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
