// import images
import Hero_person from "./assets/images/Hero/heropng.png";

import java from "./assets/images/Skills/javap.png";
import mysql from "./assets/images/Skills/mysql.png";
import js from "./assets/images/Skills/js.png";
import reactjs from "./assets/images/Skills/react.png";
import spring from "./assets/images/Skills/spring.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
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
    title: "JAVA DEVELOPER",
    firstName: "DHASARATHAN",
    LastName: "D",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "11+",
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
        name: "Java Script",
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
        name: "React js",
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
        name: "mysql",
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
        name: "Python",
        para: "",
        logo: python,
        points: [
          "Readable Syntax: Easy to read and write.",
          "Versatile: Used in various fields.",
          "Extensive Libraries: Rich standard and third-party libraries.",
          "Interpreted: Executes code line-by-line.",
          "Strong Community: Large support network.",
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
        logo: services_logo2,
      },
      {
        title: "Spring Boot",
        para: "Spring Boot is a framework built on top of the Spring Framework that simplifies the creation of stand-alone, production-grade Spring applications. It offers convention over configuration, allowing developers to focus on writing business logic by providing embedded servers, auto-configuration, and a suite of pre-configured starter dependencies.",
        logo: services_logo3,
      },
      {
        title: "Web Development",
        para: "Web development involves creating, building, and maintaining websites or web applications, encompassing aspects such as web design, web publishing, web programming, and database management.",
        logo: services_logo1,
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
    para: "I am a highly skilled and motivated professional with a strong background in Java development,With a proven track record of the practice the java programming, I possess a deep understanding of Core Java.I am eager to contribute to your team and help drive the success of your projects and initiatives. consider my application for Java Develvoper, and I am confident that my skills and passion will be a valuable addition to your company.",
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
