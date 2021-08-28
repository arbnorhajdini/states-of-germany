import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../theme/colors'

const Styledtitle = styled.p`
  color: ${colors.gray100};
  font-size: 35px;
  width: 100%;
  background-color: ${colors.gray};
  padding: 10px 10px 10px 20px;
`
Styledtitle.displayName = 'Styledtitle'

export default function State () {
  const history = useHistory()
  const stateData = history.location.state
  return (
    <>
      <Styledtitle className='font-weight-bold text-uppercase'>{stateData.name}</Styledtitle>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>Zahlen: {stateData.count}</li>
        <li className='list-group-item'>Fremdes Land: {stateData.foreignCountry ? 'Ja' : 'Nein'}</li>
        <li className='list-group-item'>Buchstabe: {stateData.letter}</li>
        <li className='list-group-item'>Schulen: {stateData.schoolCount}</li>
        <li className='list-group-item'>Stadt Staat: {stateData.stadtStaat ? 'Ja' : 'Nein'}</li>
      </ul>
    </>
  )
}
