import React, { Fragment } from 'react'

import onlineIcon from '../../icons/onlineIcon.png'

import {
  TextWrapper,
  ActiveContainer,
  ActiveItem,
} from './Style'

const TextContainer = ({ users }) => (
  <Fragment>
    <TextWrapper>
      {
        users
          ? (
            <div>
              <h1>People currently chatting:</h1>
              <ActiveContainer>
                <h2>
                  {users.map(({ name }) => (
                    <ActiveItem key={name}>
                      {name}
                      <img alt="Online Icon" src={onlineIcon} />
                    </ActiveItem>
                  ))}
                </h2>
              </ActiveContainer>
            </div>
          )
          : null
      }
    </TextWrapper>
  </Fragment>
)

export default TextContainer