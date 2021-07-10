import React from "react"
import styled from "styled-components"
import LanguageSelector from "./LanguageSelector"
import "@fontsource/open-sans"

const BaseLayout = styled.div`
  max-width: 70vw;
  font-family: "Open Sans";
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
