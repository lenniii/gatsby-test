import { Link } from "gatsby-plugin-react-i18next"
import React from "react"
import styled from "styled-components"

const Card = styled.div`
  display: flex;
  background-color: orange;
  margin-left: 1rem;
  margin-right: 1rem;
  flex-direction: column;
`
export const UpperCard = styled.div`
  display: flex;
  height: 90%;
`
export const BottomCard = styled.div`
  background-color: white;
  height: 10%;
  text-align: center;
`
export const Name = styled.h1``
export const Price = styled.h2``
export const SelectButton = styled(props => <Link {...props} />)`
  color: aqua;
`

export default Card
