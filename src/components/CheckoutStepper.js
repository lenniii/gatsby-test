import styled from "styled-components"

const CheckoutStepper = styled.div`
  display: flex;
  flex-direction: column;
`
export default CheckoutStepper
export const Title = styled.h1``
export const Label = styled.label``
export const Button = styled.button`
  padding: 4px;
  border-radius: 4px;
  border-width: 1px;
  max-width: 210px;
`
export const Spacer = styled.div`
  height: ${({ height }) => height}px;
`
