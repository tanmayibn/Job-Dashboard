import {
  WhatsApp,
  Twitter,
  Instagram,
  Spotify,
  Linkedin,
  Youtube,
  Google,
  Facebook,
  

} from "../assets";

export const jobTypes = ["Full-Time", "Part-Time", "ContracT", "Intern"];

export const experience = [
  { title: "Under 1 Year", value: "0-1" },
  { title: "1 -2 Year", value: "1-2" },
  { title: "2 -6 Year", value: "2-6" },
  { title: "Over 6 Years", value: "6" },
];

export const popularSearch = [
  "Founder",
  "Founding partner",
  "Board memeber",
  "Entrepreneur in residence",
  "Personal Assistant",
  "Sales",
  "Project manager",
  "Co-founder",
  "Developer",
  "Managing director",
];

export const jobs = [
  {
    id: "1",
    company: {
      name: "Twitter Corporation",
      location: "West Delhi",
      email: "support@twitter.com",
      contact: "support@twitter",
      about:
      "Software engineers design, develop, and test computer systems and applications to solve real-world problems. They analyze user requirements, design, develop, test, debug, and deploy software, and are responsible for monitoring, maintaining, and improving existing software. They also oversee the entire software development life cycle (SDLC) progression.",
      profileUrl: Twitter,
    },
    jobTitle: "Software Engineer",
    location: "West Delhi",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc: "As a Software Engineer at Twitter, you'll be part of a dynamic team responsible for developing and maintaining critical components of our platform. You'll collaborate closely with cross-functional teams including product managers, designers, and other engineers to innovate and implement new features, optimize performance, and ensure the scalability and reliability of our services.",

        requirement:
          "The ideal candidate for the Software Engineer position at Twitter should possess strong technical skills in programming languages such as Java, Python, or Scala, along with proficiency in web technologies like HTML, CSS, and JavaScript. They must demonstrate problem-solving abilities, collaborating effectively with cross-functional teams, and communicating technical concepts clearly. Familiarity with distributed systems, databases, and cloud platforms is preferred, along with a solid understanding of software development best practices including test-driven development, continuous integration/continuous deployment, and agile methodologies.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "2",
    company: {
      name: "Google Corporation",
      location: "Mohali",
      email: "support@google.com",
      contact: "support@google",
      about:
        "The ideal candidate for the Software Engineer position at Twitter should possess strong technical skills in programming languages such as Java, Python, or Scala, along with proficiency in web technologies like HTML, CSS, and JavaScript. They must demonstrate problem-solving abilities, collaborating effectively with cross-functional teams, and communicating technical concepts clearly. Familiarity with distributed systems, databases, and cloud platforms is preferred, along with a solid understanding of software development best practices including test-driven development, continuous integration/continuous deployment, and agile methodologies.",
      profileUrl: Google,
    },
    jobTitle: "System Analyst",
    location: "Mohali",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc : "The role of a System Analyst at Google involves conducting thorough analysis of existing systems and workflows, identifying inefficiencies or bottlenecks, and recommending solutions to address them. You'll be responsible for gathering and documenting requirements from stakeholders, analyzing data and system logs to diagnose issues, and proposing enhancements or new features to improve system performance.",
        requirement:
        " To excel as a System Analyst at Google, you should have a strong technical background coupled with excellent analytical and problem-solving skills. Proficiency in data analysis tools and techniques, as well as experience with scripting languages such as Python or SQL, is highly desirable. ",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "3",
    company: {
      name: "LinkedIn Corporation",
      location: "India, Mumbai",
      email: "support@LinkedIn.com",
      contact: "support@LinkedIn",
      about:
      "As a Social Media Manager at LinkedIn, you will play a pivotal role in developing and executing social media strategies to enhance brand visibility, engage the audience, and drive business objectives. You will be responsible for managing LinkedIn's presence across various social media platforms",
      profileUrl: Linkedin,
    },
    jobTitle: "Social Media Manager",
    location: "India, Mumbai",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc : " The role of a Social Media Manager at LinkedIn involves overseeing the day-to-day management of LinkedIn's social media channels, including content creation, publishing, and monitoring engagement metrics",
        requirement:
        " To excel as a Social Media Manager at LinkedIn, you should have a deep understanding of social media platforms, particularly LinkedIn, and a proven track record of managing successful social media campaigns. Strong writing and communication skills are essential for crafting compelling content that resonates with our audience and drives engagement. ",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "4",
    company: {
      name: "Spotify Corporation",
      location: "Gurugram",
      email: "support@Spotify.com",
      contact: "support@Spotify",
      about:
      " As the Chief Financial Officer (CFO) at Spotify, you will hold a key leadership position responsible for overseeing the company's financial strategy, planning, and operations. You will play a critical role in driving financial performance, guiding strategic decision-making, and ensuring the long-term financial health and sustainability of the organization.",
      profileUrl: Spotify,
    },
    jobTitle: "CFO",
    location: "Gurugram",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
       desc : " The CFO role at Spotify entails leading a talented finance team in executing various financial functions to support the company's growth trajectory and business initiatives. You will collaborate closely with executives and department heads to develop and implement financial strategies that align with Spotify's overall vision and objectives. ",
        requirement:
        " To excel as the CFO at Spotify, you should have a proven track record of financial leadership in a high-growth, technology-driven organization. You must possess deep expertise in financial planning and analysis, accounting principles, and financial reporting standards. Strong analytical skills, strategic thinking, and the ability to communicate complex financial concepts effectively are essential for this role. ",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "5",
    company: {
      name: "Facebook Corporation",
      location: "Gurugram",
      email: "support@Facebook.com",
      contact: "support@Facebook",
      about:
      "As the Chief Financial Officer (CFO) at Facebook, you will hold a critical leadership position responsible for overseeing all aspects of the company's financial operations and strategy. Reporting directly to the CEO",
      profileUrl: Facebook,
    },
    jobTitle: "CFO",
    location: "Gurugram",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc : " The CFO role at Facebook entails leading a dynamic finance team in executing a wide range of financial functions to support the company's ambitious growth agenda and innovation initiatives. You will collaborate closely with senior executives and business leaders to provide financial insights and strategic guidance, leveraging data-driven analyses to inform decision-making and drive operational excellence. ",
        requirement:
        " To excel as the CFO at Facebook, you should possess a blend of financial acumen, strategic vision, and leadership skills honed through extensive experience in finance and executive roles within technology or related industries. You must demonstrate a deep understanding of financial principles, accounting standards, and regulatory requirements, coupled with a track record of success in managing complex financial operations at scale.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "6",
    company: {
      name: "WhatsApp Corporation",
      location: "Bangalore",
      email: "support@WhatsApp.com",
      contact: "support@WhatsApp",
      about:
      "As a Product Manager at WhatsApp, you will play a pivotal role in driving the development and evolution of one of the world's leading messaging platforms ",
      profileUrl: WhatsApp,
    },
    jobTitle: "Product Manager",
    location: "Bangalore",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc : " he Product Manager role at WhatsApp involves leading the end-to-end product lifecycle, from conceptualization to launch and beyond. You will work closely with engineering, design, marketing, and other stakeholders to prioritize features, define requirements, and ensure timely and successful delivery of product updates. ",
        requirement:
        " o excel as a Product Manager at WhatsApp, you should have a proven track record of product management experience, preferably in consumer-facing mobile or messaging applications. You must possess strong analytical skills, with the ability to translate data insights into actionable product strategies and decisions.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "7",
    company: {
      name: "Instagram Corporation",
      location: "Bangalore",
      email: "support@Instagram.com",
      contact: "support@Instagram",
      about:
      " As a Product Manager at Instagram, you'll be at the forefront of shaping one of the world's most popular social media platforms.",
      profileUrl: Instagram,
    },
    jobTitle: "Product Manager",
    location: "Bangalore",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc : "The Product Manager role at Instagram encompasses a wide range of responsibilities, including gathering and analyzing user feedback, conducting market research, and defining product requirements to guide the development process. ",
        requirement:
        " To excel as a Product Manager at Instagram, you should have a proven track record of product management experience, ideally in consumer-facing mobile applications or social media platforms.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "8",
    company: {
      name: "Youtube Corporation",
      location: "Bangalore",
      email: "support@Youtube.com",
      contact: "support@Youtube",
      about:
      " As a Product Manager at YouTube, you'll play a pivotal role in shaping the future of one of the world's largest video-sharing platforms. Your responsibilities will include defining the product vision, strategy, and roadmap",
      profileUrl: Youtube,
    },
    jobTitle: "Product Manager",
    location: "Bangalore",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc : "The Product Manager role at YouTube involves working closely with engineering, design, content, and business teams to prioritize features, manage the product roadmap, and drive the successful execution of product initiatives.  ",
        requirement:
        " To excel as a Product Manager at YouTube, you should have a proven track record of product management experience, preferably in consumer-facing digital media or technology platforms. Strong analytical skills, with the ability to interpret data insights and translate them into actionable product strategies and decisions",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
 
];

export const footerLinks = [
  {
    id: "01",
    title: "Booking support",
    links: ["COVID-19", "Help Center", "Support", "Trust & Safety"],
  },
  {
    id: "02",
    title: "Community",
    links: ["Against Discrimination", "Invite friends", "Gift cards"],
  },
  {
    id: "03",
    title: "About",
    links: ["How it works", "Careers", "About us", "Media"],
  },
  {
    id: "04",
    title: "Become an employer",
    links: ["Post your job", "Business account", "Resource Center", "Community"],
  },
];

export const companies = [
  {
    _id: 1,
    name: "Twitter Corporation",
    location: "West Delhi",
    email: "support@twitter.com",
    contact: "support@twitter",
    about:
    "Software engineers design, develop, and test computer systems and applications to solve real-world problems. They analyze user requirements, design, develop, test, debug, and deploy software, and are responsible for monitoring, maintaining, and improving existing software. They also oversee the entire software development life cycle (SDLC) progression.",

    profileUrl: Twitter,
    jobPosts: ["1", "2"],
  },
  {
    _id: 2,
    name: "Google Corporation",
    location: "Mohali",
    email: "support@google.com",
    contact: "support@google",
    about:
    "The ideal candidate for the Software Engineer position at Twitter should possess strong technical skills in programming languages such as Java, Python, or Scala, along with proficiency in web technologies like HTML, CSS, and JavaScript. They must demonstrate problem-solving abilities, collaborating effectively with cross-functional teams, and communicating technical concepts clearly. Familiarity with distributed systems, databases, and cloud platforms is preferred, along with a solid understanding of software development best practices including test-driven development, continuous integration/continuous deployment, and agile methodologies.",

    profileUrl: Google,
    jobPosts: ["1", "2"],
  },
  {
    _id: 3,
    name: "LinkedIn Corporation",
    location: "India, Mumbai",
    email: "support@LinkedIn.com",
    contact: "support@LinkedIn",
    about:
    "As a Social Media Manager at LinkedIn, you will play a pivotal role in developing and executing social media strategies to enhance brand visibility, engage the audience, and drive business objectives. You will be responsible for managing LinkedIn's presence across various social media platforms",

    profileUrl: Linkedin,
    jobPosts: ["1", "2"],
  },
  {
    _id: 4,
    name: "Spotify Corporation",
    location: "Gurugram",
    email: "support@Spotify.com",
    contact: "support@Spotify",
    about:
    " As the Chief Financial Officer (CFO) at Spotify, you will hold a key leadership position responsible for overseeing the company's financial strategy, planning, and operations. You will play a critical role in driving financial performance, guiding strategic decision-making, and ensuring the long-term financial health and sustainability of the organization.",

    profileUrl: Spotify,
    jobPosts: ["1", "2"],
  },
  {
    _id: 5,
    name: "Facebook Corporation",
    location: "Gurugram",
    email: "support@Facebook.com",
    contact: "support@Facebook",
    about:
    "As the Chief Financial Officer (CFO) at Facebook, you will hold a critical leadership position responsible for overseeing all aspects of the company's financial operations and strategy. Reporting directly to the CEO",

    profileUrl: Facebook,
    jobPosts: ["1", "2"],
  },
  {
    _id: 6,
    name: "WhatsApp Corporation",
    location: "Bangalore",
    email: "support@WhatsApp.com",
    contact: "support@WhatsApp",
    about:
    "As a Product Manager at WhatsApp, you will play a pivotal role in driving the development and evolution of one of the world's leading messaging platforms ",

    profileUrl: WhatsApp,
    jobPosts: ["1", "2"],
  },
  {
    _id: 7,
    name: "Instagram Corporation",
    location: "Bangalore",
    email: "support@Instagram.com",
    contact: "support@Instagram",
    about:
    " As a Product Manager at Instagram, you'll be at the forefront of shaping one of the world's most popular social media platforms.",

    profileUrl: Instagram,
    jobPosts: ["1", "2"],
  },
  {
    _id: 8,
    name: "Youtube Corporation",
    location: "Bangalore",
    email: "support@Youtube.com",
    contact: "support@Youtube",
    about:
    " As a Product Manager at YouTube, you'll play a pivotal role in shaping the future of one of the world's largest video-sharing platforms. Your responsibilities will include defining the product vision, strategy, and roadmap",

    profileUrl: Youtube,
    jobPosts: ["1", "2"],
  },
  
];

export const users = [
  {
    name: "Google Corporation",
    location: "Mohali",
    email: "support@google.com",
    contact: "support@google",
    about:
    "The ideal candidate for the Software Engineer position at Twitter should possess strong technical skills in programming languages such as Java, Python, or Scala, along with proficiency in web technologies like HTML, CSS, and JavaScript. They must demonstrate problem-solving abilities, collaborating effectively with cross-functional teams, and communicating technical concepts clearly. Familiarity with distributed systems, databases, and cloud platforms is preferred, along with a solid understanding of software development best practices including test-driven development, continuous integration/continuous deployment, and agile methodologies.",

    profileUrl: Google,
    jobPosts: ["1", "2"],
    token: "gjhsdgsjgdjh",
  },
  {
    firstName: "Youtube",
    lastName: "Corporation",
    email: "support@Youtube.com",
    contact: "support@Youtube",
    about:
    " As a Product Manager at YouTube, you'll play a pivotal role in shaping the future of one of the world's largest video-sharing platforms. Your responsibilities will include defining the product vision, strategy, and roadmap",

    profileUrl: Youtube,
    accountType: "seeker",
    cvUrl: "",
    token: "gjhsdgsjgdjh",
  },
];
