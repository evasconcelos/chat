const setTitleBackFromNewMessages = () => {
  let hidden, visibilityChange;
  if (typeof document.hidden !== 'undefined') {
    // Opera 12.10 and Firefox 18 and later support
    hidden = 'hidden';
    visibilityChange = 'visibilitychange';
  } else if (typeof document.msHidden !== 'undefined') {
    hidden = 'msHidden';
    visibilityChange = 'msvisibilitychange';
  } else if (typeof document.webkitHidden !== 'undefined') {
    hidden = 'webkitHidden';
    visibilityChange = 'webkitvisibilitychange';
  }

  function handleVisibilityChange() {
    if (!document[hidden]) {
      document.title = 'Chat';
    }
  }
  document.addEventListener(visibilityChange, handleVisibilityChange, false);
};
export default setTitleBackFromNewMessages;