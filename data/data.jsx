import {
  MdDeveloperMode,
  MdMobileScreenShare,
  MdDesktopWindows,
} from "react-icons/md";
import {
  FaPaintRoller,
  FaCartPlus,
  FaGlobe,
  FaUser,
  FaDatabase,
  FaNotesMedical,
  FaUsers,
  FaLayerGroup,
  FaHardHat,
  FaEye,
  FaPython,
  FaLanguage,
  FaJava,
  FaPhp,
} from "react-icons/fa";
import { BiJoystick, BiAnalyse } from "react-icons/bi";
import { BsFillCloudSlashFill, BsGrid } from "react-icons/bs";
import { GiConcentrationOrb } from "react-icons/gi";
import { DiResponsive } from "react-icons/di";
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import {SiDart, SiFlutter, SiFirebase, SiMysql, SiCplusplus, SiTailwindcss} from 'react-icons/si';

// Nav menus
const navMenus = [
  { id: 1, name: "Home", route: "/" },
  { id: 2, name: "Services", route: "/services" },
  { id: 3, name: "Our Work", route: "/ourwork" },
  { id: 4, name: "About Us", route: "/aboutus" },
  // { id: 5, name: "Blog", route: "/blog" },
  { id: 6, name: "Career", route: "/career" },
  { id: 7, name: "Contact", route: "/contact" },
];

// services data
const servicesData = [
  {
    id: 1,
    Icon: MdDeveloperMode,
    title: "web development",
    desc: "Get the customized, modern, browser-friendly, and pixel perfect web design with unique content",
    btn: "Read More",
    route: "/services",
  },
  {
    id: 2,
    Icon: MdMobileScreenShare,
    title: "cross platform apps",
    desc: "We create customized websites for reasonable rates to accommodate multiple devices.",
    btn: "Read More",
    route: "/services",
  },
  {
    id: 3,
    Icon: MdDesktopWindows,
    title: "Desktop Solutions",
    desc: "We provide constant monitoring and repairing services to make your site active 24/7.",
    btn: "Read More",
    route: "/services",
  },
  {
    id: 4,
    Icon: FaPaintRoller,
    title: "UI & UX Design",
    desc: "With our innovative ui-ux design, we guarantee your project’s up-to-date.",
    btn: "Read More",
    route: "/services",
  },
  {
    id: 5,
    Icon: FaCartPlus,
    title: "E-commerce",
    desc: "Boost your website’s search engine visibility and get the organic targeted audience",
    btn: "Read More",
    route: "/services",
  },
  {
    id: 6,
    Icon: FaGlobe,
    title: "Affordable SEO",
    desc: "Boost your website’s search engine visibility and get the organice targeted audience",
    btn: "Read More",
    route: "/services",
  },
];

// why us you can get best service
const whyusData = [
  {
    id: 1,
    Icon: FaUser,
    name: "expert team",
    desc: "We drive our clients’ growth through innovation and hard work",
  },
  {
    id: 2,
    Icon: FaDatabase,
    name: "data driven",
    desc: "We drive our clients’ growth through innovation and hard work",
  },
  {
    id: 3,
    Icon: BiJoystick,
    name: "tech support",
    desc: "We drive our clients’ growth through innovation and hard work",
  },
  {
    id: 4,
    Icon: BiAnalyse,
    name: "market analysis",
    desc: "We drive our clients’ growth through innovation and hard work",
  },
];

// Our teams member data
const ourteamsData = [
  {
    id: 1,
    img: "/images/ourteams/afsan.png",
    name: "afsan-rahmatullah",
    position: "full-stack developer",
    company: 'miicon solutions',
    phone: '+8801620497235',
    email: 'talktoafsan@gmail.com',
    address: '22, R.N Road, Jashore, Banlgadesh, ST 7400',
    joindate: '15 semptember, 2022',
    desc: `I am capable of bright my future in the web development field. Aspires to become an expert Full-Stack Developer in the
    future. Passionate about learning new technologies. I express my innovative creative skills for self and
    company growth.`,
    skills: ['Html','CSS3','Javascript', 'Python','Django','React Js', 'Next Js', 'My SQL' ],
  },
  {
    id: 2,
    img: "/images/ourteams/omee.jpg",
    name: "wasif-zaman-omee",
    position: "full-stack developer",
     company: 'miicon solutions',
    joindate: '15 semptember, 2022',
    phone: '+8801910312566',
    email: 'wasifbdjsr@gmail.com',
    address: '22, R.N Road, Jashore, Banlgadesh, ST 7400',
    desc: `I am capable of bright my future in the web development field. Aspires to become an expert Full-Stack Developer in the
    future. Passionate about learning new technologies. I express my innovative creative skills for self and
    company growth.`,
    skills: ['Html','CSS3','Javascript','React Js', 'Next Js','Python','Django'],
  },
  {
    id: 3,
    img: "/images/ourteams/kamrul.png",
    name: "kamrul-hasan",
    position: "back-end developer",
     company: 'miicon solutions',
     phone: '+8801558250667',
     email: "kkamrulhasan2020@gmail.com",
    joindate: '15 semptember, 2022',
    address: '22, R.N Road, Jashore, Banlgadesh, ST 7400',
    desc: `I am capable of bright my future in the web development field. Aspires to become an expert Back-End Developer in the
    future. Passionate about learning new technologies. I express my innovative creative skills for self and
    company growth.`,
    skills: ['Python', 'Django', 'Fast API', 'PostgreSQL', ],
  },
  {
    id: 4,
    img: "/images/ourteams/roky.png",
    name: "arfan-roky",
    position: "front-end developer",
     company: 'miicon solutions',
     phone: '+8801611695544',
     email: 'arfanroky0@gmail.com',
    joindate: '15 semptember, 2022',
    address: '22, R.N Road, Jashore, Banlgadesh, ST 7400',
    desc: `I am capable of bright my future in the web development field. Aspires to become an expert Front-End Developer in the
    future. Passionate about learning new technologies. I express my innovative creative skills for self and
    company growth.`,
    skills: ['Html','CSS3','Javascript', 'React Js', 'Next Js',  'Node Js', 'Tailwind', 
    ],
  },
  {
    id: 5,
    img: "/images/ourteams/mahamudul.jpg",
    name: "mahamudul-hasan",
    position: "application developer",
     company: 'miicon solutions',
     phone: '+8801727493053',
     email: 'mahamudulhasan.cse@gmail.com',
    joindate: '15 semptember, 2022',
    address: '22, R.N Road, Jashore, Banlgadesh, ST 7400',
    desc: `I am capable of bright my future in the web development field. Aspires to become an expert Application Developer in the
    future. Passionate about learning new technologies. I express my innovative creative skills for self and
    company growth.`,
    skills: ['Dart','Flutter', 'Firebase', 'Java SE', ' SQL', 'C/C++',
    ],
  },
  {
    id: 6,
    img: "/images/ourteams/savrin.jpg",
    name: "savrin-sharif",
    position: "cheif product officer",
     company: 'miicon solutions',
     phone: '+8801762339120',
     email: 'aerolite.alif@gmail.com',
     address: '22, R.N Road, Jashore, Banlgadesh, ST 7400',
    joindate: '15 semptember, 2022',
    desc: `I am capable of bright my future in the web development field. Aspires to become an expert Application Developer in the
    future. Passionate about learning new technologies. I express my innovative creative skills for self and
    company growth.`,
    skills: [
      "Lead the company by maintaining a broad view of organizational goals, needs and successes while simultaneously focusing specifically on the product's objectives and needs.",
      'Product vision', 'Product innovation', 'Product design', "User research", "Product development", "Product marketing initiatives", "Product analytics and metrics" ],
    

  },
  {
    id: 7,
    img: "/images/ourteams/shaman.png",
    name: "shaman-sharif",
    phone: '+8801854504754',
    email: 'shaman.sharif@outlook.com',
    position: "cheif executive officer",
    address: '22, R.N Road, Jashore, Banlgadesh, ST 7400',
     company: 'miicon solutions',
    joindate: '15 semptember, 2022',
    desc: `I am capable of bright my future in the web development field. Aspires to become an expert Application Developer in the
    future. Passionate about learning new technologies. I express my innovative creative skills for self and
    company growth.`,
    skills: ['Svalte','Python', 'Flutter', 'DevOps', 'Docker', ' Decentralized leadership', 'Employee Development',
    ],
  },
  {
    id: 8,
    img: "/images/ourteams/abid.png",
    name: "abid-hasan",
    position: "operations manager",
    company: 'miicon solutions',
    joindate: '15 semptember, 2022',
    phone: '+8801912886131',
    address: '22, R.N Road, Jashore, Banlgadesh, ST 7400',
    email: 'hasan.abid56@yahoo.com',
    desc: `I am capable of bright my future in the web development field. Aspires to become an expert Application Developer in the
    future. Passionate about learning new technologies. I express my innovative creative skills for self and
    company growth.`,
    skills: ['Human Resource','Resource management', 'Communication and public speaking skills',
    ],
  },
  {
    id: 9,
    img: "/images/ourteams/mehedi.png",
    name: "mehedi-hasan",
    position: "cheif technology officer",
     company: 'miicon solutions',
     phone: '+8801941231855',
     email: 'neiloyhassan1@gmail.com',
    joindate: '15 semptember, 2022',
    address: '22, R.N Road, Jashore, Banlgadesh, ST 7400',
    desc: `I am capable of bright my future in the web development field. Aspires to become an expert Application Developer in the
    future. Passionate about learning new technologies. I express my innovative creative skills for self and
    company growth.`,
    skills: ['System Design','Vue js', 'Flutter', 'Strategic thinking skills', 'Ability to employ tech talent',
    ],
  },

];

// Services steps that we do follow
const servicesstepsData = [
  {
    id: 1,
    img: "/images/services/steps_1.png",
    title: "What is the target you want to achieve?",
    desc: "We initially attempt to comprehend the client’s aim, we next make several attempts to ascertain what the client truly desires, and last we clarify. ",
  },
  {
    id: 2,
    img: "/images/services/steps_2.jpeg",
    title: "We will decide the best way to get to your target",
    desc: "We consistently concentrate on any technological solutions that will help the client achieve their goals. We have numerous discussions while working. The best process then continues after the decision has been made.",
  },
  {
    id: 3,
    img: "/images/services/steps_3.jpg",
    title: "When everything is ready, we will launch the product",
    desc: "Additionally, we surprise the client when we present the finished product to them.",
  },
];

// best service data
const bestserviceData = [
  {
    id: 1,
    icon: BsFillCloudSlashFill,
    name: "Planing",
    desc: "First we making a plan with our client ",
  },
  {
    id: 2,
    icon: GiConcentrationOrb,
    name: "Conception",
    desc: "Discuss with client and keep updating about product",
  },
  {
    id: 3,
    icon: FaPaintRoller,
    name: "Design",
    desc: "Our team making a demo design for the product",
  },
  {
    id: 4,
    icon: FaNotesMedical,
    name: "Customize with ease ",
    desc: "Multiple times customizing",
  },
  {
    id: 5,
    icon: DiResponsive,
    name: "Perfectly Responsive",
    desc: "Mobile friendly responsive design",
  },
  {
    id: 6,
    icon: FaUsers,
    name: "Friendly Support",
    desc: "If you have any issue our team is always ready to solve that",
  },
];

// our work data
const ourworkData = [
  { id: 1, name: "GigaLegal", path: "", img: "/images/ourwork/project1.png" },
  { id: 2, name: "GigaLegal", path: "", img: "/images/ourwork/project3.png" },
  { id: 3, name: "GigaLegal", path: "", img: "/images/ourwork/project1.png" },
  { id: 4, name: "GigaLegal", path: "", img: "/images/ourwork/project3.png" },
  { id: 5, name: "GigaLegal", path: "", img: "/images/ourwork/project1.png" },
  { id: 6, name: "GigaLegal", path: "", img: "/images/ourwork/project3.png" },
];

// Blog data
const blogData = [
  {
    id: 1,
    img: "/images/react.jpeg",
    desc: "React is a very popular framework today, and rightfully so. Once you are comfortable with it.",
  },
  {
    id: 2,
    img: "/images/python.jpg",
    desc: "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. ",
  },
  {
    id: 3,
    img: "/images/flutter.png",
    desc: "We started Flutter as an attempt to revolutionize app development: combining the iterative development model",
  },
];

const careerpositionData = [
  {
    id: 1,
    Icon: FaLayerGroup,
    title: "Front-End Dev",
    desc: "If you want to be a part of our team send us your updated resume.",
    route: "/career",
    btn: "Requirments",
    details: {
      responsibilties: [
        "A solid foundation on OOP, algorithm, data structure",
        "Proven work experience with React JS",
        "Familiarity with Vue JS, Nuxt JS / Next JS & Typescript is expected",
        "Prior experience working with Architectural Patterns like MVC",
        "Proficient in writing SEO friendly websites",
        " Capable of writing complex SQL queries and database schema design",
        "Consuming and creating web services",
        "You care about your query execution time in milliseconds",
        "You care about the quality of code that you & your team writes",
        "You care about end-to-end development",
        "Stable work history and an ability to collaborate effectively",
        "Ability to work under pressure and manage priorities",
        "You keep yourself updated with the latest development practices",
        "Maintaining, Scaling & Developing new applications for Sheba Platform Limited",
      ],
      experience: ["4 to 5 year(s)", "Fluent Spoken and Written English"],
      benifits: [
        "Weekly 2 days holidays",
        "Salary Review Yearly",
        "Festival Bonus",
      ],
      location: ["jashore, Khulna", "22, R.N Road, ST 7400"],
      workplace: ["Work at office"],
      salary: ["Negotiable"],
      isOpen: false,
    },
  },
  {
    id: 2,
    Icon: BsGrid,
    title: "Full-Stack Dev",
    desc: "If you want to be a part of our team send us your updated resume.",
    route: "/career",
    btn: "Requirments",
    details: {
      responsibilties: [
        "A solid foundation on OOP, algorithm, data structure",
        "Proven work experience with React JS",
        "Familiarity with Vue JS, Nuxt JS / Next JS & Typescript is expected",
        "Prior experience working with Architectural Patterns like MVC",
        "Proficient in writing SEO friendly websites",
        " Capable of writing complex SQL queries and database schema design",
        "Consuming and creating web services",
        "You care about your query execution time in milliseconds",
        "You care about the quality of code that you & your team writes",
        "You care about end-to-end development",
        "Stable work history and an ability to collaborate effectively",
        "Ability to work under pressure and manage priorities",
        "You keep yourself updated with the latest development practices",
        "Maintaining, Scaling & Developing new applications for Sheba Platform Limited",
      ],
      experience: ["4 to 5 year(s)", "Fluent Spoken and Written English"],
      benifits: [
        "Weekly 2 days holidays",
        "Salary Review Yearly",
        "Festival Bonus",
      ],
      location: ["jashore, Khulna", "22, R.N Road, ST 7400"],
      workplace: ["Work at office"],
      salary: ["Negotiable"],
      isOpen: false,
    },
  },
  {
    id: 3,
    Icon: FaDatabase,
    title: "Database Security",
    desc: "If you want to be a part of our team send us your updated resume.",
    route: "/career",
    btn: "Requirments",
    details: {
      responsibilties: [
        "A solid foundation on OOP, algorithm, data structure",
        "Proven work experience with React JS ",
        "Familiarity with Vue JS, Nuxt JS / Next JS & Typescript is expected",
        "Prior experience working with Architectural Patterns like MVC",
        "Proficient in writing SEO friendly websites",
        " Capable of writing complex SQL queries and database schema design",
        "Consuming and creating web services",
        "You care about your query execution time in milliseconds",
        "You care about the quality of code that you & your team writes",
        "You care about end-to-end development",
        "Stable work history and an ability to collaborate effectively",
        "Ability to work under pressure and manage priorities",
        "You keep yourself updated with the latest development practices",
        "Maintaining, Scaling & Developing new applications for Sheba Platform Limited",
      ],
      experience: ["4 to 5 year(s)", "Fluent Spoken and Written English"],
      benifits: [
        "Weekly 2 days holidays",
        "Salary Review Yearly",
        "Festival Bonus",
      ],
      location: ["jashore, Khulna", "22, R.N Road, ST 7400"],
      workplace: ["Work at office"],
      salary: ["Negotiable"],
      isOpen: false,
    },
  },
  {
    id: 4,
    Icon: FaUsers,
    title: "Dev Ops",
    desc: "If you want to be a part of our team send us your updated resume.",
    route: "/career",
    btn: "Requirments",
    details: {
      responsibilties: [
        "A solid foundation on OOP, algorithm, data structure",
        "Proven work experience with React JS",
        "Familiarity with Vue JS, Nuxt JS / Next JS & Typescript is expected",
        "Prior experience working with Architectural Patterns like MVC",
        "Proficient in writing SEO friendly websites",
        " Capable of writing complex SQL queries and database schema design",
        "Consuming and creating web services",
        "You care about your query execution time in milliseconds",
        "You care about the quality of code that you & your team writes",
        "You care about end-to-end development",
        "Stable work history and an ability to collaborate effectively",
        "Ability to work under pressure and manage priorities",
        "You keep yourself updated with the latest development practices",
        "Maintaining, Scaling & Developing new applications for Sheba Platform Limited",
      ],
      experience: ["4 to 5 year(s)", "Fluent Spoken and Written English"],
      benifits: [
        "Weekly 2 days holidays",
        "Salary Review Yearly",
        "Festival Bonus",
      ],
      location: ["jashore, Khulna", "22, R.N Road, ST 7400"],
      workplace: ["Work at office"],
      salary: ["Negotiable"],
      isOpen: true,
    },
  },
  {
    id: 5,
    Icon: FaHardHat,
    title: "Data Analyst",
    desc: "If you want to be a part of our team send us your updated resume.",
    route: "/career",
    btn: "Requirments",
    details: {
      responsibilties: [
        "A solid foundation on OOP, algorithm, data structure",
        "Proven work experience with React JS",
        "Familiarity with Vue JS, Nuxt JS / Next JS & Typescript is expected",
        "Prior experience working with Architectural Patterns like MVC",
        "Proficient in writing SEO friendly websites",
        " Capable of writing complex SQL queries and database schema design",
        "Consuming and creating web services",
        "You care about your query execution time in milliseconds",
        "You care about the quality of code that you & your team writes",
        "You care about end-to-end development",
        "Stable work history and an ability to collaborate effectively",
        "Ability to work under pressure and manage priorities",
        "You keep yourself updated with the latest development practices",
        "Maintaining, Scaling & Developing new applications for Sheba Platform Limited",
      ],
      experience: ["4 to 5 year(s)", "Fluent Spoken and Written English"],
      benifits: [
        "Weekly 2 days holidays",
        "Salary Review Yearly",
        "Festival Bonus",
      ],
      location: ["jashore, Khulna", "22, R.N Road, ST 7400"],
      workplace: ["Work at office"],
      salary: ["Negotiable"],
      isOpen: false,
    },
  },
  {
    id: 6,
    Icon: FaEye,
    title: "UI/UX Designer",
    desc: "If you want to be a part of our team send us your updated resume.",
    route: "/career",
    btn: "Requirments",
    details: {
      responsibilties: [
        "A solid foundation on OOP, algorithm, data structure",
        "Proven work experience with React JS",
        "Familiarity with Vue JS, Nuxt JS / Next JS & Typescript is expected",
        "Prior experience working with Architectural Patterns like MVC",
        "Proficient in writing SEO friendly websites",
        " Capable of writing complex SQL queries and database schema design",
        "Consuming and creating web services",
        "You care about your query execution time in milliseconds",
        "You care about the quality of code that you & your team writes",
        "You care about end-to-end development",
        "Stable work history and an ability to collaborate effectively",
        "Ability to work under pressure and manage priorities",
        "You keep yourself updated with the latest development practices",
        "Maintaining, Scaling & Developing new applications for Sheba Platform Limited",
      ],
      experience: ["4 to 5 year(s)", "Fluent Spoken and Written English"],
      benifits: [
        "Weekly 2 days holidays",
        "Salary Review Yearly",
        "Festival Bonus",
      ],
      location: ["jashore, Khulna", "22, R.N Road, ST 7400"],
      workplace: ["Work at office"],
      salary: ["Negotiable"],
      isOpen: false,
    },
  },
];

const footerlistData = {
  company: [
    { id: 1, name: "About", route: "/aboutus" },
    { id: 2, name: "Careers", route: "/career" },
    { id: 3, name: "logistic", route: "/" },
    { id: 4, name: "privacy & policy", route: "/" },
  ],
  contact: [
    { id: 1, name: "help/faq", route: "/" },
    { id: 2, name: "press", route: "/" },
    { id: 3, name: "affilates", route: "/" },
  ],
  more: [
    { id: 1, name: "press centre", route: "/" },
    { id: 2, name: "our blog", route: "/blog" },
  ],
};

const positionData = [
  { id: 1, name: "frontend dev" },
  { id: 2, name: "fullstack dev" },
  { id: 3, name: "backend dev" },
  { id: 4, name: "database security" },
  { id: 5, name: "barketing staff" },
  { id: 6, name: "data analyst" },
  { id: 7, name: "ui/ux designer" },
  { id: 8, name: "All " },
];

const statusData = [
  { id: 1, name: "in progress" },
  { id: 2, name: "accepted" },
  { id: 3, name: "pending" },
  { id: 4, name: "rejection" },
];

const operationsData = [
  { id: 1, name: "edit status" },
  { id: 3, name: "send email" },
  { id: 4, name: "delete" },
];

export {
  navMenus,
  servicesData,
  whyusData,
  ourteamsData,
  servicesstepsData,
  bestserviceData,
  ourworkData,
  blogData,
  careerpositionData,
  footerlistData,
  positionData,
  statusData,
  operationsData,
};
