import clsx from "clsx"
import { animate } from "motion"
import { useState } from "react"
import { PROJECTS } from "../contants"

interface IProject {
  title: string
  image: string
  url: string
  prefix: string
}

type ProjectProps = {
  project: IProject
  index: number
}

const Project = ({ project, index }: ProjectProps) => {
  const { image, prefix, title, url } = project

  const [activeImage, setActiveImage] = useState(-1)
  const handleOnMouseEnter = () => {
    setActiveImage(index)
    const activeImage = document.querySelector("." + prefix + "-image")
    if (!activeImage) return
    animate(
      activeImage,
      {
        opacity: 1,
        transform: "scale(1.2)",
      },
      {
        duration: 1.4,
      }
    )
  }
  const handleOnMouseLeave = () => {
    setActiveImage(index)
    const activeImage = document.querySelector("." + prefix + "-image")
    if (!activeImage) return
    animate(
      activeImage,
      {
        opacity: 0,
        transform: "none",
      },
      {
        duration: 1.4,
      }
    )
  }
  return (
    <div
      className="flex border-b-2 border-black py-24"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <div
        className={clsx(
          prefix +
            "-image-wrapper flex items-center justify-between flex-1 mr-20"
        )}
      >
        <h2
          className="text-[4vw] uppercase font-semibold
        "
        >
          {title}
        </h2>
        <div className="overflow-hidden w-[420px] h-[256px] rounded-2xl">
          <img
            src={image}
            className={clsx(prefix + "-image rounded-xl opacity-0", {
              "opacity-100": activeImage === index,
            })}
            alt=""
            width={420}
            height={256}
          />
        </div>
      </div>
    </div>
  )
}

const Work = () => {
  return (
    <section className="mx-24">
      {PROJECTS.map((projectItem, index) => (
        <Project key={projectItem.title} index={index} project={projectItem} />
      ))}
    </section>
  )
}

export default Work
