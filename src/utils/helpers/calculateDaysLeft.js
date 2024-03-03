/**
 *
 * @param {dateString} dateString -  YYYY-MM-DD - The date of the event
 * @returns
 */

function calculateDaysLeft(dateString) {
  const targetDate = new Date(dateString)

  const currentDate = new Date()

  const diffInMs = targetDate - currentDate

  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24))

  return diffInDays
}

export default calculateDaysLeft
