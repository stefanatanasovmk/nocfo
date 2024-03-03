import { colors } from '../../../utils/theme/colors'
import calculateDaysLeft from '../../../utils/helpers/calculateDaysLeft'

/**
 *
 * @param {date} date -  YYYY-MM-DD - The date of the event
 * @param {priority} priorty "HIGH" | "MODERATE" | "LOW" - The priorty of the event
 * @param {description} description string - The description of the event
 * @param {width} width number | string - The width of the card, default is 50%, can be a number or a string. The lines and the dots container will take up 5% of the width, and the card container will take up 80% of the width. And there is a 5% margin on the left of the card container.
 * @param {height} height number | string - The height of the card, default is 120, can be a number or a string.
  
*/

export default function EventCard({
  date,
  priority,
  description,
  cardWidth = '50%',
  cardHeight = 120
}) {
  const daysLeft = calculateDaysLeft(date)
  const opacity = daysLeft < 0 ? 0.5 : 1

  const priorityColor =
    {
      HIGH: 'red',
      MODERATE: 'orange',
      LOW: 'green'
    }[priority] || 'grey'

  return (
    <div
      style={{
        ...$container,
        height: cardHeight,
        width: cardWidth
      }}
    >
      <div style={{ ...$timelineDotAndLinesContainer }}>
        <div style={$timelineLineContainer}></div>
        <div
          style={{
            ...$dotContainer,
            backgroundColor: priorityColor,
            opacity
          }}
        ></div>
        <div style={$timelineLineContainer}></div>
      </div>
      <div style={{ ...$cardContainer, opacity }}>
        <div>
          <div
            style={{
              flexDirection: 'row',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%'
            }}
          >
            <p style={$daysLeft}>
              {!isNaN(daysLeft)
                ? daysLeft < 0
                  ? `${Math.abs(daysLeft)} ago`
                  : `${daysLeft} days left`
                : ''}
            </p>

            <p style={{ ...$priorityStyle, color: priorityColor }}>{priority}</p>
          </div>
          <p style={$dateStyle}>{date}</p>
        </div>
        <p style={$descriptionStyle}>{description}</p>
      </div>
    </div>
  )
}

const $container = {
  flexDirection: 'row',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

const $timelineDotAndLinesContainer = {
  width: '5%',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%'
}

const $timelineLineContainer = {
  width: 5,
  height: '35%',
  backgroundColor: colors.palette.primary
}

const $dotContainer = {
  width: 15,
  height: 15,
  borderRadius: 100
}
const $cardContainer = {
  borderRadius: 10,
  width: '80%',
  marginLeft: '5%',
  padding: '1em',
  borderWidth: 2,
  borderColor: colors.palette.primary,
  borderStyle: 'solid',
  backgroundColor: colors.palette.background,
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around'
}

const $daysLeft = {
  margin: 0,
  fontWeight: 600,
  fontSize: '0.6em',
  color: colors.palette.typography,
  fontFamily: 'Oswald, sans-serif'
}
const $dateStyle = {
  margin: 0,
  fontWeight: 400,
  fontSize: '0.7em',
  color: colors.palette.typography,
  fontFamily: 'Rubik, sans-serif'
}

const $priorityStyle = {
  margin: 0,
  fontWeight: 400,
  fontSize: '0.6em',
  fontFamily: 'Oswald, sans-serif'
}

const $descriptionStyle = {
  margin: 0,
  fontWeight: 600,
  fontSize: '1em',
  color: colors.palette.typography,
  fontFamily: 'Rubik, sans-serif'
}
