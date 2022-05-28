import React from 'react'

export const useEventListener = (type, handler) => {
  const savedHandler = React.useRef()

  //let el = typeof window
  // if (typeof window !== 'undefined') {
  //   el = window
  // }

  React.useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  React.useEffect(() => {
    const listener = (e) => savedHandler.current(e)

    window.addEventListener(type, listener)

    return () => {
      window.removeEventListener(type, listener)
    }
  }, [type])
}
