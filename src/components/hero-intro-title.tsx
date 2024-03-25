import clsx from "clsx"
import { animate, inView, stagger } from "motion"
import { useEffect, useRef } from "react"

type AnimatedLetterProps = {
  letter: string
  alignment?: "left" | "right"
}

const AnimatedLetter = ({
  alignment = "left",
  letter,
}: AnimatedLetterProps) => {
  return (
    <span
      className={clsx(
        "inline-block text-[12vw] opacity-0 leading-[12vw]  font-medium uppercase",
        {
          "character-stagger-animation-left": alignment === "left",
          "character-stagger-animation-right": alignment === "right",
        }
      )}
    >
      {letter}
    </span>
  )
}

const HeroIntroTitle = () => {
  const firstTitleRef = useRef<HTMLSpanElement>(null)
  const secondTitleRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!firstTitleRef.current || !secondTitleRef.current) return
    inView(firstTitleRef.current, () => {
      animate(
        ".character-stagger-animation-left",
        {
          opacity: 1,
          transform: "none",
        },
        {
          duration: 4,
          delay: stagger(0.1),
        }
      )
    })
    inView(secondTitleRef.current, () => {
      animate(
        ".character-stagger-animation-right",
        {
          opacity: 1,
          transform: "none",
        },
        {
          duration: 4,
          delay: stagger(0.1),
        }
      )
    })
  }, [])

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="mx-auto flex flex-col items-center justify-center">
        <span ref={firstTitleRef}>
          <AnimatedLetter letter="C" alignment="left" />
          <AnimatedLetter letter="r" alignment="left" />
          <AnimatedLetter letter="e" alignment="left" />
          <AnimatedLetter letter="a" alignment="left" />
          <AnimatedLetter letter="t" alignment="left" />
          <AnimatedLetter letter="i" alignment="left" />
          <AnimatedLetter letter="v" alignment="left" />
          <AnimatedLetter letter="e" alignment="left" />
        </span>
        <span ref={secondTitleRef}>
          <AnimatedLetter letter="D" alignment="right" />
          <AnimatedLetter letter="e" alignment="right" />
          <AnimatedLetter letter="v" alignment="right" />
          <AnimatedLetter letter="e" alignment="right" />
          <AnimatedLetter letter="l" alignment="right" />
          <AnimatedLetter letter="o" alignment="right" />
          <AnimatedLetter letter="p" alignment="right" />
          <AnimatedLetter letter="e" alignment="right" />
          <AnimatedLetter letter="r" alignment="right" />
        </span>
      </div>
    </section>
  )
}

export default HeroIntroTitle
