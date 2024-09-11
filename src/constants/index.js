import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";



export const HERO_CONTENT = `Welcome to my portfolio! I'm Mariya Shijo, a Computer Science student with a minor in User Experience Design at the New Jersey Institute of Technology. My passion for technology and design is fueled by a love for solving complex problems and creating intuitive user experiences. I am proficient in programming languages such as Java, HTML, Python, and C++, as well as design tools like Adobe Suite and Figma. This portfolio reflects my journey and growth in the tech industry, showcasing my skills and dedication to excellence.`;

export const ABOUT_TEXT = `As a hardworking and resourceful individual, I thrive in collaborative environments where teamwork and creativity intersect. My experience includes tutoring students in geometry, helping them achieve academic success, and managing social media content to enhance brand engagement. My academic foundation in Computer Science, complemented by a minor in UX Design, equips me with a well-rounded skill set that bridges technical expertise and creative problem-solving. I am committed to applying my skills and knowledge to make a meaningful impact in the tech industry.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Tutor",
    company: "Varsity Tutors",
    description: `Tailored tutoring sessions to accommodate diverse learning styles, ensuring comprehension and retention of geometric concepts. Utilized creative teaching methods to make abstract geometric concepts more accessible.`,
    technologies: ["Geometry", "Tutoring", "Education"],
  },
  {
    year: "2023 - Present",
    role: "Junior Videographer",
    company: "Twilight Media",
    description: `•	Traveled to cover live conventions, providing photography and videography services.
•	Assisted in setting up live streaming equipment, including Blackmagic cameras and switchers.
•	Managed live-monitoring and on-the-fly editing during live events to ensure seamless broadcasts.
`,
    technologies: ["Videography", "Live-Editing", "Marketing"],
  },
];

export const PROJECTS = [
  {
    title: "Personal Portfolio - 2024 ",
    image: project6,
    description:
      "This responsive portfolio website showcases projects with dynamic animations, sleek UX/UI design, and seamless interactivity using React, Tailwind CSS, and Framer Motion",
    technologies: ["ReactJS", "Framer Motion", 'Tailwind CSS' ],
    detailsPage: 'portfolio',

  },
    {
    title: "Zara - 2024",
    image: project1,
    description:
      "An in-depth UX case study dedicated to redesigning Zara's website, aimed at enhancing user experience. The project focuses on streamlining the online shopping process for a more intuitive and seamless customer journey.",
    technologies: ["Figma", "Adobe Suite", "UX/UI Design"],
    detailsPage: 'zara',

  },

  {
    title: "Fable & Fern - 2024",
    image: project5,
    description:
      "o	Built a full-stack bookstore website featuring dynamic content, user login/signup, personalized book recommendations based on user survey responses, and a responsive design for an enhanced user experience",
    technologies: ["ReactJS", "MongoDB", "NodeJS" ],
  },
  {
    title: "Lexical Analyzer - 2023",
    image: project2,
    description:
      "A C++ project that identifies and categorizes tokens in input code for processing in a compiler or interpreter.",
    technologies: ["C++", "Lexical Analysis", "Compiler Design"],
  },

  {
    title: "Mini Arcade Game - 2023",
    image: project3,
    description:
      "A mini arcade featuring a 'Collect the Squares' game developed using HTML and PHP, with a gameboard for recording scores.",
    technologies: ["HTML", "PHP", "Game Development"],
  },
  {
    title: "To Do - 2024",
    image: project4,
    description:
      "A simple HTML Page created to keep track of your to do list. You have the ability to add, delete, and cross-out your tasks. In the process of expanding to a planning website.",
    technologies: ["HTML", "CSS", ],
  },
];

export const CONTACT = {
  address: "New Milford, NJ 07646",
  phoneNo: "(551) 253-8396",
  email: "mariyashijo232@gmail.com",
};
