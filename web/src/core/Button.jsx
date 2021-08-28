import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors'

const StyledButton = styled.button`
  background-color: ${colors.gray};
  border: none;
  margin-right: 5px;
  color: ${colors.black};
  font-weight: bold;
  min-width: 30px;
  min-height: 30px;
`
StyledButton.displayName = 'StyledButton'

export default function Button ({ text, value }) {
  const [showValue, setStates] = useState(false)
  return (
  <StyledButton onClick={() => setStates(!showValue)}><span className='text-uppercase'>{text}</span> { showValue && <span> : {value}</span>}</StyledButton>
  )
}
