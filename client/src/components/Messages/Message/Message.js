import React, { Fragment } from 'react'
import ReactEmoji from 'react-emoji'

import {
  JustifyEnd,
  JustifyStart,
  SentTextEnd,
  SentTextStart,
  BackgroundBlue,
  BackgroundLight,
  ColorWhite,
  ColorDark,
} from './Style'

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false

  const trimmedName = name.trim().toLowerCase()

  if (user === trimmedName) {
    isSentByCurrentUser = true
  }

  return (
    <Fragment>
      {
        isSentByCurrentUser
          ? (
            <JustifyEnd>
              <SentTextEnd>
                {trimmedName}
              </SentTextEnd>
              <BackgroundBlue>
                <ColorWhite>
                  {ReactEmoji.emojify(text)}
                </ColorWhite>
              </BackgroundBlue>
            </JustifyEnd>
          )
          : (
            <JustifyStart>
              <BackgroundLight>
                <ColorDark>
                  {ReactEmoji.emojify(text)}
                </ColorDark>
              </BackgroundLight>
              <SentTextStart>
                {user}
              </SentTextStart>
            </JustifyStart>
          )
      }
    </Fragment>
  )
}

export default Message