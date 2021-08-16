import styled from 'styled-components'

export const MessageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 5%;
  margin-top: 3px;
`
export const JustifyEnd = styled(MessageContainer)`
  justify-content: flex-end;
`
export const JustifyStart = styled(MessageContainer)`
  justify-content: flex-start;
`

export const SentTextEnd = styled.p`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  color: #828282;
  letter-spacing: 0.3px;
  padding-right: 10px;
`

export const SentTextStart = styled.p`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  color: #828282;
  letter-spacing: 0.3px;
  padding-left: 10px;
`

export const MessageBox = styled.div`
  background: #F3F3F3;
  border-radius: 20px;
  padding: 5px 20px;
  color: white;
  display: inline-block;
  max-width: 80%;
`

export const BackgroundBlue = styled(MessageBox)`
  background: #2979FF;
`

export const BackgroundLight = styled(MessageBox)`
  background: #F3F3F3;
`
export const MessageText = styled.p`
  width: 100%;
  letter-spacing: 0;
  float: left;
  font-size: 1.1em;
  word-wrap: break-word;

  && img{
    vertical-align: middle;
  }
`

export const ColorWhite = styled(MessageText)`
  color: white;
`

export const ColorDark = styled(MessageText)`
  color: #353535;
`