import React, { useState, useEffect } from 'react'
import { fetchStateList, fetchPersonIndexCounts } from '../api/stateList'
import NotificationService from '../core/NotificationService'
import styled from 'styled-components'
import { colors } from '../theme/colors'
import StateTile from './StateTile'
import Button from '../core/Button'

const Styledtitle = styled.p`
  color: ${colors.gray100};
  font-size: 35px;
  width: 100%;
  background-color: ${colors.gray};
  padding: 10px 10px 10px 20px;
`
Styledtitle.displayName = 'Styledtitle'

export default function StatesList () {
  const [states, setStates] = useState([])
  const [personIndexCounts, setPersonIndexCounts] = useState([])

  useEffect(() => {
    fetchStateList()
      .then((data) => { setStates(data) })
      .catch(() => {
        NotificationService.pushErrorNotification('Bundesländer nicht gefunden')
      })
    fetchPersonIndexCounts()
      .then((data) => { setPersonIndexCounts(data) })
      .catch(() => {
        NotificationService.pushErrorNotification('Liste nicht gefunden')
      })
  }, [])

  return (
    <div className='container-fluid'>
      <Styledtitle className='font-weight-bold text-uppercase'>bundesländer</Styledtitle>
      <div className='row mr-0 ml-0'>
        { states.map((data, i) => <StateTile key={i} data={data} />) }
      </div>
      <div className='row mr-0 ml-0 mt-1 mb-1'>
      {Object.entries(personIndexCounts).map(([text, value], i) => (
        (value > 0) && <Button key={i} text={text} value={value} />
      ))}
      </div>
    </div>
  )
}
