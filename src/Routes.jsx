import { MainLayout } from "./components/layouts";
import { HomePage, UmlPage } from "./pages";

const routes = [
    {
        path: '/',
        element: <MainLayout />,
        childrens: [
            { path: '/', element: <HomePage /> },
            { path: '/uml-structs/:uuid', element: <UmlPage /> },
            { path: '/uml-behaviors/:uuid', element: <UmlPage /> }
        ]
    }
];

export default routes;