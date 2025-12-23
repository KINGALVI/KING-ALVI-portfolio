import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorHandel from "../components/HandelError/ErrorHandel";
import Main from "../components/Main-Section/MainSection";
import Home from "../components/Main-Section/Home/Home";
import Projects from "../components/Main-Section/Projects/Projects";
import About from "../components/Main-Section/About/About";
import Contacts from "../components/Main-Section/Contacts/Contacts";
import LargeProjectsDetail from "../components/Main-Section/Projects/LargeProjectsDetail";

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
                    path: "/Projects",
                    Component: Projects,

                },
                {
                    path: "/About",
                    Component: About,

                },
                {
                    path: "/Contacts",
                    Component: Contacts,

                },
                {
                    path: "/LargeProjectsDetail/:id",
                    Component: LargeProjectsDetail,
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