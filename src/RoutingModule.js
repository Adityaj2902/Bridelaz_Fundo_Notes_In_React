import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/Signup';
import AddNote from './components/AddNote/AddNote'; 
import NoteCard from './components/NoteCard/NoteCard';


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
            path: '/notes',
            element: <AddNote />
        },
        {
            path:'/noteCard',
            element: <NoteCard />
        }
    ]);

    return (
        <RouterProvider router={routes} />
    );
}