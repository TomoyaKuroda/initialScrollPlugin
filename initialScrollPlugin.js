function initialScrollPlugin({offset = 0} = {}) {
function replaceHistoryState(href) {
  const hrefWithoutHash = href.replace(window.location.hash, '')
  window.history.replaceState({}, 'Title', hrefWithoutHash)
}

function scrollToHashElement(hashElement) {
  scroll({
    top: hashElement.offsetTop - offset,
    behavior: "smooth"
  });
}

return function() {
  const href = window.location.href
  const hash = window.location.hash
  const hashElement = document.getElementById(hash.substr(1))
  const needsInitialScroll = hashElement != null

  if (needsInitialScroll) {
    replaceHistoryState(href)
  }

  window.addEventListener(
    'load',
    () => {
      if (needsInitialScroll) {
        scrollToHashElement(hashElement)
        window.history.replaceState({}, 'Title', href)
      }
    },
    false
  )
  }
}
