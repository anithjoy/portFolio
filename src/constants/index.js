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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  gaitProject,
  jobit,
  tripguide,
  threejs,
  projectManagement,
  workMate,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    title: "Biometric Identification System using GAIT Analysis ",
    company_name: "University of Mumbai",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2020 - April 2021",
    points: [
      "Biometric systems are becoming increasingly important since they provide more reliable and efficient means of identity verification.",
      "Identification of a person based on gait has created a sphere of curiosity in the computer vision domain due to its high recognition capability even at a far distance with simple instrumentation.",
      "It does not require the cooperation or even awareness of the individual under observation. Gait recognition technology has many civilian and highsecurity applications like car parks, banks, military bases, railway stations and airports. ",
      "The project aims to develop an automatic biometric system to identify a person based on his Gait cycle.",
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
    name: "Project Management Application",
    description:
      "Developed a Web Application for managing various projects and tasks for the user in NodeJS environment.Led the development project by coming up with a roadmap and direction for the team to follow and was primarily responsible for implementing key features of the project. Developed back-end functionality with NodeJS and MongoDB and front end with HTML, CSS, and JavaScript.",
    tags: [
      {
        name: "NodeJS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: projectManagement,
    source_code_link: "https://github.com/anithjoy/Final-Project-CS546",
  },
  {
    name: "Workmate",
    description:
      "Workmate is a software tool similar to Jira, designed to improve team task management. It offers a range of features to help users plan, track and release software, and monitor task progress in real-time. The tool includes features like comments, deadlines, project managers, assignees, statuses, and dependencies to enable better collaboration. Workmate supports agile methodologies with kanban boards and advanced reporting, making it suitable for teams across all industries and sizes. Its user-friendly interface and flexible features make it a popular choice for improving team productivity.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.io",
        color: "green-text-gradient",
      },
      {
        name: "Redis",
        color: "pink-text-gradient",
      },
      {
        name: "Docker ",
        color: "blue-text-gradient",
      },
      {
        name: "ImageMagick ",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: workMate,
    source_code_link: "",
  },
  {
    name: "Biometric Identification System using GAIT Analysis",
    description:
      "Researched and implemented numerous techniques and methodologies to devise a feasible Biometric Identification System using GAIT Analysis.Employed techniques such as Background Extraction, feature extraction techniques, auto focusing on subject to compare two images. Implemented open-source computer Researched Human GAIT Cycle and its entropy images.",
    tags: [
      {
        name: "Open Source Computer Vision",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: gaitProject,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
