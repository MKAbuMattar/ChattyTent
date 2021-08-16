import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

import MeatDecorator from '../../utilities/MeatDecorator/MeatDecorator'

import {
  JoinOuterContainer,
  JoinInnerContainer,
  Heading,
  JoinInput,
  Button,
} from './Style'

const Join = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  return (
    <Fragment>
      <MeatDecorator
        title={'ChattyTent | Join'}
        description={'ChattyTent is a chat room service that allows you to build your own room and start chatting with your friends. When you quit the room, the data will be deleted.'}
      />
      <JoinOuterContainer>
        <JoinInnerContainer>
          <Heading>Join</Heading>
          <div>
            <JoinInput
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <JoinInput
              className="mt-20"
              type="text"
              placeholder="Room"
              onChange={(e) => setRoom(e.target.value)}
            />
          </div>
          <Link
            onClick={e => (!name || !room) ? e.preventDefault() : null}
            to={`/chat?name=${name}&room=${room}`}
          >
            <Button
              className="mt-20"
              type="submit"
            >
              Sign In
            </Button>
          </Link>
        </JoinInnerContainer>
      </JoinOuterContainer>
    </Fragment>
  )
}

export default Join
