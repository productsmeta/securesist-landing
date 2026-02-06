import * as React from "react"

/** Below this width: sheet (hamburger) menu. Above: full desktop nav. 1024 = tablet uses sheet too. */
const MOBILE_BREAKPOINT = 1024

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    // Use matchMedia.matches instead of window.innerWidth to avoid forced reflow
    const onChange = () => {
      setIsMobile(mql.matches)
    }
    mql.addEventListener("change", onChange)
    // Use requestAnimationFrame to batch the initial read
    requestAnimationFrame(() => {
      setIsMobile(mql.matches)
    })
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
