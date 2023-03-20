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
 jobit,
 tripguide,
 threejs,
 coursera,
 microsoft,
 google,
 azure,
 meta1,
} from "../assets";

export const navLinks = [
 {
   id: "about",
   title: "Skills",
 },
 {
   id: "work",
   title: "Work",
 },
//  {
//   id: "Learn",
//   title: "Work",
// },
 {
   id: "contact",
   title: "Contact",
 },
];

const services = [
 {
   title: "Programming languages:",
   title1: "Java, Python, JavaScript, OOP",
  //  icon: web,
 },
 {
  title: "Front-end development:",
  title1: "HTML, CSS, JavaScript, React, Responsive Web Design",
  icon: web,
},
{
  title: "Back-end development:",
  title1: "Node.js, Express, RESTful API",
  icon: web,
},
{
  title: "Database management:",
  title1: "PostgreSQL, MySQL",
  icon: web,
},
{
  title: "DevOps & Version control:",
  title1: "CI/CD, Docker, Kubernetes & Git",
  icon: web,
},
// {
//   title: "Version control:",
//   title1: "Git",
//   icon: web,
// },
//  {
//    title: "PostgreSQL, NoSQL, Azure Cosmos Database",
//    icon: mobile,
//  },
//  {
//    title: "Apache Spark, Azure Data Factory, Azure Data Bricks, Azure Synapse Analytics, Power BI",
//    icon: backend,
//  },
//  {
//    title: "Azure Synapse Analytics, Azure Data Lake storage",
//    icon: creator,
//  },
 
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
//  {
//    name: "Redux Toolkit",
//    icon: redux,
//  },
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
   title: "Data Engineer",
   company_name: "SAP",
   icon: starbucks,
   iconBg: "#383E56",
   date: "Jul 2022 - Dec 2022",
   points: [
   "Developed and maintained data replication pipelines using SAP SLT, resulting in a 30% reduction in data processing time.",
   "Designed and implemented custom data processing pipelines using SAP Data Intelligence, resulting in a 25% increase in data processing efficiency.",
   "Worked with cross-functional teams to identify and resolve data quality issues, resulting in a 20% improvement in data accuracy.",
   "Conducted performance tuning for data processing pipelines, resulting in a 10% reduction in data processing costs.",
   "Developed and maintained technical documentation for data processing pipelines, resulting in a 40% reduction in support requests from end-users.",
   ],
 },
 {
   title: "Software Development Analyst",
   company_name: "Accenture",
   icon: tesla,
   iconBg: "#E6DEDD",
   date: "Mar 2021 - Jan 2022",
   points: [
     "Designed and implemented new functionalities for SAP EWM, resulting in a 20% increase in overall warehouse efficiency.",
     "Tested and validated SAP EWM functionality changes using Jira, resulting in a 15% reduction in post-deployment defects.",
     "Maintained and resolved incidents related to SAP EWM using ServiceNow, achieving a 90% resolution rate within SLA.",
     "Worked with cross-functional teams to analyze and improve existing SAP EWM processes, resulting in a 25% reduction in processing time.",
     "Conducted training sessions for end-users on SAP EWM processes and functionality, resulting in a 95% user adoption rate.",
   ],
 },
 {
   title: "Associate Software Developer",
   company_name: "Accenture",
   icon: shopify,
   iconBg: "#383E56",
   date: "Aug 2019 - Mar 2021",
   points: [
     "Led the development of web applications to train new joiners and warehouse workers on SAP EWM functionalities.",
     "Developed user-friendly interfaces for web applications using React and Redux.",
     "Designed and implemented RESTful APIs for web applications using Node.js and Express.",
     "Collaborated with cross-functional teams to integrate web applications with SAP EWM, resulting in improved warehouse efficiency.",
     "Conducted code reviews and provided feedback to team members to ensure the quality of web applications.",
   ],
 },
 {
   title: "Full stack Developer (Intern)",
   company_name: "National Infomatics center",
   icon: meta,
   iconBg: "#E6DEDD",
   date: "Dec 2018 - Jul 2019",
   points: [
     "Developed a web-based application using React and Node.js that improved customer engagement by 30%.",
     "Designed and implemented a new feature for an existing application that resulted in a 25% increase in user adoption.",
     "Collaborated with cross-functional teams to improve software development processes, resulting in a 15% reduction in time-to-market.",    
     "Conducted automated testing using Jest, resulting in a 90% reduction in manual testing time.",
     "Created and maintained technical documentation for the application, resulting in a 40% reduction in support requests from end-users.",
   ],
 },
];

const testimonials = [
 {
   testimonial:
     "Microsoft Azure Fundamentals",
   image:microsoft,
   source_link:"https://www.credly.com/badges/a02f82bb-4a6e-479d-932b-fb4b9ee26efd/public_url",
 },
 {
  testimonial:
    "Microsoft Azure Data Fundamentals",
  image: microsoft,
  source_link:"https://www.credly.com/badges/604509e7-eec9-4c46-a1e2-8c5865754ab0/public_url",
},
 {
   testimonial:
     "Introduction to Docker",
   image: google,
   source_link:"https://www.coursera.org/account/accomplishments/certificate/M9DNCSFPNLTR",
 },
 {
   testimonial:
     "Microsoft Azure Relational Databases",
   image: coursera,
   source_link:"https://www.coursera.org/account/accomplishments/certificate/KXQHXY79EF5K",
 },
 {
  testimonial:
    "Introduction to Front-End Development",
  image: meta1,
  source_link:"https://www.coursera.org/account/accomplishments/certificate/UZ49R2UWKLZM",
 },
 {
  testimonial:
    "Python, Bash and SQL for Data Engineering",
  image: coursera,
  source_link:"https://www.coursera.org/account/accomplishments/specialization/certificate/YDVU5WQTQHZR",
 },
 {testimonial:
    "Object-Oriented Programming with Java",
  image: coursera,
  source_link:"https://www.coursera.org/account/accomplishments/certificate/AAQQ2WRRJN8G",
},
{testimonial:
  "Microsoft Azure for Data Engineering",
image: azure,
source_link:"https://www.coursera.org/account/accomplishments/certificate/LE56EUEQ55RB",
},
];

const projects = [
 {
   name: "Real Estate Admin Dashboard",
   description:
     "Developed a fully functional full-stack MERN dashboard application with complete CRUD functionalities, authentication, pagination, sorting, filtering, and more!, providing a convenient and efficient solution for transportation needs.",
   tags: [
     {
       name: "mongodb",
       color: "green-text-gradient",
     },
     {
       name: "express.js",
       color: "pink-text-gradient",
     },
     {
      name: "react.js",
      color: "blue-text-gradient",
    },
    {
      name: "node.js",
      color: "green-text-gradient",
    },
   ],
   image: carrent,
   source_code_link: "https://github.com/divyachahal/Real-Estate-Admin-Dashboard",
 },
 {
   name: "AI Image Generation App",
   description:
     "Build and Deployed a Full Stack MERN AI Image Generation App. Create stunning images with ease using our AI-powered image generation app.",
   tags: [
     {
       name: "MERN",
       color: "blue-text-gradient",
     },
     {
       name: "restapi",
       color: "green-text-gradient",
     },
     {
       name: "tailwind",
       color: "pink-text-gradient",
     },
   ],
   image: jobit,
   source_code_link: "https://github.com/divyachahal/AI-Image-Generation-App",
 },
 {
   name: "CodeGPT AI App",
   description:
     "With an elegant user interface, communication with advanced GPT3 model API, and help regarding programming language, giving it code and translating it to another programming language.",
   tags: [
     {
       name: "react",
       color: "blue-text-gradient",
     },
     {
       name: "openAI",
       color: "green-text-gradient",
     },
     {
       name: "css",
       color: "pink-text-gradient",
     },
   ],
   image: tripguide,
   source_code_link: "https://github.com/divyachahal/CodeGpt",
 },
];

export { services, technologies, experiences, testimonials, projects };