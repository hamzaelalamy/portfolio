import { animate, inView, scroll } from "motion"
import { useEffect, useRef } from "react"

const SelectedWork = () => {
  const selectedWorkContainerRef = useRef<HTMLDivElement>(null)
  const selectedWorkRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!selectedWorkContainerRef.current) return

    inView(selectedWorkContainerRef.current, () => {
      if (!selectedWorkRef.current) return
      scroll(
        animate(
          selectedWorkRef.current,
          {
            x: [-200, 200],
          },
          {
            duration: 1.4,
          }
        ),
        {
          target: selectedWorkRef.current,
        }
      )
    })
  }, [])

  return (
    <section
      className="h-screen overflow-hidden flex items-center justify-center"
      ref={selectedWorkContainerRef}
    >
      <h2 ref={selectedWorkRef} className="uppercase text-[12vw]">
        Selected work
      </h2>
    </section>
  )
}

export default SelectedWork
