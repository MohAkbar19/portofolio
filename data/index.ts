export const gridItems = [
  {
    id:1, 
    title: "Nur Arini", 
    headline: "Freelance Web Developer", 
    description: `Hi! I’m Nur Arini, a passionate and dedicated Freelance Front-End Web Developer based in Bandung, Indonesia. I specialize in creating responsive, user-centric websites with a focus on clean, efficient code and modern design. With experience in HTML, CSS, JavaScript, React, and TypeScript, I have worked on various web development projects, ranging from small business websites to more complex applications.`, 
    className:'text-2xl flex', 
    img:'/fotome.png',
    stylemain:'flex flex-col sm:flex-row justify-center gap-4 pl-5',
    style1:'w-full sm:w-[25%] flex justify-center items-center -mt-6',
    style2:'w-full sm:w-[75%]'
  },
  {
    id:2,
    title: "My Tech Stack", 
    description: "Currently using",
    stylemain: "flex flex-col justify-center gap-4 pl-5 w-full",
    style1 : "hidden",
    style2 : "w-full px-6",
  },
  {
    id:3,
    title: "Connect with me on:", 
    style1: "hidden",
    style2: "w-full px-6",
  },
  {
    id: 4,
    title: "My Approach: I create functional, visually appealing designs with clean, scalable code, ensuring efficient performance across platforms.", 
    stylemain: 'flex flex-col justify-end gap-4 pl-5',
    style1: 'hidden',
    style2: 'w-full px-6',
    className: "bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
  }

]

export const techStack = [
  "nextjs", 
  "typescript", 
  "tailwindcss", 
  "react", 
  "mongo", 
  "express", 
  "node",
  "laravel",
  "php",
  "python",
  "mysql",
  "postman",
  "html",
  "css",
  "git"
]


export const services = [
  {
    "id": 2,
    "title": "Web Design",
    "description": "Creating visually appealing and functional websites focused on intuitive user experience across all devices.",
    "icon": "🎨"
  },
  {
    "id": 3,
    "title": "Front-End Development",
    "description": "Developing responsive and performant user interfaces using HTML, CSS, JavaScript, and modern frameworks.",
    "icon": "💻"
  },
  {
    "id": 4,
    "title": "Web Development",
    "description": "Building fast, secure, and scalable websites using modern technologies to meet your business goals.",
  }
];


export const projects = [
  { 
    id:8,
    title: "Personal Finance - SaldaQ", 
    description: " SaldaQ is a simple app designed for students to manage income, expenses, and categories. It tracks transactions and visualizes balance efficiently",
    img: "/finance.png", 
    tech: ["react", "typescript", "mongo", "express","node","tailwindcss"],
    linkGithub: "https://github.com/nrrarnn/personal-finance-frontend", 
  }, 
  { 
    id:7,
    title: "WellEat", 
    description: "Welleat is a platform focused on providing healthy recipes, helping users discover nutritious meals and make better food choices for a healthier lifestyle.",
    img: "/welleat.png", 
    tech: ["react", "typescript", "tailwindcss"],
    linkGithub: "https://github.com/nrrarnn/welleat", 
  }, 
  { 
    id:1,
    title: "Klinik Smartphone", 
    description: "Klinik Smartphone is an interactive landing page showcasing smartphone repair services, featuring service types, customer testimonials, and easy contact options for customer support.",
    img: "/project-1.png", 
    tech: ["nextjs", "typescript", "tailwindcss"],
    linkGithub: "https://github.com/nrrarnn/klinik-smartphone", 
  }, 
  { 
    id:2,
    title: "Duriat Food", 
    description: "Duriat Food is a catering business landing page offering a user-friendly way for customers to browse diverse menu options and select dishes for their events.",
    img: "/project-2.png", 
    tech: ["react", "typescript", "tailwindcss"],
    linkGithub: "https://github.com/nrrarnn/duriat-food", 
  }, 
  { 
    id:3,
    title: "Enigma Laundry", 
    description: "Enigma Laundry is an admin dashboard designed for a laundry business. Admins can manage products and customers.",
    img: "/laundry.png", 
    tech: ["react", "js", "tailwindcss"],
    linkGithub: "https://github.com/nrrarnn/challenge-react-laundry", 
  }, 
  { 
    id:4,
    title: "Sarah Shop", 
    description: "Sarah Shop is a landing page created for an online store, offering a sleek and user-friendly interface for customers to browse products.",
    img: "/shop.png", 
    tech: ["react", "js", "tailwindcss"],
    linkGithub: "https://github.com/nrrarnn/olshop-react", 
  }, 
  { 
    id:5,
    title: "Ryn Movie", 
    description: "Ryn Movie is a platform featuring a landing page that showcases an extensive library of films and seamless navigation for an enhanced viewing experience.",
    img: "/movie.png", 
    tech: ["react", "js", "tailwindcss"],
    linkGithub: "https://github.com/nrrarnn/ryn-movies-react", 
  }, 
  { 
    id:6,
    title: "Ryn Recipes", 
    description: "Ryn Recipes is a platform with a landing page that offers a diverse collection of recipes, helping users explore and discover dishes for any occasion.",
    img: "/recipes.png", 
    tech: ["react", "js", "tailwindcss"],
    linkGithub: "https://github.com/nrrarnn/ryn-recipes", 
  }, 
]