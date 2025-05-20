
import {
    createBrowserRouter,

} from "react-router";
import MainLayout from "../Root/MainLayout";
import Home from "../Pages/Home";
import AddtoFindRoommate from "../Pages/AddtoFindRoommate";
import BrowseListing from "../Pages/BrowseListing";
import MyListings from "../Pages/MyListings";
import Register from "../Authentication/Register";
import Login from "../Authentication/Login";
import MyProfile from "../Components/MyProfile";
import Privateroute from "../private/Privateroute";

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
                element: <AddtoFindRoommate></AddtoFindRoommate>
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

]);
