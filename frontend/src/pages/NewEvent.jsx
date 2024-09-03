import React from 'react'
import EventForm from '../components/EventForm'
import { json, redirect } from 'react-router-dom'

function NewEventPage() {
  return (
    <div>
      <EventForm />
    </div>
  )
}

export default NewEventPage


export async function action({ request, params }) {
  const data = await request.formData()
  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  }
  const response = await fetch('http://localhost:8080/events/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData)
  })

  if (!response.ok) {
    console.log('Failed to save event:', await response.text());
    throw json({
      message: "Could not save event"
    }, {
      status: 500
    })
  }
  return redirect('/events')

}