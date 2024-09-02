import React from 'react'
import { useParams } from 'react-router-dom'

function EventDetailPage() {
  const params = useParams()
  return (
    <div>
      <h1> Event Detail Page </h1>
      <p> Event id:{params.eventId} </p>
    </div>
  )
}

export default EventDetailPage
