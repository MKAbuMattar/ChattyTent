import React, { Fragment, useState, useEffect } from "react"
import queryString from 'query-string'
import io from 'socket.io-client'
import { Redirect } from 'react-router-dom'

import TextContainer from '../TextContainer/TextContainer'
import Messages from '../Messages/Messages'
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'

import MeatDecorator from '../../utilities/MeatDecorator/MeatDecorator'

import {
  OuterContainer,
  Container,
} from './Style'

let socket

const Chat = ({ location }) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [users, setUsers] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  const ENDPOINT = process.env.REACT_APP_SERVER_URL

  useEffect(() => {
    const { name, room } = queryString.parse(location.search)

    socket = io(ENDPOINT)

    setRoom(room)
    setName(name)

    if ((name != null && room != null)) {
      socket.emit('join', { name, room }, (error) => {
        if (error) {
          alert(error)
        }
      })
    }


  }, [ENDPOINT, location.search])

  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [...messages, message])
    })

    socket.on("roomData", ({ users }) => {
      setUsers(users)
    })
  }, [])

  const sendMessage = (event) => {
    event.preventDefault()

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  return (
    <Fragment>
      <MeatDecorator
        title={`ChattyTent | Room: ${room} | User: ${name}`}
        description={'ChattyTent is a chat room service that allows you to build your own room and start chatting with your friends. When you quit the room, the data will be deleted.'}
      />
      {(name != null && room != null) ? (
        <OuterContainer>
          <Container>
            <InfoBar
              room={room}
            />
            <Messages
              messages={messages}
              name={name}
            />
            <Input
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
            />
          </Container>
          <TextContainer users={users} />
        </OuterContainer>
      ) : (
        <Fragment>
          <Redirect to="/" />
        </Fragment>
      )}
    </Fragment>
  )
}

export default Chat
