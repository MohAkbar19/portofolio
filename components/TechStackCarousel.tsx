import { techStack } from '@/data'
import React from 'react'

const TechStackCarousel = () => {
  return (
    <div className="overflow-hidden px-12 mt-4">
      <div className="whitespace-nowrap animate-infiniteScroll">
        {techStack.map((tech, index) => (
          <span key={index} className="inline-block mx-4 text-xl font-semibold text-white">
              <img src={`/${tech}.png`} alt={tech} className="h-20 w-20 mx-auto" />
          </span>
        ))}
      </div>
    </div>
  )
}

export default TechStackCarousel
