import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorHandel from "../components/HandelError/ErrorHandel";
import Main from "../components/Main-Section/MainSection";
import Home from "../components/Main-Section/Home/Home";
import Works from "../components/Main-Section/Works/Works";
import About from "../components/Main-Section/About/About";
import Contacts from "../components/Main-Section/Contacts/Contacts";

const React_Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",

            element: <Main />,

            errorElement: <ErrorHandel />,

            children: [
                {
                    path: "/",
                    Component: Home,

                },
                {
                    path: "/Works",
                    Component: Works,

                },
                {
                    path: "/About",
                    Component: About,

                },
                {
                    path: "/Contacts",
                    Component: Contacts,

                }
            ]
        }
    ])

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default React_Router;