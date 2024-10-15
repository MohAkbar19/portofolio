import { techStack } from '@/data'
import React from 'react'

const TechStackCarousel = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex animate-scroll space-x-8">
        {techStack.map((tech, index) => (
          <div key={index} className="bg-gray-200 rounded-lg shadow-md p-4 w-32">
            <img src={`/img/${tech}.png`} alt={tech} className="h-12 w-12 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStackCarousel
