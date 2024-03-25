import { animate, inView, stagger } from "motion"
import { useEffect, useRef } from "react"

type TransformYAxisTextProps = {
  sentence: string
}

const TransformYAxisText = ({ sentence }: TransformYAxisTextProps) => {
  const sentenceContainerRef = useRef<HTMLSpanElement>(null)
  const sentenceRef = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    if (!sentenceContainerRef.current) return
    inView(sentenceContainerRef.current, () => {
      if (!sentenceRef.current) return
      animate(
        sentenceRef.current,
        {
          opacity: 1,
          transform: "none",
        },
        {
          duration: 2,
          delay: stagger(0.2),
        }
      )
    })
  }, [])

  return (
    <span
      className="inline-block leading-[5vw] text-[5vw] overflow-hidden"
      ref={sentenceContainerRef}
    >
      <span
        className="inline-block uppercase leading-[4vw] text-[5vw] opacity-0 translate-y-[5vw]"
        ref={sentenceRef}
      >
        {sentence}
      </span>
    </span>
  )
}

const Services = () => {
  return (
    <section
      className="h-screen flex items-center jusce
  "
    >
      <div className="mx-auto">
        <h3 className="text-3xl">Services I can help you with</h3>

        <div className="h-10"></div>
        <div className="flex flex-col">
          <TransformYAxisText sentence="Web Developement." />
          <TransformYAxisText sentence="Database Administration." />
          <TransformYAxisText sentence="Data Analysis." />
          <TransformYAxisText sentence="Machine Learning." />
        </div>
      </div>
    </section>
  )
}

export default Services
