import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/login/Login';
import SignUp from './components/signup/Signup';
import Dashboard from './components/dashboard/Dashbord';
import AddNote from './components/addnote/AddNote';

export default function RoutingModule() {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/signup',
            element: <SignUp />
        },
        {
            path: '/dashboard',
            element: <Dashboard />,
            children: [
                {
                    path: 'addnote',
                    element: <AddNote />
                }
            ]
        }
    ]);

    return (
        <RouterProvider router={routes} />
    );
}