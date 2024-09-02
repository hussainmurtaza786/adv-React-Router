// Challenge / Exercise

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventDetailPage from './pages/EventDetailPage'
import NewEventPage from './pages/NewEventPage'
import EditEventPage from './pages/EditEventPage'
import Root from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";

const router = createBrowserRouter(
  [
    {
      path: '/', element: <Root />, children: [
        { index: true, element: <HomePage /> },
        {
          path: 'events', element: <EventsRoot />, children: [
            {
              index: true, element: <EventsPage />, loader: eventsLoader
            },
            { path: ':eventId', element: <EventDetailPage /> },
            { path: 'new', element: <NewEventPage /> },
            { path: ':eventId/edit', element: <EditEventPage /> },
          ]
        },


      ]
    },


  ]
)


function App() {
  return <div>
    <RouterProvider router={router} />
  </div>;
}

export default App;
