import { MainLayout } from "./components/layouts";
import { HomePage, DataPage } from "./pages";

const routes = [
    {
        path: '/',
        element: <MainLayout />,
        childrens: [
            { path: '/', element: <HomePage /> },
            { path: '/uml-structs/:uuid', element: <DataPage /> },
            { path: '/uml-behaviors/:uuid', element: <DataPage /> },
            { path: '/merise/:uuid', element: <DataPage /> }
        ]
    }
];

export default routes;