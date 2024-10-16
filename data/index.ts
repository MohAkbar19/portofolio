import { style } from "framer-motion/client"

export const gridItems = [
  {
    id:1, 
    title: "Nur Arini", 
    headline: "Freelance Web Developer", 
    description: `Hi! I’m Nur Arini, a passionate and dedicated Freelance Front-End Web Developer based in Bandung, Indonesia. I specialize in creating responsive, user-centric websites with a focus on clean, efficient code and modern design. With experience in HTML, CSS, JavaScript, React, and TypeScript, I have worked on various web development projects, ranging from small business websites to more complex applications.`, 
    className:'text-2xl flex', 
    img:'./fotome.png',
    stylemain:'flex flex-col sm:flex-row justify-center gap-4 pl-5',
    style1:'w-full sm:w-[25%] flex justify-center',
    style2:'w-full sm:w-[75%]'
  },
  {
    id:2,
    title: "My Tech Stack", 
    description: "Currently using",
    stylemain: "flex flex-col justify-center gap-4 pl-5",
    style1 : "hidden",
    style2 : "w-full px-6",
  },
  {
    id:3,
    title: "Connect with me on:", 
    style1: "hidden",
    style2: "w-full px-6",
  },
  {id:4,title: "Title 1", description: "Description 1"}
]

export const techStack = [
  "nextjs", 
  "typescript", 
  "tailwindcss", 
  "react", 
  "mongo", 
  "express", 
  "node",
]

export const projects = [
  { 
    id:8,
    title: "Personal Finance - SaldaQ", 
    description: "Klinik Smartphone is an interactive landing page designed to introduce smartphone repair services to potential customers.This landing page displays important information such as types of repair services,testimonials, and options to contact customer service.",
    img: "/finance.png", 
    tech: ["react", "typescript", "mongo", "express","node","tailwindcss"],
    linkGithub: "https://github.com/nrrarnn/klinik-smartphone", 
    linkWebsite: "https://klinik-smartphone.netlify.app/"
  }, 
  { 
    id:7,
    title: "WellEat", 
    description: "Klinik Smartphone is an interactive landing page designed to introduce smartphone repair services to potential customers.This landing page displays important information such as types of repair services,testimonials, and options to contact customer service.",
    img: "/welleat.png", 
    tech: ["react", "typescript", "tailwindcss"],
    linkGithub: "https://github.com/nrrarnn/klinik-smartphone", 
    linkWebsite: "https://klinik-smartphone.netlify.app/"
  }, 
  { 
    id:1,
    title: "Klinik Smartphone", 
    description: "Klinik Smartphone is an interactive landing page designed to introduce smartphone repair services to potential customers.This landing page displays important information such as types of repair services,testimonials, and options to contact customer service.",
    img: "/project-1.png", 
    tech: ["nextjs", "typescript", "tailwindcss"],
    linkGithub: "https://github.com/nrrarnn/klinik-smartphone", 
    linkWebsite: "https://klinik-smartphone.netlify.app/"
  }, 
  { 
    id:2,
    title: "Duriat Food", 
    description: "Duriat Food is a landing page I created for a catering business. It offers a streamlined way for customers to explore diverse menu options. The user-friendly design allows visitors to effortlessly browse and select dishes tailored to their specific events.",
    img: "/project-2.png", 
    tech: ["react", "typescript", "tailwindcss"],
    linkGithub: "https://github.com/nrrarnn/duriat-food", 
    linkWebsite: "https://duriat-food.netlify.app/"
  }, 
  { 
    id:3,
    title: "Enigma Laundry", 
    description: "Duriat Food is a landing page I created for a catering business. It offers a streamlined way for customers to explore diverse menu options. The user-friendly design allows visitors to effortlessly browse and select dishes tailored to their specific events.",
    img: "/laundry.png", 
    tech: ["react", "js", "tailwindcss"],
    linkGithub: "https://github.com/nrrarnn/duriat-food", 
    linkWebsite: "https://duriat-food.netlify.app/"
  }, 
  { 
    id:4,
    title: "Sarah Shop", 
    description: "Duriat Food is a landing page I created for a catering business. It offers a streamlined way for customers to explore diverse menu options. The user-friendly design allows visitors to effortlessly browse and select dishes tailored to their specific events.",
    img: "/shop.png", 
    tech: ["react", "js", "tailwindcss"],
    linkGithub: "https://github.com/nrrarnn/duriat-food", 
    linkWebsite: "https://duriat-food.netlify.app/"
  }, 
  { 
    id:5,
    title: "Ryn Movie", 
    description: "Duriat Food is a landing page I created for a catering business. It offers a streamlined way for customers to explore diverse menu options. The user-friendly design allows visitors to effortlessly browse and select dishes tailored to their specific events.",
    img: "/movie.png", 
    tech: ["react", "js", "tailwindcss"],
    linkGithub: "https://github.com/nrrarnn/duriat-food", 
    linkWebsite: "https://duriat-food.netlify.app/"
  }, 
  { 
    id:6,
    title: "Ryn Recipes", 
    description: "Duriat Food is a landing page I created for a catering business. It offers a streamlined way for customers to explore diverse menu options. The user-friendly design allows visitors to effortlessly browse and select dishes tailored to their specific events.",
    img: "/recipes.png", 
    tech: ["react", "js", "tailwindcss"],
    linkGithub: "https://github.com/nrrarnn/duriat-food", 
    linkWebsite: "https://duriat-food.netlify.app/"
  }, 
]