import React from "react";
import { createBrowserRouter, RouterProvider, Link, Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";


const NavbarWrapper = () =>{
    return(
        <div>
            <Nav/>
            <Outlet/>
        </div>
    )
}


const router = createBrowserRouter([
{
    path:"/",
    element:<NavbarWrapper />,
    children:[
        {
            path:"/",
            element:<Home />,
        },
    
        {
            path:"/about",
            element:<About />,
        },
        {
            path:"/contact",
            element:<Contact />,
        }
    ]
}
    
])



function App(){
    return(
        <RouterProvider router={router} />    
    )
}

export default App;