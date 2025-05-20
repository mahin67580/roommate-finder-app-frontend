
import {
    createBrowserRouter,

} from "react-router";
import MainLayout from "../Root/MainLayout";
import Home from "../Pages/Home";

import BrowseListing from "../Pages/BrowseListing";
import MyListings from "../Pages/MyListings";
import Register from "../Authentication/Register";
import Login from "../Authentication/Login";
import MyProfile from "../Components/MyProfile";
import Privateroute from "../private/Privateroute";
import AddRoommateForm from "../Pages/CURD/AddRoommateForm";
import Details from "../Components/Details";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/AddToFindRoommate',
                element: (<Privateroute>
                    <AddRoommateForm></AddRoommateForm>
                </Privateroute>)
            },
            {
                path: '/BrowseListing',
                element: <BrowseListing></BrowseListing>
            },
            {
                path: '/MyListings',
                element: <MyListings></MyListings>
            },
            {
                path: "/register",
                Component: Register
            },
            {
                path: "/login",
                Component: Login
            },
        ]
    },

    {
        path: '/myprofile',
        element:
            (<Privateroute>
                <MyProfile></MyProfile>
            </Privateroute>)

    },
    {
        path: '/roommates/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/roommates/${params.id}`),
        element:
            <Details></Details>

    },

]);
