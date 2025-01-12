import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import Project1 from "../assets/projects/project1.png";
import Project2 from "../assets/projects/project2.png";



export const HERO_CONTENT = `I am an aspiring full stack and cloud developer with a strong passion for building scalable and efficient applications. With a solid foundation in Full stack web development with frameworks like React, Node, VueJs while being open to learn and use any other frameworks too, I recently expanded my expertise to cloud technologies like AWS to deliver robust solutions. My goal is to create impactful software that bridges technology and user needs.`;

export const ABOUT_TEXT = `As an aspiring full stack and cloud developer, I thrive on solving complex problems and creating applications that deliver exceptional user experiences. I have a strong background in web development using technologies like React, Node.js, and MongoDB, and I am currently honing my skills in cloud platforms such as AWS and Azure. I am passionate about learning and enjoy working on projects that challenge me to grow. Outside of development, I enjoy exploring new technologies, participating in hackathons, and contributing to open-source projects. My hobbies includes volleyball, cricket and a wide range of ESports like FC and first-person shooter games.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer Intern",
    company: "Glo-Up FashionMingle Inc.",
    description: `Contributed to a team in developing a multi-platform fashion applications using React-Native. Implemented Graph API and AI for personalised product reccomendations. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React-Native", "Figma", "Google Firebase", "Tailwind-CSS"],
  },
  {
    year: "2022 - 2023",
    role: "Full Stack Developer Intern",
    company: "Sain Informatix Pvt. Ltd.",
    description: `Designed and developed a informative web applications regarding crypto-currency using React. Worked closely with front-end developers to integrate frontend components with Chart.js APIs to display trends. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["React", "ChartJs", "Coingecko API", "mySQL", "MariaDB","Axios"],
  },
  {
    year: "2021 - 2022",
    role: "Web Developer and Mentor",
    company: "CMR Institute of Technology",
    description: `Developed and maintained ERP web application using HTML, CSS, PHP, JavaScript. Guided junior developers, knowledge transfer, technical mentoring and enhancement in scaling process of the ERP system. Collaborated with cross-functional teams to deliver high-quality end products.`,
    technologies: ["JavaScript", "PHP", "MariaDB", "MySQL", "XAMPP server"],
  },
];

export const PROJECTS = [
  {
    title: "University ERP System",
    image: Project1,
    description:
      "A fully functional ERP website addition feature in automating the process of question paper generation which was previously done manually, using php and javascript with a normalised database in mariaDB.",
    technologies: ["HTML", "CSS", "Javascript", "PHP", "MariaDB","XAMPP server"],
  },
  {
    title: "ECG Dataset Analysis with Hadoop",
    image: project3,
    description:
      "Analyzed the PTB-XL ECG dataset to study cardiovascular conditions, leveraging Hadoop MapReduce for distributed data processing and AWS EC2 for cluster deployment.",
    technologies: ["HDFS", "EC2", "SQS", "MapReduce","Python","JSON"],
  },
  {
    title: "Portfolio Website",
    image: Project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Framer Motion", "React", "TailwindCSS","React-Icons"],
  },
];

export const CONTACT = {
  address: "Harrison, New Jersey, NJ 07029.",
  phoneNo: "+1 862-423-5559 ",
  email: "dinakarcheruku2002@gmail.com",
};
