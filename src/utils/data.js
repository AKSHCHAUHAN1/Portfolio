export const personalInfo = {
  name: 'Aksh Chauhan',
  role: 'DevOps & Full-Stack Engineer',
  degree: 'B.Tech CSE (Major: DevOps)',
  institution: 'University of Petroleum and Energy Studies (UPES)',
  cgpa: '7.34',
  location: 'Dehradun / Haridwar, India',
  email: 'aksh111828@gmail.com',
  phone: '+91 8449612889',
  avatar: '/aksh-chauhan.jpg',
  resumeUrl: '/resume.pdf',
  github: 'https://github.com/AKSHCHAUHAN1',
  linkedin: 'https://linkedin.com/in/akshchauhan1',
  leetcode: 'https://leetcode.com/u/akshchauhan1',
  summary:
    'Computer Science undergraduate with full-stack development experience across front-end, back-end, and API layers, backed by a solid grounding in data structures, algorithms, and the software development lifecycle. Comfortable working in Agile teams with Git-based version control, CI/CD pipelines, and cloud fundamentals (AWS), and shipping production-style features – from database-backed CRUD flows to containerized deployments – both independently and as part of a team.'
};

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export const experiences = [
  {
    company: 'Xebia IT Architects',
    role: 'Frontend & API Engineering Intern',
    period: 'Jun 2026 – Jul 2026',
    duration: '2 Months',
    type: 'Internship',
    description:
      'Engineered the mission-critical front-end of a high-concurrency university management dashboard for a tier-1 client, delivering resilient CRUD operations and automated workflows.',
    points: [
      'Architected and owned the end-to-end Student Management module encompassing CRUD operations, audit archive systems, and automated ID-generation interfaces.',
      'Integrated resilient REST APIs to seamlessly bridge frontend UI states with microservice backend pipelines under tight SLA constraints.',
      'Collaborated within a cross-functional Agile team using shared GitLab repositories, MR reviews, and Git-based feature branching workflows.'
    ],
    tech: ['React.js', 'REST APIs', 'GitLab CI', 'JavaScript', 'Tailwind CSS', 'State Management']
  },
  {
    company: 'Bhavyaa Enterprises Pvt. Ltd.',
    role: 'Full-Stack & DevOps Intern',
    period: 'Jun 2025 – Jul 2025',
    duration: '2 Months',
    type: 'Internship',
    description:
      'Collaborated with core engineering to design, implement, and deploy a production full-stack web application backed by automated CI/CD and secure role-based access.',
    points: [
      'Engineered and tested a full-stack platform end-to-end, establishing automated GitHub Actions CI/CD workflows for linting, testing, and containerized artifact builds.',
      'Implemented robust Authentication and Role-Based Access Control (RBAC) security guardrails to enforce least-privilege principles.',
      'Authored comprehensive system documentation, architecture blueprints, and successfully handed off the production codebase for ongoing scaling.'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'GitHub Actions', 'RBAC & Auth', 'Docker']
  }
];

export const educationHistory = [
  {
    institution: 'University of Petroleum and Energy Studies (UPES)',
    degree: 'B.Tech in Computer Science and Engineering',
    specialization: 'Major: DevOps',
    grade: 'CGPA: 7.34',
    period: '2023 – 2027',
    location: 'Dehradun, India',
    status: 'In Progress (Final Years)',
    details:
      'Rigorous curriculum spanning Cloud Computing, Containerization & Orchestration, Advanced Computer Networks, Operating Systems, Database Management Systems, System Design, and Enterprise Software Architecture.'
  },
  {
    institution: 'Delhi Public School, Ranipur',
    degree: 'Senior Secondary Education (Class XII)',
    specialization: 'Science (PCM & Computer Science)',
    grade: 'Score: 78%',
    period: '2022 – 2023',
    location: 'Haridwar, India',
    status: 'Completed',
    details: 'Foundation in Mathematics, Physics, and Object-Oriented Programming principles in C++.'
  },
  {
    institution: 'Delhi Public School, Ranipur',
    degree: 'Secondary School Education (Class X)',
    specialization: 'Core Sciences & Mathematics',
    grade: 'Score: 91.8%',
    period: '2020 – 2021',
    location: 'Haridwar, India',
    status: 'Completed',
    details: 'Distinction honors with academic excellence in Mathematics and Sciences.'
  }
];

export const accomplishments = [
  {
    title: 'Solved 100+ DSA Problems on LeetCode',
    issuer: 'LeetCode',
    period: 'Ongoing',
    icon: 'binary',
    desc: 'Demonstrated continuous problem-solving proficiency across Trees, Graphs, Dynamic Programming, and Two-Pointer data structures in Python and C++.'
  },
  {
    title: 'AWS Cloud Quest: Cloud Practitioner',
    issuer: 'AWS Training & Certification',
    period: 'July 2026',
    icon: 'cloud',
    desc: 'Validated comprehensive operational skills in AWS Cloud architecture, compute (EC2/ASG), networking (VPC/ALB), storage (S3), and security best practices (IAM).'
  },
  {
    title: 'Finalist, Hack the Throne – National Level Hackathon',
    issuer: 'IIIT-Una (MERAKI Annual Technical Fest)',
    period: 'February 2026',
    icon: 'award',
    desc: 'Competed with elite university teams nationwide to build a real-time fault-tolerant distributed system under strict 36-hour hackathon deadlines.'
  },
  {
    title: 'Runner-up, ByteQuest – Technical Challenge',
    issuer: 'UPES ACM and ACM-W Student Chapter',
    period: 'April 2025',
    icon: 'shield',
    desc: 'Secured 2nd place in a high-intensity software engineering and algorithmic challenge testing rapid debugging, data structures, and system modeling.'
  },
  {
    title: 'Participated in Build4Bharat: Hackathon 9.0',
    issuer: 'UPES-CSI Student Chapter',
    period: 'March 2026',
    icon: 'terminal',
    desc: 'Developed a scalable cloud-first solution tackling enterprise automation challenges evaluated by top industry judges.'
  }
];

export const skillCategories = [
  {
    id: 'cloud',
    name: 'Cloud & Infrastructure',
    skills: [
      { name: 'AWS (EC2, ASG, ALB, IAM, EKS)', level: 90, icon: 'cloud' },
      { name: 'Docker & Containerization', level: 95, icon: 'container' },
      { name: 'Kubernetes (K8s)', level: 86, icon: 'boxes' },
      { name: 'Terraform', level: 82, icon: 'workflow' },
      { name: 'Nginx Reverse Proxy', level: 88, icon: 'server' },
      { name: 'Jenkins CI/CD', level: 85, icon: 'workflow' },
      { name: 'GitHub Actions', level: 92, icon: 'github' },
      { name: 'GitLab CI/CD', level: 90, icon: 'workflow' },
      { name: 'Linux / System Administration', level: 90, icon: 'terminalsquare' }
    ]
  },
  {
    id: 'fullstack',
    name: 'Full-Stack Web Development',
    skills: [
      { name: 'React.js (React 18)', level: 94, icon: 'atom' },
      { name: 'Node.js', level: 90, icon: 'filecode2' },
      { name: 'Express.js', level: 88, icon: 'braces' },
      { name: 'FastAPI (Python)', level: 92, icon: 'code2' },
      { name: 'REST APIs & Webhooks', level: 95, icon: 'globe' },
      { name: 'HTML5 & CSS3', level: 94, icon: 'filecode2' },
      { name: 'Tailwind CSS', level: 92, icon: 'laptop' }
    ]
  },
  {
    id: 'languages',
    name: 'Programming Languages',
    skills: [
      { name: 'Python', level: 94, icon: 'code2' },
      { name: 'C / C++', level: 85, icon: 'binary' },
      { name: 'JavaScript (ES6+)', level: 92, icon: 'braces' },
      { name: 'Bash / Shell Scripting', level: 88, icon: 'terminalsquare' }
    ]
  },
  {
    id: 'databases',
    name: 'Databases & CS Fundamentals',
    skills: [
      { name: 'PostgreSQL & TimescaleDB', level: 88, icon: 'database' },
      { name: 'MongoDB', level: 86, icon: 'harddrive' },
      { name: 'MySQL', level: 85, icon: 'database' },
      { name: 'Data Structures & Algorithms', level: 90, icon: 'binary' },
      { name: 'Object-Oriented Programming (OOP)', level: 92, icon: 'layers' },
      { name: 'Computer Networks & Security', level: 88, icon: 'shield' },
      { name: 'Operating Systems & DBMS', level: 87, icon: 'server' }
    ]
  }
];

export const skills = skillCategories.flatMap((cat) => cat.skills);

export const projects = [
  {
    id: 'incidentiq',
    name: 'IncidentIQ',
    title: 'AI Anomaly Detector & Incident Intelligence Platform',
    repo: 'AKSHCHAUHAN1/IncidentIQ',
    type: 'Observability / AIOps Platform',
    category: 'AIOps & Observability',
    description:
      'Mission-critical microservice-based incident intelligence platform engineered for proactive website health probing, real-time telemetry ingestion, and ML-powered SLA breach prediction.',
    about:
      'IncidentIQ bridges frontend operational dashboards with a distributed backend stack. It features an automated website health probing engine, high-throughput telemetry ingestion, and a Python machine learning service that forecasts anomalies 10–15 minutes ahead of critical SLA breaches.',
    github: 'https://github.com/AKSHCHAUHAN1/IncidentIQ.git',
    previewImage: '/incidentiq.png',
    screenshotLabel: 'IncidentIQ Live Telemetry Dashboard',
    stack: ['React 18', 'Node.js', 'FastAPI (Python)', 'PyTorch', 'scikit-learn', 'PostgreSQL (TimescaleDB)', 'Docker Compose'],
    metrics: [
      { label: 'Services Orchestrated', value: '10 Containers' },
      { label: 'Forecasting Horizon', value: '10-15 Min Ahead' },
      { label: 'Detection Engine', value: 'Isolation Forest + LSTM' },
      { label: 'DB Architecture', value: 'TimescaleDB Time-Series' }
    ],
    highlights: [
      'Built reactive executive dashboard UI with real-time incident notifications and approval workflows.',
      'Engineered an ML ensemble model leveraging LSTM forecasting and Isolation Forest for early anomaly classification.',
      'Orchestrated ten self-hosted containerized microservices via Docker Compose with dedicated healthchecks and restart policies.',
      'Integrated TimescaleDB time-series ingestion pipelines supporting high-cardinality telemetry metrics.'
    ]
  },
  {
    id: 'modelflow',
    name: 'Modelflow',
    title: 'Zero-Configuration AI Deployment Platform on AWS',
    repo: 'Sanyamgoyal21/Modelflow',
    type: 'MLOps & Cloud Infrastructure Platform',
    category: 'MLOps & Cloud Engineering',
    description:
      'Zero-configuration cloud platform that transforms uploaded machine-learning models into highly-available, production-ready inference API endpoints without manual infrastructure setup.',
    about:
      'Designed for developers and ML teams to bridge the gap between Python model artifacts and elastic production APIs. It automates model validation, dynamic containerization, reverse-proxy routing with Nginx, and cloud orchestration on AWS with Auto Scaling Groups and Application Load Balancers.',
    github: 'https://github.com/Sanyamgoyal21/Modelflow.git',
    previewImage: '/modelflow.png',
    screenshotLabel: 'Modelflow Deployment Dashboard',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'Docker', 'AWS (EC2, ASG, ALB)', 'Nginx', 'Google OAuth'],
    metrics: [
      { label: 'Cloud Platform', value: 'AWS Elastic Architecture' },
      { label: 'Traffic Distribution', value: 'Application Load Balancer' },
      { label: 'Autonomous Scaling', value: 'Auto Scaling Groups' },
      { label: 'Auth Protocol', value: 'Google OAuth 2.0 & RBAC' }
    ],
    highlights: [
      'Led frontend architectural design and deployed end-to-end platform on AWS with Auto Scaling Groups and ALB.',
      'Containerized every backend service using Docker multi-stage builds for consistent, repeatable releases.',
      'Configured Nginx reverse proxy to route high-frequency client HTTP requests efficiently across distributed instances.',
      'Integrated Google OAuth 2.0 and role-based access management for secure multi-tenant endpoint access.'
    ]
  },
  {
    id: 'solaris',
    name: 'Solaris',
    title: 'AI-Powered Solar Feasibility & Financial Analytics Platform',
    repo: 'dhairyathareja/Solaris',
    type: 'Energy Analytics & 3D Visualization',
    category: 'Full-Stack & Computer Vision',
    description:
      'Full-stack solar rooftop assessment and financial feasibility platform that extracts electricity consumption data using OCR and renders 3D rooftop solar generation models.',
    about:
      'Solaris allows residential and commercial clients to upload electricity utility bills, automatically extracts key billing parameters via Tesseract.js OCR, feeds forecasting logic, and calculates solar generation KPIs, payback timelines, NPV, and carbon offsets with interactive Three.js 3D rendering.',
    github: 'https://github.com/dhairyathareja/Solaris.git',
    previewImage: '/solaris.png',
    screenshotLabel: 'Solaris 3D Rooftop & Analytics',
    stack: ['React 18', 'Three.js', 'Node.js', 'FastAPI (Python)', 'MongoDB', 'Tesseract.js', 'Docker', 'Nginx'],
    metrics: [
      { label: 'OCR Engine', value: 'Tesseract.js Client-Side' },
      { label: '3D Rendering', value: 'Three.js / WebGL' },
      { label: 'Analytics Engine', value: 'FastAPI Payback & NPV' },
      { label: 'Deployment', value: 'Dockerized Microservices' }
    ],
    highlights: [
      'Engineered interactive frontend workflow with client-side OCR parsing for rapid electricity bill extraction.',
      'Implemented solar sizing algorithms modeling generation, grid offset, financial payback, and IRR curves.',
      'Integrated Three.js interactive 3D solar array visualizations for rooftop spatial planning.',
      'Deployed application as containerized microservices behind Nginx reverse proxy with automated health checks.'
    ]
  }
];

export const blogPosts = [
  {
    title: 'The Future of AI Deployment: Building Zero-Configuration Pipelines on AWS',
    tag: 'MLOps · Deployment',
    id: 'AI_DEP_AWS',
    date: '2026.05.05',
    read: '6 min read',
    image: '/article1.png',
    summary:
      'Machine learning models are evolving faster than ever, yet deploying them reliably remains a major bottleneck. The solution lies in zero-config automated deployment pipelines on AWS that abstract away cloud provisioning.',
    body: [
      'Machine learning models are evolving faster than ever before, yet deploying them to production remains a major bottleneck in engineering workflows. While data scientists excel at developing sophisticated algorithms, converting raw Python code into an elastic, highly-available API requires specialized DevOps expertise. This friction causes release delays, configuration drift, and environment mismatches. The answer lies in zero-configuration deployment pipelines that automate infrastructure provisioning from start to finish.',
      '### The Challenge of Traditional Model Serving',
      'The traditional deployment workflow requires manual intervention at almost every stage: validating dependencies, drafting Dockerfiles, configuring Nginx reverse proxies, provisioning compute instances, and hooking up load balancers. This manual overhead wastes vital engineering hours and introduces human error. When traffic suddenly spikes, manual infrastructure simply cannot keep pace.',
      '### Anatomy of a Zero-Configuration Architecture',
      'In a zero-configuration paradigm, cloud infrastructure complexity is entirely abstracted away. An engineer simply uploads their serialized model file (.pkl, .onnx, or .pt), and the platform takes over: automated verification, containerization, reverse-proxy generation, and cloud deployment.',
      { type: 'image', src: '/article1.png', alt: 'Zero-Configuration AI Pipeline Architecture' },
      '### Cloud Infrastructure on AWS: EC2, ASG, and ALB',
      'Building this platform on AWS combines compute elasticity with rock-solid reliability:',
      '**Docker Containerization & Nginx Routing:** The uploaded model is encapsulated in a lean Docker container with standardized inference endpoints. An Nginx reverse proxy sits in front of the container to handle SSL termination, request buffering, and path-based routing.',
      '**High Availability with Auto Scaling Groups & ALB:** Instead of a single brittle instance, workloads are placed behind an AWS Application Load Balancer (ALB). An Auto Scaling Group (ASG) continuously monitors CPU/memory thresholds, spinning up additional EC2 instances during peak load and gracefully terminating them when traffic subsides.',
      '### Measurable Impact',
      'By implementing automated deployment pipelines, engineering teams report reducing model release cycles by up to 70% while drastically cutting routine DevOps maintenance overhead. Zero-configuration platforms represent the definitive future of production AI.',
      '### Frequently Asked Questions',
      '**Why use an Application Load Balancer (ALB) over a Classic Load Balancer?**',
      'ALBs operate at Layer 7 (HTTP/HTTPS) and provide advanced path-based and host-based routing, which is essential for multi-tenant AI platforms serving diverse model endpoints.',
      '**How does the system keep infrastructure costs minimal?**',
      'The Auto Scaling Group can be configured with a minimal baseline capacity (even scaling down to 1 spot instance during idle periods) and scaling out dynamically only when incoming inference demand warrants it.',
      {
        type: 'cta',
        text: 'Want to review the actual zero-configuration architecture in action? Check out my Modelflow project or explore the repository on ',
        linkText: 'GitHub!',
        linkUrl: 'https://github.com/Sanyamgoyal21/Modelflow'
      }
    ]
  },
  {
    title: 'Shifting Left: The Case for DevSecOps in Cloud-Native Applications',
    tag: 'DevSecOps · CI/CD',
    id: 'SHIFT_LEFT_SEC',
    date: '2026.05.04',
    read: '5 min read',
    image: '/article2.png',
    summary:
      'Integrating security guardrails directly into CI/CD pipelines ensures vulnerabilities and compliance misconfigurations are caught at commit time rather than after reaching production.',
    body: [
      'In the drive toward rapid software delivery, CI/CD automation has become standard practice. However, shipping code fast without embedded security guardrails inevitably leads to catastrophic vulnerabilities. Historically, security audits occurred right before production — acting as a disruptive bottleneck. DevSecOps turns this on its head by "shifting left": embedding automated security validation into the earliest stages of the development cycle.',
      '### The Flaws of Late-Stage Security Audits',
      'When security is treated as an afterthought, vulnerabilities in base Docker images or Kubernetes manifests are only discovered days before launch. Developers must halt feature work, roll back deployments, and patch dependencies under severe pressure. Shifting left treats security as code.',
      '### Implementing Automated Security in CI/CD',
      'Shifting security left requires automated testing at each stage of the pipeline before code merges to main branches:',
      { type: 'image', src: '/article2.png', alt: 'DevSecOps Shift Left Architecture' },
      '### Essential Tooling in GitLab CI & GitHub Actions',
      'A resilient pipeline leverages purpose-built automated scanners:',
      '**Vulnerability Scanning with Trivy:** Before container images are pushed to a registry, Trivy scans OS packages and application dependencies for known CVEs. The pipeline can be configured to fail builds automatically if HIGH or CRITICAL severity issues are detected.',
      '**Policy-as-Code with Open Policy Agent (OPA):** Infrastructure security is just as crucial as application code. Using OPA and Gatekeeper in Kubernetes (such as AWS EKS), policies automatically reject pod definitions attempting to run with root privileges or missing CPU/memory limits.',
      '### Conclusion',
      'DevSecOps shifts security from a painful gatekeeper to an automated enabler. By catching vulnerabilities in pull requests and enforcing policy-as-code, organizations achieve faster release velocity without sacrificing security.',
      '### Frequently Asked Questions',
      '**Does adopting DevSecOps require rebuilding our entire CI/CD setup from scratch?**',
      'No. DevSecOps should be implemented incrementally. Start with container image scanning (Trivy) and static analysis in your existing build steps before introducing cluster-wide policy-as-code.',
      '**What is Policy-as-Code?**',
      'Policy-as-code is the practice of writing compliance rules and security requirements in high-level code, enabling automated verification across your deployment infrastructure.',
      {
        type: 'cta',
        parts: [
          'Interested in discussing automated CI/CD security and container scanning? Connect with me on ',
          { text: 'LinkedIn', url: 'https://linkedin.com/in/akshchauhan1' },
          ' or explore my open-source security configurations on ',
          { text: 'GitHub!', url: 'https://github.com/AKSHCHAUHAN1' }
        ]
      }
    ]
  }
];

export const terminalHelp = [
  ['experience', 'Display internships and professional work history'],
  ['projects', 'List all deployed projects'],
  ['project <id|name>', 'Inspect deep technical breakdown of a specific project'],
  ['skills', 'Output categorized technical skill matrix'],
  ['education', 'Show academic credentials'],
  ['certifications', 'List certifications and hackathon achievements'],
  ['resume', 'Trigger immediate download of resume PDF'],
  ['contact', 'Display contact channels (Email, Phone, LinkedIn)'],
  ['hire-me', 'Executive summary of why Aksh is a prime candidate'],
  ['about', 'Display background and career summary'],
  ['blogs', 'List engineering articles'],
  ['blog <id>', 'Read technical article directly in terminal'],
  ['history', 'Display command history'],
  ['clear', 'Clear terminal screen'],
  ['exit', 'Close terminal session']
];
