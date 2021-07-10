const CHECKOUT_INFO_API = "https://reqres.in/api/users"
const postCheckoutInfos = data =>
  fetch(CHECKOUT_INFO_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

export default postCheckoutInfos
