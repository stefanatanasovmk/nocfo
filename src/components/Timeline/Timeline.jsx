import React from 'react'
import EventCard from './components/EventCard'
import useScreenSize from '../../utils/hooks/useScreenSize'

export const Timeline = ({ items }) => {
  const size = useScreenSize()

  return items.map((item, index) => {
    return (
      <EventCard
        key={item.description + index}
        date={item.date}
        priority={item.priority}
        description={item.description}
        cardWidth={size === 'sm' ? '100%' : '50%'}
      />
    )
  })
}
