import React, { Suspense } from 'react'
import EventItem from '../components/EventItem'
import { Await, defer, json, redirect, useRouteLoaderData } from 'react-router-dom'
import EventsList from '../components/EventsList'

function EventDetailPage() {
  const { event, events } = useRouteLoaderData('event-detail')

  return (
    <div>
      <Suspense fallback={<p style={{ textAlign: 'center' }} >loading...</p>}>

        <Await resolve={event}>
          {loadedEvent =>
            <EventItem event={loadedEvent} />
          }
        </Await>

      </Suspense>

      <Suspense fallback={<p style={{ textAlign: 'center' }} >loading...</p>}>

        <Await resolve={events}>
          {loadedEvents =>
            <EventsList events={loadedEvents} />
          }
        </Await>

      </Suspense>

    </div>
  )
}

export default EventDetailPage

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/events/' + id)

  if (!response.ok) {
    throw json({ message: "Could not fetch details for selected events." },
      {
        status: 500

      })
  } else {
    const resData = await response.json()
    return resData.event
  }
}

export async function loader({ params }) {
  const id = params.eventId

  return defer({
    event: loadEvent(id),
    events: loadEvents()
  })

}



async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: 'Could not fetch data' }), {
    //   status: 500,
    // })
    throw json(
      { message: 'Could not fetch data' },
      {
        status: 500,
      }

    )
  } else {

    const resData = await response.json()
    return resData.events
  }

}


export async function action({ params, request }) {
  const eventId = params.event
  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method,
  })
  if (!response.ok) {
    throw json({ message: "Could not delete event. " },
      {
        status: 500

      })
  } else {
    return redirect('/events')
  }
}