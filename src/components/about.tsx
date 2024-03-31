import { animate, inView, stagger } from "motion"
import { useEffect, useRef } from "react"

type AnimatedLineProps = {
  sentence: string
}
const AnimatedLine = ({ sentence }: AnimatedLineProps) => {
  const lineContainerRef = useRef<HTMLSpanElement>(null)
  const lineRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!lineContainerRef.current) return
    inView(lineContainerRef.current, () => {
      if (lineRef.current) {
        animate(
          lineRef.current,
          {
            opacity: 1,
            transform: "none",
          },
          {
            duration: 2,
            delay: stagger(0.2),
          }
        )
      }
    })
  }, [])

  return (
    <span className="inline-block md:text-3xl" ref={lineContainerRef}>
      <span
        className="inline-block md:text-3xl opacity-0 translate-y-10"
        ref={lineRef}
      >
        {sentence}
      </span>
    </span>
  )
}

const About = () => {
  return (
    <section className="h-screen mx-4 md:mx-40 flex items-center justify-center">
      <div className="text-center">
        <div
          className="flex flex-col items-center justify-center
       "
        >
          <AnimatedLine sentence="I am Hamza, creative developer based in Morocco, I work as a" />
          <AnimatedLine sentence="Web Developper with start-ups and individuals and as a teacher,I " />
          <AnimatedLine sentence="have a fondness for Web Developement designs, data analysis and" />
          <AnimatedLine sentence="interactive development." />
        </div>
      </div>
    </section>
  )
}

export default About
