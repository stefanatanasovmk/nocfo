import EventCard from './EventCard'

export default {
  title: 'Components/EventCard',
  component: EventCard
}

export const PastEventCard = {
  name: 'Past EventCard',
  args: {
    date: '2021-12-25',
    priority: 'HIGH',
    description: 'Christmas Day'
  }
}

export const FutureEventCard = {
  name: 'Future EventCard',
  args: {
    date: '2025-12-25',
    priority: 'LOW',
    description: 'Christmas Day'
  }
}

export const ModeratePriorityEventCard = {
  name: 'Moderate Priority EventCard',
  args: {
    date: '2025-12-25',
    priority: 'MODERATE',
    description: 'Christmas Day'
  }
}
