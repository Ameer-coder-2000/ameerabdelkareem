/* =========================================================================
   PORTFOLIO CONTENT — edit everything here, nothing else.
   Save the file, refresh the browser. Done.
   ========================================================================= */

window.PORTFOLIO = {
  /* ---------------------------------------------------------------- basics */
  meta: {
    name: "Ameer Abdelkareem Osman",
    nameAccent: "Osman",           // rendered in italic serif
    role: "Full Stack Developer",
    siteTitle: "Ameer Abdelkareem Osman | Full Stack Developer",
    description:
      "BSc IT student and full stack developer building web applications, ERP systems and practical tools with React, Node.js, PHP and MySQL.",
    image: "ameer.jpeg",
    keywords:
      "Ameer Abdelkareem Osman, full stack developer, web developer, IT support, PHP, JavaScript, React, Python, portfolio"
  },

  /* ------------------------------------------------------------------ hero */
  hero: {
    availability: "Available for new work",
    roles: [
      "Full Stack Developer",
      "Web Developer",
      "IT Support Specialist",
      "Problem Solver"
    ],
    intro:
      "BSc IT student and full stack developer with hands-on experience building web applications, ERP systems and management platforms that solve real-world problems.",
    portrait: "ameer.jpeg",
    portraitAlt: "Portrait of Ameer Abdelkareem Osman",
    primaryCta: { label: "View my work", href: "#work" },
    secondaryCta: { label: "Download CV", href: "Resume.pdf" },

    /* your deployed websites — shown as buttons under the hero.
       Add or remove entries freely. */
    sites: [
      { label: "hak-kalenga.in", url: "https://hak-kalenga.in/" },
      { label: "ccc.kesug.com", url: "https://ccc.kesug.com/" },
      { label: "loadbridge.page.gd", url: "https://loadbridge.page.gd/" }
    ],

    /* counters shown under the hero.
       value: 0 = computed automatically (project count, unique tech count).
       set an explicit number for anything else. decimals/suffix are optional. */
    stats: [
      { value: 0, suffix: "+", label: "Projects built" },
      { value: 0, suffix: "", label: "Technologies" },
      { value: 3.88, decimals: 2, label: "GPA / 4.00" },
      { value: 2, suffix: "", label: "Spoken languages" }
    ]
  },

  /* --------------------------------------------------------------- socials */
  /* PASTE YOUR INSTAGRAM + FACEBOOK URL IN THE url FIELDS BELOW.
     An entry with an empty url is skipped automatically until you fill it. */
  socials: [
    {
      label: "LinkedIn",
      handle: "in/ameer-abdelkareem-osman",
      url: "https://www.linkedin.com/in/ameer-abdelkareem-osman-9877a72b4",
      icon: "linkedin"
    },
    {
      label: "GitHub",
      handle: "Ameer-coder-2000",
      url: "https://github.com/Ameer-coder-2000/ameerabdelkareem",
      icon: "github"
    },
    {
      label: "Instagram",
      handle: "@ameer_abdelkareem",
      url: "https://www.instagram.com/ameer_abdelkareem/",
      icon: "instagram"
    },
    {
      /* NOTE: this is a Facebook *share* link — it opens the share dialog
         rather than your profile. Replace url with your profile address,
         e.g. "https://www.facebook.com/yourname", for a cleaner link. */
      label: "Facebook",
      handle: "Personal profile",
      url: "https://www.facebook.com/share/1FRT84h1c6/?mibextid=wwXIfr",
      icon: "facebook"
    },
    {
      label: "Facebook Page",
      handle: "My public page",
      url: "https://www.facebook.com/share/18bpMb5rCh/?mibextid=wwXIfr",
      icon: "facebook"
    },
    {
      label: "TikTok",
      handle: "@ameer_abdelkareem_2000",
      url: "https://www.tiktok.com/@ameer_abdelkareem_2000",
      icon: "tiktok"
    },
    {
      label: "Email",
      handle: "darkness.2000.2000.1000@gmail.com",
      url: "mailto:darkness.2000.2000.1000@gmail.com",
      icon: "mail"
    },
    {
      label: "Phone",
      handle: "+249 90 629 171",
      url: "tel:+24990629171",
      icon: "phone"
    }
  ],

  /* ----------------------------------------------------------------- about */
  about: {
    heading: "I build web products, then I support them.",
    lead:
      "Full stack developer at P.P. Savani University with hands-on experience across web applications, ERP systems and databases — plus a working interest in data science and security.",
    paragraphs: [
      "I work across the stack — React, Node.js, PHP, MySQL, MongoDB, HTML, CSS and JavaScript — and I care about the unglamorous parts too: authentication, REST APIs, clean responsive layouts, and code that still works six months later.",
      "Alongside development I have real IT support experience: troubleshooting, software installation and configuration, system management, and clear communication with the people who need things fixed.",
      "I also create tech content to make programming more accessible, and I keep learning through hands-on certifications in cloud, back-end development and ethical hacking.",
      "Currently open to internships, collaborations and full stack or IT support roles."
    ],
    strengths: [
      "Full Stack Web Development",
      "Authentication & REST APIs",
      "API Integration",
      "UI/UX & Responsive Design",
      "IT & Technical Support",
      "DevOps & Web Services",
      "Database Design",
      "Git & GitHub"
    ],
    facts: [
      { label: "Location", value: "Surat, Gujarat, India" },
      { label: "Education", value: "BSc Information Technology" },
      { label: "Languages", value: "English (professional), Arabic" },
      { label: "Focus", value: "Web development & IT support" }
    ]
  },

  /* ---------------------------------------------------------------- skills */
  /* Add or remove freely — the layout adapts. */
  skills: [
    {
      group: "Languages",
      items: ["HTML5", "CSS3", "JavaScript", "PHP", "Python", "Java", "SQL", "Shell"]
    },
    {
      group: "Frontend",
      items: [
        "React.js",
        "React Native",
        "Flutter",
        "Bootstrap",
        "Responsive UI",
        "UI/UX Design"
      ]
    },
    {
      group: "Backend & APIs",
      items: [
        "REST API Development",
        "API Integration",
        "Authentication",
        "Node.js",
        "FastAPI",
        "Flask",
        "Django",
        "Firebase"
      ]
    },
    {
      group: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Database Design"]
    },
    {
      group: "Data Science",
      items: ["Python", "NumPy", "Pandas", "Data Analysis"]
    },
    {
      group: "Security",
      items: [
        "Ethical Hacking",
        "Cybersecurity Fundamentals",
        "Kali Linux",
        "VMware"
      ]
    },
    {
      group: "Tools & Cloud",
      items: [
        "Git & GitHub",
        "AWS",
        "XAMPP",
        "DevOps",
        "Web Services",
        "Linux",
        "SEO"
      ]
    },
    {
      group: "IT Support",
      items: [
        "Technical Support",
        "Software Installation & Configuration",
        "System Management",
        "Data Entry Software",
        "Customer Service"
      ]
    },
    {
      group: "Soft Skills",
      items: [
        "Communication",
        "Digital Communication",
        "Problem Solving",
        "Teamwork"
      ]
    }
  ],

  /* -------------------------------------------------------------- projects */
  /* HOW TO ADD LINKS
     live : full URL of the deployed site, e.g. "https://myapp.vercel.app"
            leave "" if not deployed  -> the "Live demo" button hides itself
     code : GitHub repository URL
            leave "" if private      -> the "Code" button hides itself
     Copy a block, paste your URL, save, refresh. Done.                    */
  projects: [
    {
      title: "AI Video Generator",
      category: "AI & Python",
      featured: true,
      image: "assets/img/opt/project-AI.jpg",
      summary:
        "AI-powered video generation pipeline with automation and media processing built on top of it.",
      stack: ["Python", "JavaScript", "HTML", "CSS", "API Integration", "Git"],
      live: "",
      code: ""
    },
    {
      title: "GiligERP",
      category: "Full Stack",
      featured: true,
      image: "assets/img/opt/project-python-flask2.jpg",
      summary:
        "An ERP and management platform covering records, operations and day-to-day workflow management.",
      stack: ["PHP", "MySQL", "SQL", "JavaScript", "HTML", "CSS", "Git"],
      live: "",
      code: ""
    },
    {
      title: "University ERP System",
      category: "Full Stack",
      featured: true,
      image: "assets/img/opt/project-ml-extra.jpg",
      summary:
        "University ERP platform spanning administration, academics and student records in one system.",
      stack: ["PHP", "MySQL", "SQL", "HTML", "CSS", "JavaScript", "DevOps"],
      live: "",
      code: ""
    },
    {
      title: "Food Recipe Website",
      category: "Full Stack",
      featured: true,
      image: "assets/img/opt/project-blog-logo.jpg",
      summary:
        "Recipe-sharing platform with categories, search and a clean, app-like browsing experience.",
      stack: ["React.js", "JavaScript", "HTML", "CSS", "API Integration"],
      live: "",
      code: ""
    },
    {
      title: "Online Voting System",
      category: "Full Stack",
      featured: true,
      image: "assets/img/opt/project-ml-2.jpg",
      summary:
        "Secure online voting platform where users register, log in and cast their votes with authenticated results counting.",
      stack: ["PHP", "MySQL", "SQL", "HTML", "CSS", "JavaScript", "Git"],
      live: "",
      code: ""
    },
    {
      title: "Bank Management System",
      category: "Web Apps",
      image: "assets/img/opt/project-python-flask1.jpg",
      summary:
        "Banking system handling accounts, transactions and customer records securely.",
      stack: ["PHP", "MySQL", "SQL", "HTML", "CSS", "JavaScript", "XAMPP"],
      live: "",
      code: ""
    },
    {
      title: "DocSync",
      category: "Web Apps",
      image: "assets/img/opt/project-library-logo.jpg",
      summary:
        "Web-based platform that simplifies document management and synchronisation for easy sharing and organisation.",
      stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      live: "",
      code: ""
    },
    {
      title: "Hospital Management System",
      category: "Web Apps",
      image: "assets/img/opt/project-python-flask3.jpg",
      summary:
        "Healthcare management system for patient records, appointments and hospital operations.",
      stack: ["PHP", "MySQL", "SQL", "HTML", "CSS", "JavaScript", "XAMPP"],
      live: "",
      code: ""
    },
    {
      title: "Shopping / Supermarket System",
      category: "Web Apps",
      image: "assets/img/opt/project-ml-5.jpg",
      summary:
        "Store and inventory management with product catalogue, cart and order handling.",
      stack: ["PHP", "MySQL", "SQL", "HTML", "CSS", "JavaScript", "APIs"],
      live: "",
      code: ""
    },
    {
      title: "Restaurant Table Booking",
      category: "Web Apps",
      image: "assets/img/opt/project-ml-4.jpg",
      summary:
        "Restaurant reservation system for customer bookings and table allocation.",
      stack: ["PHP", "MySQL", "SQL", "HTML", "CSS", "JavaScript"],
      live: "",
      code: ""
    },
    {
      title: "Hostel Management System",
      category: "Web Apps",
      image: "assets/img/opt/project-python-flask4.jpg",
      summary:
        "Hostel management platform for room allocation, student details and fee tracking.",
      stack: ["PHP", "MySQL", "SQL", "HTML", "CSS", "JavaScript"],
      live: "",
      code: ""
    },
    {
      title: "Hotel Management System",
      category: "Web Apps",
      image: "assets/img/opt/project-python-django1.jpg",
      summary:
        "Hotel booking and management system with reservations and customer handling.",
      stack: ["PHP", "MySQL", "SQL", "HTML", "CSS", "JavaScript"],
      live: "",
      code: ""
    },
    {
      title: "Land Record System",
      category: "Web Apps",
      image: "assets/img/opt/project-python-django2.jpg",
      summary:
        "Digital land record management for storing and tracking ownership information.",
      stack: ["PHP", "MySQL", "SQL", "HTML", "CSS", "JavaScript"],
      live: "",
      code: ""
    },
    {
      title: "Laundry Management System",
      category: "Web Apps",
      image: "assets/img/opt/project-python-django3.jpg",
      summary:
        "Laundry service platform with order tracking and customer management.",
      stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      live: "",
      code: ""
    },
    {
      title: "Medical Card Generation System",
      category: "Web Apps",
      image: "assets/img/opt/project-python-django4.jpg",
      summary:
        "System for generating and managing digital medical cards efficiently.",
      stack: ["PHP", "MySQL", "SQL", "HTML", "CSS"],
      live: "",
      code: ""
    },
    {
      title: "Online Admission System",
      category: "Web Apps",
      image: "assets/img/opt/project-ai-1.jpg",
      summary:
        "Online admission platform for student registration and application management.",
      stack: ["PHP", "MySQL", "SQL", "HTML", "CSS", "JavaScript"],
      live: "",
      code: ""
    },
    {
      title: "Online Course Registration System",
      category: "Web Apps",
      image: "assets/img/opt/project-AI-1378x1000.jpg",
      summary:
        "Course registration system managing student enrollments and subjects.",
      stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      live: "",
      code: ""
    },
    {
      title: "Online DJ Booking System",
      category: "Web Apps",
      image: "assets/img/opt/project-ml-1.jpg",
      summary:
        "Booking management platform for DJs, events and schedule coordination.",
      stack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
      live: "",
      code: ""
    },
    {
      title: "Student Management System",
      category: "Web Apps",
      image: "assets/img/opt/project-ml-6.jpg",
      summary:
        "Student information system handling records, attendance and results.",
      stack: ["Java", "MySQL", "SQL", "HTML", "CSS"],
      live: "",
      code: ""
    },
    {
      title: "University Management System",
      category: "Web Apps",
      image: "assets/img/opt/gan.jpg",
      summary:
        "Complete university management project with modules for students, staff and administration.",
      stack: ["Java", "MySQL", "SQL", "HTML", "CSS", "JavaScript"],
      live: "",
      code: ""
    },
    {
      title: "Student Portal",
      category: "Full Stack",
      image: "assets/img/opt/project-ml-7.jpg",
      summary:
        "Online student portal for accessing academic and personal information.",
      stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      live: "",
      code: ""
    },
    {
      title: "Orpheus FastAPI",
      category: "AI & Python",
      image: "assets/img/opt/project-ml-3.jpg",
      summary:
        "Backend APIs built with FastAPI for modern web applications and automation tasks.",
      stack: ["Python", "REST API", "API Integration", "Git"],
      live: "",
      code: ""
    },
    {
      title: "Voice-Based AI News Assistant",
      category: "AI & Python",
      image: "assets/img/opt/white-ai-wallpaper.jpg",
      summary:
        "AI voice assistant that reads out news updates using speech and automation tech.",
      stack: ["Python", "REST API", "API Integration", "JavaScript", "Firebase"],
      live: "",
      code: ""
    },
    {
      title: "Universal Video Analyzer",
      category: "AI & Python",
      image: "assets/img/opt/computer-vision-v2-04.jpg",
      summary:
        "Smart video analysis tool that extracts and processes information from video files.",
      stack: ["Python", "REST API", "API Integration", "JavaScript"],
      live: "",
      code: ""
    },
    {
      title: "YouTube Video Downloader",
      category: "AI & Python",
      image: "assets/img/opt/project-music-player.jpg",
      summary:
        "Tool to download and manage videos from YouTube behind a simple interface.",
      stack: ["Python", "API Integration", "HTML", "CSS", "JavaScript"],
      live: "",
      code: ""
    },
    {
      title: "This Portfolio",
      category: "Full Stack",
      image: "assets/img/opt/project-quizup-logo-1.jpg",
      summary:
        "This site — a fast, accessible portfolio with a single-file content system.",
      stack: ["HTML", "CSS", "JavaScript", "React", "Git"],
      live: "",
      code: "https://github.com/Ameer-coder-2000/ameerabdelkareem"
    }
  ],

  /* -------------------------------------------------------------- showreel */
  /* A short video explaining my graphic design process.

     Behaviour (handled for you in app.js):
       - starts playing by itself, silently, the moment it scrolls into view
       - pauses again as soon as it leaves the screen, so it never burns CPU
       - the speaker button in the corner turns the sound on/off

     Keep it muted by default: every browser blocks autoplay that has sound,
     so an unmuted video would simply refuse to start.

     To swap the video, drop your file in assets/media/ and change `src`
     (and `poster` if you make one). A portrait clip looks best here — the
     layout reserves a tall 9:16 shape. */
  showreel: {
    heading: "How I design, explained by me",
    lead: "Rather than list tools, here is a short walkthrough of the way I actually think about layout, colour and type. It plays on its own when you reach it.",
    caption: "Graphic design walkthrough",
    meta: "0:42 \u00b7 silent until you unmute",
    src: "assets/media/design-walkthrough.mp4",
    poster: "assets/media/design-walkthrough-poster.jpg",
    width: 576,
    height: 1024,
    alt: "Screen recording of Ameer explaining his graphic design process",
    soundHint: "Sound is off \u2014 tap the speaker to listen",
    facts: [
      { value: "42s", label: "walkthrough" },
      { value: "9:16", label: "vertical" },
      { value: "Muted", label: "by default" }
    ]
  },

  /* ------------------------------------------------------------ experience */
  experience: [
    {
      role: "Full Stack Developer",
      org: "P.P. Savani University — project based",
      period: "Aug 2023 — Present",
      icon: "code",
      summary:
        "Developing and maintaining web applications end to end — from database schema and authentication to responsive front-end.",
      points: [
        "Built a fully functional ERP system and a secure university voting system with PHP, MySQL, HTML, CSS and JavaScript.",
        "Used XAMPP and phpMyAdmin for local development and testing.",
        "Documented projects and collaborated in teams for university submissions.",
        "Focused on responsive design and user-friendly interfaces."
      ],
      tools: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "React.js", "Node.js", "MongoDB"]
    },
    {
      role: "IT Support & System Management",
      org: "Technical Support",
      period: "Ongoing",
      icon: "support",
      summary:
        "Support-oriented experience troubleshooting, configuring and maintaining day-to-day systems.",
      points: [
        "Software installation, configuration and system management.",
        "Data entry software and record keeping with accuracy and speed.",
        "Clear customer communication and calm problem solving under pressure."
      ],
      tools: ["IT Support", "Technical Support", "DevOps", "SEO", "Web Services"]
    }
  ],

  /* ------------------------------------------------------------- education */
  education: [
    {
      title: "BSc Information Technology",
      org: "PP Savani University (PPSU)",
      location: "Surat, Gujarat, India",
      period: "2023 — Present",
      icon: "cap",
      points: [
        "GPA: 3.88 / 4.00",
        "Senior secondary completed at Royal College, Khartoum, Sudan"
      ]
    },
    {
      title: "Diploma in Pharmacy",
      org: "Khartoum, Sudan",
      location: "Khartoum, Sudan",
      period: "2021 — 2022",
      icon: "cap",
      points: [
        "Certified in Pharmacy Basics and Medical Studies",
        "Course completed in Khartoum, Sudan"
      ]
    }
  ],

  /* ------------------------------------------------------- certifications */
  certifications: [
    {
      title: "Backend Development with ASP.NET",
      org: "Coursera",
      period: "2026",
      icon: "check",
      points: ["Server-side development, APIs and data access fundamentals."]
    },
    {
      title: "From Zero to Live Website — AWS",
      org: "AWS Cloud Clubs, PP Savani University",
      period: "2026",
      icon: "check",
      points: ["Hands-on cloud session covering deploying a website from scratch."]
    },
    {
      title: "Introduction to Ethical Hacking",
      org: "careerninja",
      period: "2024",
      icon: "check",
      points: ["Foundations of ethical hacking and security fundamentals."]
    },
    {
      title: "Tech Globe Participation",
      org: "Certificate of participation",
      period: "",
      icon: "spark",
      points: ["Active member of GDGC and Cultural Representative."]
    }
  ],

  /* --------------------------------------------------------------- contact */
  contact: {
    heading: "Let's build something together.",
    body:
      "Got a project, a role, or a system that needs fixing? Send a message and I'll get back to you.",
    email: "darkness.2000.2000.1000@gmail.com",
    copyLabel: "Copy email",
    copiedLabel: "Copied",
    resume: "Resume.pdf",
    resumeLabel: "Download resume (PDF)",
    note: "Open to full stack development and IT support roles, remote or on-site."
  },

  footer: {
    note: "Designed and built from scratch.",
    backToTop: "Back to top"
  }
};