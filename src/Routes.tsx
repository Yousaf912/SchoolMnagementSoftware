import { createBrowserRouter } from "react-router-dom";
import App from "./App";


export const AllRoutes = createBrowserRouter([
{
    path:'/',
    element: <App></App>
},
{
    path:'/dashboard',
    element: <App></App>
},
{
    path:'/add-students',
    element: <App></App>
},
{
    path:'/add-teachers',
    element: <App></App>
},
{
    path:'/add-worker',
    element: <App></App>
},
{
    path:'/classOne',
    element:<App></App>
},
{
    path:'/classTwo',
    element:<App></App>
},
{
    path:'/classThree',
    element:<App></App>
},
{
    path:'/classFour',
    element:<App></App>
},
{
    path:'/classFive',
    element:<App></App>
},
{
    path:'/Teacherlist',
    element:<App></App>
},
{
    path:'/Workerlist',
    element:<App></App>
},


])
