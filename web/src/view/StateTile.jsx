import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors'
import { breakpoints } from '../theme/breakpoints'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  color: ${colors.gray100};
  width: calc(33.33% - 10px);
  padding: 10px;
  margin: 5px;
  background-color: ${colors.white};
  border: 10px solid ${colors.gray};
  text-align: left;
  &:hover {
    background-color: ${colors.gray};
    text-decoration: none;
  }
  @media only screen and (max-width: ${breakpoints.large}) {
    width: calc(50% - 10px);
  }
  @media only screen and (max-width: ${breakpoints.small}) {
    width: calc(100% - 10px);
  }
`
StyledLink.displayName = 'StyledLink'

const StyledTitle = styled.p`
  color: ${colors.black};
  font-size: 18px;
  margin-bottom: 5px;
`
StyledTitle.displayName = 'StyledTitle'

const StyledDetails = styled.p`
  color: ${colors.gray200};
  font-size: 14px;
`
StyledDetails.displayName = 'StyledDetails'

export default function State (props) {
  return (
    <>
      <StyledLink
        id={props.data.name}
        to={{
          pathname: props.data.url,
          state: props.data
        }}>
        <StyledTitle className='font-weight-bold'>{props.data.name}</StyledTitle>
        <StyledDetails className='font-weight-bold'>{props.data.schoolCount} Schulen</StyledDetails>
      </StyledLink>
    </>
  )
}
