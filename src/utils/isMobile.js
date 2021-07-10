/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
 *
 * this approach is unreliable but for semplicity sake i will use this
 * if i had specifications for breakpoint i would have used them
 */
const isMobile = /Mobi/i.test(window.navigator.userAgent)
export default isMobile
