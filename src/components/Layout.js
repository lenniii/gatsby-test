import React from "react"
import styled from "styled-components"
import LanguageSelector from "./LanguageSelector"

const BaseLayout = styled.div`
  max-width: 70vw;
`

const Layout = ({ children }) => {
  return (
    <BaseLayout>
      <LanguageSelector />
      {children}
    </BaseLayout>
  )
}

export default Layout

//v1/en/plans
