import React, { Fragment } from 'react'

import onlineIcon from '../../icons/onlineIcon.png'
import closeIcon from '../../icons/closeIcon.png'

import {
  InfoBarContainer,
  LeftInnerContainer,
  RightInnerContainer,
  OnLineIcon,
} from './Style'

const InfoBar = ({ room }) => (
  <Fragment>
    <InfoBarContainer>
      <LeftInnerContainer>
        <OnLineIcon
          src={onlineIcon}
          alt="online icon"
        />
        <h3>{room}</h3>
      </LeftInnerContainer>
      <RightInnerContainer>
        <a href="/">
          <img
            src={closeIcon}
            alt="close icon"
          />
        </a>
      </RightInnerContainer>
    </InfoBarContainer>
  </Fragment>
)

export default InfoBar