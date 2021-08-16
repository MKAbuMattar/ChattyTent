import React, { Fragment } from 'react'

import {
  Form,
  TextInput,
  SendButton
} from './Style'

const Input = ({ setMessage, sendMessage, message }) => (
  <Fragment>
    <Form>
      <TextInput
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
      />
      <SendButton onClick={e => sendMessage(e)}>Send</SendButton>
    </Form>
  </Fragment>
)

export default Input