import { MainLayout } from "./components/layouts";
import { HomePage } from "./pages";

const routes = [
    {
        path: '/',
        element: <MainLayout />,
        childrens: [
            { path: '/', element: <HomePage /> }
        ]
    }
];

export default routes;