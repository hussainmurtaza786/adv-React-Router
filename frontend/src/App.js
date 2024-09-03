// Challenge / Exercise

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventDetailPage, { loader as eventDetailLoader } from './pages/EventDetail'
import EditEventPage from './pages/EditEventPage'
import Root from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";
import ErrorPage from "./pages/Error";
import NewEventPage,{action as newEventAction} from "./pages/NewEvent";

const router = createBrowserRouter(
  [
    {
      path: '/', element: <Root />, errorElement: <ErrorPage />, children: [
        { index: true, element: <HomePage /> },
        {
          path: 'events', element: <EventsRoot />, children: [
            {
              index: true, element: <EventsPage />, loader: eventsLoader
            },
            {
              path: ':eventId', id:'event-detail', loader: eventDetailLoader,
              children: [
                { index: true, element: <EventDetailPage /> },
                { path: 'edit', element: <EditEventPage /> },

              ]
            },

            { path: 'new', element: <NewEventPage />,action:newEventAction },
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
