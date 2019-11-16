import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/ChatBubbleStyles.module.css'

export default function ChatBubble(props) {
  return (
    <div role="button" id={props.id} className={styles.chatBubble} onClick={props.onClickFunc}>
      <div className={styles.contactAvatar}>
        <svg x="0px" y="0px" viewBox="0 0 1000 1000" width="70px" heigth="70px">
          <g fill="#8E24AA">
            <path d="M500,8.8C229.4,8.8,10,228.7,10,500c0,271.3,219.4,491.2,490,491.2c270.6,0,490-219.9,490-491.2C990,228.7,770.6,8.8,500,8.8z M794.8,767.5c-57.7-28-36.5-6.1-111.9-37.2c-77.2-31.8-95.5-42.2-95.5-42.2l-0.7-72.9c0,0,28.9-21.8,37.9-90.8c18,5.2,24.2-21.1,25.1-37.8c1.1-16.2,10.7-66.7-11.4-62.2c4.5-33.7,8.1-64.2,6.5-80.4c-5.5-56.6-44.9-115.8-144.3-120.1c-84.5,4.3-139.3,63.5-144.8,120.2c-1.6,16.1,1.7,46.6,6.2,80.4c-22.1-4.6-12.6,46-11.6,62.2c1.1,16.8,7,43.1,25.1,37.9c9,69,37.9,91,37.9,91l-0.7,73.3c0,0-18.3,11.1-95.5,42.9c-75.4,31.1-54.3,7.9-111.9,35.8c-64-70.8-103.3-164.5-103.3-267.5c0-220.4,178.2-399.1,398.1-399.1c219.9,0,398.1,178.7,398.1,399.1C898.1,603.1,858.8,696.7,794.8,767.5z" />
          </g>
        </svg>
      </div>
      <div className={styles.MainPart}>
        <div className={styles.NameAndDate}>
          <div className={styles.ContactName}>{props.contact}</div>
          <div className={styles.ContactDate}>{props.Time}</div>
        </div>
        <div className={styles.TextAndCheck}>
          <div className={styles.ContactText}>{props.Text}</div>
          <div className={styles.ContactCheck}>
            <svg
              className="tick"
              x="0px"
              y="0px"
              width="30px"
              height="30px"
              viewBox="0 0 448.8 448.8"
              style={{ fill: '#00CC66' }}
            >
              <polygon points="142.8,323.85 35.7,216.75 0,252.45 142.8,395.25 448.8,89.25 413.1,53.55" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

ChatBubble.propTypes = {
  onClickFunc: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  Text: PropTypes.string.isRequired,
  Time: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
}
