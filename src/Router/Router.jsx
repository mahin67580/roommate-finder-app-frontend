
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
import Errorpage from "../Components/Errorpage";
import Update from "../Components/Update";

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
                loader: () => fetch("http://localhost:3000/roommates"),
                element: <BrowseListing></BrowseListing>
            },
            {
                path: '/MyListings',
                // loader: () => fetch("http://localhost:3000/roommates"),

                element: (<Privateroute>
                    <MyListings></MyListings>
                </Privateroute>)
            },
            {
                path: '/Update/:id',
                
                loader: ({ params }) => fetch(`http://localhost:3000/roommates/${params.id}`),
                element: (<Privateroute>
                    <Update></Update>
                </Privateroute>)
            },

            {
                path: "/register",
                Component: Register
            },
            {
                path: "/login",
                Component: Login
            },
            {
                path: '/myprofile',
                element:
                    (<Privateroute>
                        <MyProfile></MyProfile>
                    </Privateroute>)

            },
        ]
    },


    {
        path: '/roommates/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/roommates/${params.id}`),
        element: (<Privateroute>
            <Details></Details>
        </Privateroute>)


    },
    {
        path: "*",
        element: <Errorpage />
    }

]);
