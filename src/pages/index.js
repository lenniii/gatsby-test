import React, { useEffect, useMemo, useState } from "react"

import Layout from "../components/Layout"
import { useI18next } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
import getCards from "../api/getCards"
import CardsList from "../components/CardsList"
import Card, {
  BottomCard,
  Name,
  Price,
  SelectButton,
  UpperCard,
} from "../components/Card"
import isMobile from "../utils/isMobile"

const IndexPage = () => {
  const { t, language } = useI18next()

  const [cards, setCards] = useState()

  useEffect(() => {
    getCards({ lang: language }).then(setCards)
  }, [language])

  const deviceQuery = useMemo(
    () => `device=${isMobile ? "mobile" : "desktop"}`,
    []
  )

  const renderCards = useMemo(
    () => (
      <CardsList isMobile={isMobile}>
        {cards?.map(card => (
          <Card key={card.id}>
            <UpperCard>
              <Name>{card.name}</Name>
              <Price>{card.price}€</Price>
            </UpperCard>
            <BottomCard>
              <SelectButton to={`/thankyou?id=${card.id}&${deviceQuery}`}>
                {t("select")}
              </SelectButton>
            </BottomCard>
          </Card>
        ))}
      </CardsList>
    ),
    [cards, t, deviceQuery]
  )

  return <Layout>{cards ? renderCards : <h1>{t("loading")}</h1>}</Layout>
}
export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

export default IndexPage
