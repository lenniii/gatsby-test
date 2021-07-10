import { Link } from "gatsby-plugin-react-i18next"
import React from "react"
import styled from "styled-components"

const Card = styled.div`
  display: flex;
  background-color: orange;
  margin-left: 1rem;
  margin-right: 1rem;
  flex-direction: column;
  border-radius: 12px;
  min-width: 250px;
`
export const UpperCard = styled.div`
  display: flex;
  position: relative;
  height: 90%;
  padding: 10px;
  align-items: center;
  justify-content: center;
`
export const BottomCard = styled.div`
  background-color: white;
  height: 10%;
  text-align: center;
`
export const Name = styled.h1`
  color: white;
  text-transform: uppercase;
  font-size: 2rem;
  text-align: center;
  margin-top: 50px;
`
export const Price = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10px;
  right: 20px;
  background-color: white;
  width: 64px;
  height: 64px;
  border-radius: 50%;
`
export const SelectButton = styled(Link)`
  color: orange;
`

export default Card
