import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  Airbus,
  Sportsyear,
  UNSW,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Java Developer",
    icon: backend,
  },
  {
    title: "Frontend JavaScript Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Database SQL Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Airbus",
    icon: Airbus,
    iconBg: "#383E56",
    date: "Mar 2023 - Present",
    points: [
      "Developed the Identify Friend or Foe (IFF) module independently by picking up the application layer structure of \
      large-scale Java Mission Planning application with over 2000+ classes within 1 week, composed interface and panel \
      design using the JGoodies library, designed 20+ real-time validation rules for user inputs, and added binary file \
      importing/exporting functionality.",
      "Integrated animated Unity components such as M134 Mini Gun, Hellfire, Countermeasure Flares into H145 VR\
      project using C# and Unity, enabling customers to customised their preferred configurations in real-time across\
      PC, VR devices, and iPad controller, indirectly resulted record-breaking 800+ aircraft purchases during the 2023\
      Paris Airshow.",
      "Updated corresponded documentation including Requirement Specification(SRS), Design Document(SDD), and\
      Test Plan(STD) for each Jira ticket.",
    ],
  },
  {
    title: "Junior Software Engineer",
    company_name: "Sportsyear",
    icon: Sportsyear,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Mar 2023",
    points: [
      "Developed the animated-poster Generator using JavaScript and GSAP motion library independently, creating\
      personalized weekly sport highlights for 150+ customers by asynchronously fetching data from a RESTful API,\
      saved design team 100+ hours from manually creating 500+ custom animated-posters per week.",
      "Designed an asynchronous multi-thread Shell Script program utilizing Bash and Node.js. Enhanced efficiency by\
      creating local mp4 files from 300+ hosted posters, resulting in a 10-fold acceleration of the process, saved over 30\
      hours of generating time every week.",
      "Practiced the DevOps methodology by containerising animated-poster Generators to Linux Virtual Machines, and\
      visualising onto Google Cloud (GCP), automating upload process from Cloud into Dropbox using Bash script,\
      resulted 95% reduction in instability issues and saved over 500 hours of local server production time annually.",
    ],
  },
  {
    title: "Bachlor of Science(Computer Science)",
    company_name: "UNSW Sydney",
    icon: UNSW,
    iconBg: "#383E56",
    date: "Mar 2018 - Dec 2022",
    points: [
      "Distinction Average (WAM: 82.7)",
      "High distinction Achievements:",
      "Data Structure and Algorithms: 89",
      "Algorithms and Programming Techniques: 89",
      "Database Systems: 88",
      "Computer Networks and Applications: 94",
      "Computer Science Project: 91",
    ],
  },
  {
    title: "Bachlor of Engineering(Honours)",
    company_name: "UNSW Sydney",
    icon: UNSW,
    iconBg: "#E6DEDD",
    date: "Mar 2018 - Dec 2022",
    points: [
      "Honours Class 2 Division 1 (Distinction Average)",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };