import React from 'react'
import EventsNavigation from '../components/EventsNavigation'
import { Outlet } from 'react-router-dom'

function EventsRootLayout() {
    return (
        <div>
            <EventsNavigation />
            <main>
                <Outlet />
            </main>

        </div>
    )
}

export default EventsRootLayout
