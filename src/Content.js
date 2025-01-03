// import images
import Hero_person from "./assets/images/Hero/heropng.png";

import java from "./assets/images/Skills/javap.png";
import mysql from "./assets/images/Skills/mysql.png";
import js from "./assets/images/Skills/js.png";
import reactjs from "./assets/images/Skills/react.png";
import spring from "./assets/images/Skills/spring.png";
import node from "./assets/images/Skills/node.png";
import flutter from "./assets/images/Skills/flutter.png";
import native from "./assets/images/Skills/native.png";
import tailwind from "./assets/images/Skills/tailwind.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import app from "./assets/images/Services/app.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img.png";
import project2 from "./assets/images/projects/img4.png";
import project3 from "./assets/images/projects/assist.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person1.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Full Stack Developer",
    firstName: "DHASARATHAN",
    LastName: "D",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "14+",
        text: "Projects Worked for Learning and Practicing..",
      },
      {
        count: "I am a 2024 passout and a fresher.",
        text: "Write once, run anywhere..",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    sbtitle: "kajdklsjfdkjdksjfkjskjfksjkjfksj",
    jatitle: "jskjakjsdkjskajksjkdjakjfkdjsaljfl",
    skills_content: [
      {
        name: "Java",
        para: "",
        logo: java,
        points: [
          "Cross-Platform: Runs on any device with JVM.",
          "Object-Oriented: Enhances modularity and reusability.",
          "Rich Library: Extensive standard library available.",
          "Automatic GC: Manages memory automatically.",
          "Secure: Provides a robust security model.",
        ],
      },
      {
        name: "Spring Boot",
        para: "",
        logo: spring,
        points: [
          "Rapid Development: Simplifies Java web app creation.",
          "Embedded Servers: Includes Tomcat, Jetty.",
          "Microservices Ready: Ideal for microservices.",
          "Minimal Configuration: Uses sensible defaults.",
          "Spring Integration: Works with Spring ecosystem.",
        ],
      },
      {
        name: "JavaScript",
        para: "",
        logo: js,
        points: [
          "Dynamic Web: Enables interactive web pages.",
          "Event-Driven: Handles user actions.",
          "Async Programming: Supports async operations.",
          "Broad Compatibility: Runs in all browsers.",
          "Rich Libraries: Extensive frameworks (React, Angular).",
        ],
      },
      {
        name: "React.js",
        para: "",
        logo: reactjs,
        points: [
          "Declarative UI: Simplifies UI development.",
          "Component-Based: Encourages reusable components.",
          "Virtual DOM: Boosts performance.",
          "JSX: JavaScript syntax extension.",
          "One-way Data Flow: Predictable data binding.",
        ],
      },
      {
        name: "MySQL",
        para: "",
        logo: mysql,
        points: [
          "Open Source: Free and community-supported.",
          "ACID Compliance: Reliable transactions.",
          "Scalable: Handles small to large applications.",
          "High Performance: Optimized for speed.",
          "Cross-Platform: Runs on multiple OS.",
        ],
      },
      {
        name: "Node.js",
        para: "",
        logo: node,
        points: [
          "Event-Driven: Handles multiple connections efficiently.",
          "Non-Blocking I/O: Improves performance.",
          "JavaScript Everywhere: Same language on server and client.",
          "NPM: Large ecosystem of packages.",
          "Scalable: Suitable for microservices and real-time apps.",
        ],
      },
      {
        name: "Flutter",
        para: "",
        logo: flutter,
        points: [
          "Cross-Platform: Single codebase for iOS and Android.",
          "Hot Reload: Fast development cycle.",
          "Customizable Widgets: Rich UI components.",
          "High Performance: Compiles to native code.",
          "Strong Community: Growing support and resources.",
        ],
      },
      {
        name: "React Native",
        para: "",
        logo: native,
        points: [
          "Cross-Platform: Single codebase for iOS and Android.",
          "Hot Reload: Fast development cycle.",
          "Native Performance: Uses native components.",
          "Large Community: Extensive libraries and tools.",
          "JavaScript: Leverages existing web skills.",
        ],
      },
      {
        name: "Tailwind CSS",
        para: "",
        logo: tailwind,
        points: [
          "Utility-First: Composable utility classes.",
          "Responsive Design: Built-in breakpoints.",
          "Customizable: Easily extendable.",
          "Performance: Minimal CSS footprint.",
          "Integration: Works with any framework.",
        ],
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Core Java",
        para: "Core Java refers to the fundamental components of the Java programming language, including its basic syntax, object-oriented programming principles, essential classes, and standard libraries.",
        logo: services_logo3,
      },
      {
        title: "Web Development",
        para: "Web development involves creating, building, and maintaining websites or web applications, encompassing aspects such as web design, web publishing, web programming, and database management.",
        logo: services_logo1,
      },
      {
        title: "App Development",
        para: "App development involves creating software applications that run on mobile devices, including smartphones and tablets. This process includes designing the user interface, coding the functionality, testing for performance, and deploying the app to app stores.",
        logo: app,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Assist AI",
        image: project3,
      },
      {
        title: "UCER Project",
        image: project1,
      },
      {
        title: "movie review web",
        image: project2,
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "I am a highly skilled and motivated professional with a strong background in full-stack development and app development. I have gained valuable hands-on experience during a 5-month internship, where I worked on real-world projects involving both frontend and backend technologies. I am eager to contribute to your team and help drive the success of your projects and initiatives. My passion for learning, coupled with my dedication to delivering high-quality work, makes me confident that I will be a valuable addition to your company. Consider my application, and I am excited about the opportunity to collaborate and make a positive impact.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "dhasarathandharmaraj@gmail.com",
        icon: GrMail,
        link: "mailto:dhasarathandharmaraj@gmail.com",
      },
      {
        text: "+91 86829 18269",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "dhasrtanvj",
        icon: BsInstagram,
        link: "https://www.instagram.com/dhasrtanvj/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
