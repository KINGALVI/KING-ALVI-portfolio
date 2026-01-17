import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorHandel from "../components/HandelError/ErrorHandel";
import Main from "../components/Main-Section/MainSection";
import Home from "../components/Main-Section/Home/Home";
import AllProjects from "../components/Main-Section/Projects/AllProjects";
import About from "../components/Main-Section/About/About";
import Contacts from "../components/Main-Section/Contacts/Contacts";
import LargeProjectsDetail from "../components/Main-Section/Projects/Large-Projects/LargeProjectsDetail";
import AOS from "aos";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorHandel />,
        children: [
            { path: "/", Component: Home },
            { path: "/AllProjects", Component: AllProjects },
            { path: "/About", Component: About },
            { path: "/Contacts", Component: Contacts },
            { path: "/LargeProjectsDetail/:id", Component: LargeProjectsDetail },
        ],
    },
]);

// Subscribe to navigation changes
router.subscribe(() => {
    // Scroll to top on every route change
    window.scrollTo(0, 0);

    // Refresh AOS after DOM updates
    setTimeout(() => {
        AOS.refresh();
    }, 0);

});

const React_Router = () => {
    return <RouterProvider router={router} />;
};

export default React_Router;