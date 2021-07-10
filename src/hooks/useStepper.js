import { useCallback, useState } from "react"

const useStepper = ({ initialStep = 0, defaultData, stepsLength }) => {
  const [currentStep, setCurrentStep] = useState(initialStep)
  const [stepperData, setStepperData] = useState(defaultData)

  const next = useCallback(() => setCurrentStep(prevStep => prevStep + 1), [])

  const addStepperData = useCallback(
    dataToAdd => setStepperData(prevData => ({ ...prevData, ...dataToAdd })),
    []
  )
  return { currentStep, next, addStepperData, stepperData }
}

export default useStepper
