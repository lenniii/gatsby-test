import styled from "styled-components"

const CardsList = styled.div`
  display: flex;
  width: 90vw;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 0 auto;
  padding: 1rem;
  &::-webkit-scrollbar {
    display: ${({ isMobile }) => isMobile && "none"};
  }
`

export default CardsList
