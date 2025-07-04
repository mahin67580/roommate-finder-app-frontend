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
import AboutUs from "../Components/AboutUs";
import Contact from "../Components/Contact";
import DashboardLayout from "../Dashboard/DashboardLayout";
import DashHome from "../Dashboard/DashHome";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            // {
            //     path: '/AddToFindRoommate',
            //     element: (
            //         <Privateroute>
            //             <AddRoommateForm></AddRoommateForm>
            //         </Privateroute>
            //     )
            // },
            {
                path: '/BrowseListing',
                loader: () => fetch("https://room-mate-server.vercel.app/roommates"),
                element: <BrowseListing></BrowseListing>
            },
            {
                path: '/AboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contactUs',
                element: <Contact></Contact>
            },
            // {
            //     path: '/MyListings',
            //     element: (
            //         <Privateroute>
            //             <MyListings></MyListings>
            //         </Privateroute>
            //     )
            // },
            {
                path: '/Update/:id',
                loader: ({ params }) => fetch(`https://room-mate-server.vercel.app/roommates/${params.id}`),
                element: (
                    <Privateroute>
                        <Update></Update>
                    </Privateroute>
                )
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
                path: '/roommates/:id',
                loader: ({ params }) => fetch(`https://room-mate-server.vercel.app/roommates/${params.id}`),
                element: (
                    <Privateroute>
                        <Details></Details>
                    </Privateroute>
                )
            },
            // Dashboard nested routes
            {
                path: '/dashboard',
                Component: DashboardLayout,
                children: [
                    {
                        index: true,
                        element: <DashHome />
                    },
                    {
                        path: 'myprofile',
                        element: (
                            <Privateroute>
                                <MyProfile />
                            </Privateroute>
                        )
                    },
                    {
                        path: 'add-listing',
                        element: (
                            <Privateroute>
                                <AddRoommateForm />
                            </Privateroute>
                        )
                    },
                    {
                        path: 'my-listings',
                        element: (
                            <Privateroute>
                                <MyListings />
                            </Privateroute>
                        )
                    }
                ]
            },
            {
                path: "*",
                element: <Errorpage />
            }
        ]
    }
]);