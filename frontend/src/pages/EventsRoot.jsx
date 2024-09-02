import React from 'react'
import EventsNavigation from '../components/EventsNavigation'
import { Outlet } from 'react-router-dom'

function EventsRoot() {
    return (
        <div>
            <EventsNavigation />
            <main>
                <Outlet />
            </main>

        </div>
    )
}

export default EventsRoot
