const CARDS_API = `https://wnk07eo5oc.execute-api.eu-central-1.amazonaws.com/dev/v1/plans`

const getCards = ({ lang }) =>
  fetch(`${CARDS_API}?culture=${lang}`).then(res => res.json())

export default getCards
