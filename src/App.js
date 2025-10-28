import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import { ThemeProvider } from "./Context/ThemeContext";

const Grocery = lazy(() => import("./Components/Grocery"))

const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello World with React Element!"
)

const jsxHeading = <h1 id="heading">Hello World with JSX!</h1>;

const AppLayout = () => {
    return (
        <ThemeProvider>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </ThemeProvider>
    )
}

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
        {
            path: "/",
            element: <Body />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/contact",
            element: <Contact />
        },
        {
            path: "/grocery",
            element:
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Grocery />
                </Suspense>
        },
        {
            path: "/restaurants/:resId",
            element: <RestaurantMenu />
        }
    ],
    errorElement: <Error />
  },
];

const appRouter = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);