import React, { Fragment } from 'react'

import Message from './Message/Message'

import {
  MessagesContainer,
} from './Style'

const Messages = ({ messages, name }) => (
  <Fragment>
    <MessagesContainer>
      {messages.map((message, i) => (
        <div key={i}>
          <Message
            message={message}
            name={name}
          />
        </div>
      ))}
    </MessagesContainer>
  </Fragment>
)

export default Messages