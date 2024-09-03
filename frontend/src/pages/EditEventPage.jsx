import React from 'react'
import EventForm from '../components/EventForm'
import { useRouteLoaderData } from 'react-router-dom'

function EditEventPage() {
    const data = useRouteLoaderData('event-detail')
    return (
        <div>
            <EventForm event={data.event} />
        </div>
    )
}

export default EditEventPage
