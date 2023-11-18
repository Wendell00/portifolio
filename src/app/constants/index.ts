const experienceData = [
  {
    src: '/img/nglogo.jpg',
    company: 'Northrop Grumman',
    type: 'Full-Time',
    role: 'Technician',
    from: '2021',
    to: 'Present',
    accomplishments: [
      'Proficiently diagnosed and resolved issues in legacy computer applications.',
      'Manufactured composite components for the Airbus A400M aircraft using proprietary machinery.',
      'Collaborated with System Engineers, providing valuable feedback on software enhancements.',
      'Operated sophisticated Airbus computer systems to ensure parts maintain quality and consistency. ',
    ],
  },
  {
    src: '/img/mmbclogo.jpg',
    company: 'MMBC',
    type: 'Contract',
    role: 'Web Developer',
    from: '2020',
    to: 'Present',
    accomplishments: [
      'Built a lightning-fast single page application with React and Tailwind CSS.',
      'Increased website inquiries from 2% to 18% month over month.',
      'Demonstrated expertise in responsive design, accessibility, and mobile optimization.',
      'Continuously updated skills and knowledge to stay at the forefront of web development trends.',
    ],
  },
  {
    src: '/img/mixdlogo.png',
    company: 'Mixdlabs',
    type: 'Full-Time',
    role: 'Chief Technology Officer',
    from: '2015',
    to: '2020',
    accomplishments: [
      'Created a bespoke Shopify theme tailored to specific project requirements.',
      'Developed a wholesale portal for our retail clients which resulted in a $140,000 increase in annual revenue.',
      'Optimized page load speeds and SEO which lead to a 36% increase in organic traffic.',
      'Learned the liquid templating language.',
    ],
  },
]

const svgJsIcon = `<svg class="w-[40px]" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <path fill-rule="nonzero" clip-rule="nonzero" d="M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM8.25 5.75C8.66421 5.75 9 6.08579 9 6.5V10.5C9 11.5048 8.72399 12.2584 8.15514 12.7324C7.61223 13.1848 6.95384 13.25 6.5 13.25C6.08579 13.25 5.75 12.9142 5.75 12.5C5.75 12.0858 6.08579 11.75 6.5 11.75C6.84617 11.75 7.06277 11.6902 7.19486 11.5801C7.301 11.4916 7.5 11.2452 7.5 10.5V6.5C7.5 6.08579 7.83578 5.75 8.25 5.75ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z" fill="#999"></path>
  </g>
</svg>`;



const svgPathVariant1 = {
  open: { d: 'M3.06061 2.99999L21.0606 21' },
  closed: { d: 'M0 8.5L24 8.5' },
}

const svgPathVariant2 = {
  open: { d: 'M3.00006 21.0607L21 3.06064' },
  moving: { d: 'M0 14.5L24 14.5' },
  closed: { d: 'M0 14.5L12 14.5' },
}

const firstVariant = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      ease: 'easeInOut',
      stiffness: 30,
      delay: 0.07142857142,
    },
  },
  closed: {
    x: -100,
    opacity: 0,
    transition: { type: 'spring', ease: 'easeInOut' },
  },
}
const secondVariant = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      ease: 'easeInOut',
      stiffness: 30,
      delay: 0.14285714284,
    },
  },
  closed: {
    x: -100,
    opacity: 0,
    transition: { type: 'spring', ease: 'easeInOut' },
  },
}

const thirdVariant = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      ease: 'easeInOut',
      stiffness: 30,
      delay: 0.21428571426,
    },
  },
  closed: {
    x: -100,
    opacity: 0,
    transition: { type: 'spring', ease: 'easeInOut' },
  },
}

const fourthVariant = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      ease: 'easeInOut',
      stiffness: 30,
      delay: 0.28571428568,
    },
  },
  closed: {
    x: -100,
    opacity: 0,
    transition: { type: 'spring', ease: 'easeInOut' },
  },
}

const fifthVariant = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      ease: 'easeInOut',
      stiffness: 30,
      delay: 0.3571428571,
    },
  },
  closed: {
    x: -100,
    opacity: 0,
    transition: { type: 'spring', ease: 'easeInOut' },
  },
}

const sixthVariant = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      ease: 'easeInOut',
      stiffness: 30,
      delay: 0.42857142852,
    },
  },
  closed: {
    x: -100,
    opacity: 0,
    transition: { type: 'spring', ease: 'easeInOut' },
  },
}

const seventhVariant = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      ease: 'easeInOut',
      stiffness: 30,
      delay: 0.5,
    },
  },
  closed: {
    x: -100,
    opacity: 0,
    transition: { type: 'spring', ease: 'easeInOut' },
  },
}

const socialLinks = {
  github: 'https://github.com/christianbmartinez',
  linkedin: 'https://www.linkedin.com/in/cmartinez1089/',
  tiktok: 'https://www.tiktok.com/@coderchris',
  twitter: 'https://twitter.com/_coderchris',
  codepen: 'https://codepen.io/_coderchris',
}

const portfolioData = [
  {
    title: 'Portfolio Site',
    imgUrl:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    alt: 'Image for christians portfolio site project',
    description:
      'My old portfolio site built with react, bootstrap, and threejs.',
    repo: 'https://github.com/christianbmartinez/cbm_2022',
    href: 'https://preeminent-raindrop-7e0d9e.netlify.app/',
    tags: ['#REACT', '#BOOTSTRAP'],
  },
  {
    title: 'Colorfill App',
    imgUrl:
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    alt: 'Image for christians colorfill app project',
    description:
      'A css tool that configures text fill animations. Also available on npm.',
    repo: 'https://github.com/christianbmartinez/colorfill',
    href: 'https://codepen.io/_coderchris/pen/KKgyywR',
    tags: ['#CSS VARIABLES', '#JS'],
  },
  {
    title: 'Full Stack Blog',
    imgUrl:
      'https://plus.unsplash.com/premium_photo-1686041335799-a140e5b3b35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    alt: 'Image for christians full stack blog project',
    description: 'A full stack tech blog written with MVC architecture',
    repo: 'https://github.com/christianbmartinez/tech-blog',
    href: 'https://guarded-ocean-61686-3600ffdf6cf0.herokuapp.com/',
    tags: ['#EXPRESS', '#HANDLEBARS'],
  },
  {
    title: 'Consulting Site',
    imgUrl:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
    alt: 'Image for christians mmbc website project',
    description: 'A single page application built with react and tailwind.',
    repo: 'https://github.com/christianbmartinez/mmbc',
    href: 'https://www.mmbc.llc/',
    tags: ['#TAILWIND', '#REACT'],
  },
  {
    title: 'Employee Tracker',
    imgUrl:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Image for christians employee tracker project',
    description: 'A node cli application that uses mysql to manage employees.',
    repo: 'https://github.com/christianbmartinez/employee-tracker',
    href: 'https://drive.google.com/file/d/1uLsYvFhE-2sl5wxVCUevMd-yZhQ4aVN0/view',
    tags: ['#INQUIRER', '#MYSQL'],
  },
  {
    title: 'Mysteryboard',
    imgUrl:
      'https://images.unsplash.com/photo-1615185990778-a15d7015b41d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
    alt: 'Image for christians mysteryboard project',
    description:
      'A full stack application that allows users to post anonymously.',
    repo: 'https://github.com/christianbmartinez/mysteryboard',
    href: 'https://mysteryboard.herokuapp.com/',
    tags: ['#EXPRESS', '#MONGODB'],
  },
  {
    title: 'Codeathon',
    imgUrl:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    alt: 'Image for christians portfolio codeathon project',
    description: 'A full stack application that brings coders together',
    repo: 'https://github.com/JenevaRay/Codeathon',
    href: 'https://codeathon-1b48b4588e47.herokuapp.com/',
    tags: ['#REACT', '#GRAPHQL'],
  },
  {
    title: 'Chattr App',
    imgUrl:
      'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    alt: 'Image for christians portfolio chattr app project',
    description: 'An anonymous chatting application that uses chatgpt.',
    repo: 'https://github.com/christianbmartinez/chattrapp',
    href: 'https://chattrapp.netlify.app/',
    tags: ['#REACT', '#CHATGPT'],
  },
  {
    title: 'Logo Generator',
    imgUrl:
      'https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80',
    alt: 'Image for christians portfolio SVG Logo generator project',
    description: 'A node cli application for generating quality svg logos',
    repo: 'https://github.com/christianbmartinez/svg-logo-generator',
    href: 'https://drive.google.com/file/d/1Tg1iBDdUqCIz06HrNIAeVbb3j-26K3-V/view',
    tags: ['#INQUIRER', '#JS'],
  },
]
export {
  experienceData,
  socialLinks,
  portfolioData,
  svgPathVariant1,
  svgPathVariant2,
  firstVariant,
  secondVariant,
  thirdVariant,
  fourthVariant,
  fifthVariant,
  sixthVariant,
  seventhVariant,
  svgJsIcon,
}
