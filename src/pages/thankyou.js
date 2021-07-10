import { graphql, navigate } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"
import React, { useMemo } from "react"
import postCheckoutInfos from "../api/postCheckoutInfos"
import CheckoutStepper, {
  Button,
  Label,
  Spacer,
  Title,
} from "../components/CheckoutStepper"
import Input from "../components/Input"
import Layout from "../components/Layout"
import useStepper from "../hooks/useStepper"
import isValidDate from "../utils/isValidDate"
import isValidEmail from "../utils/isValidEmail"

const Thankyou = ({ location: { search } }) => {
  const queryParams = new URLSearchParams(search)
  const id = queryParams.get("id")
  const device = queryParams.get("device")
  const { t } = useI18next()

  const { currentStep, next, addStepperData, stepperData } = useStepper({
    initialStep: 0,
    defaultData: { infos: "", email: "", birthDate: "" },
  })

  const stepperModel = [
    {
      title: "who-are-you",
      label: "infos",
      component: (
        <Input
          id="infos"
          type="text"
          onChange={evt => addStepperData({ infos: evt.target.value })}
          value={stepperData.infos}
        />
      ),
      isValid: stepperData.infos?.trim().length > 0,
      message: "infos-error",
    },
    {
      title: "email",
      label: "email",
      component: (
        <Input
          type="text"
          id="email"
          onChange={evt => addStepperData({ email: evt.target.value })}
          value={stepperData.email}
        />
      ),
      isValid:
        stepperData.email.trim().length > 0 &&
        isValidEmail(stepperData.email.trim()),
      message: "email-error",
    },
    {
      title: "birthDate",
      label: "birthDate",
      component: (
        <Input
          id="birthDate"
          type="date"
          onChange={evt => addStepperData({ birthDate: evt.target.value })}
          value={stepperData.birthDate}
        />
      ),
      isValid:
        stepperData.birthDate.trim().length > 0 &&
        isValidDate(stepperData.birthDate.trim()),
      message: "birthDate-error",
    },
  ]

  const { component, label, title, isValid, message } =
    stepperModel[currentStep]

  const isLastStep = useMemo(
    () => currentStep === stepperModel.length - 1,
    [currentStep, stepperModel.length]
  )

  const handleSubmit = e => {
    e.preventDefault()
    if (isLastStep && isValid) {
      return postCheckoutInfos({ ...stepperData, id, device }).then(
        handleSuccess
      )
    }
    if (isValid) {
      return next()
    }
    return alert(t(message))
  }
  const handleSuccess = () => {
    const confirmation = window.confirm(t("confirmation"))
    if (confirmation) {
      navigate("/")
    }
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <CheckoutStepper>
          <Title>{t(title)}</Title>
          <Label for={label}>{t(label)}</Label>
          {component}
          <Spacer height={15} />
          <Button type="submit">{isLastStep ? t("submit") : t("next")}</Button>
        </CheckoutStepper>
      </form>
    </Layout>
  )
}

export default Thankyou

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
