export const navItems = [
  { id: 'home', label: 'HOME', sector: '01' },
  { id: 'about', label: 'ABOUT', sector: '02' },
  { id: 'skills', label: 'SKILLS', sector: '03' },
  { id: 'projects', label: 'PROJECTS', sector: '04' },
  { id: 'blog', label: 'BLOG', sector: '05' },
  { id: 'contact', label: 'CONNECT', sector: '06' }
];

export const skills = [
  {
    name: 'KUBERNETES',
    binary: 'CLUSTER_MANAGER.EXE',
    code: 'ORCH // K8S-v1.28',
    level: 92,
    metrics: [
      ['PODS_RUNNING', '142', 'mint'],
      ['CPU_UTIL', '45%', 'text'],
      ['MEM_UTIL', '68%', 'warning']
    ],
    icon: 'boxes'
  },
  {
    name: 'DOCKER',
    binary: 'RUNTIME_ENGINE',
    code: 'CNTNR // DKR-v24',
    level: 95,
    metrics: [['IMAGE_CACHE', '418'], ['BUILD_DELTA', '12s']],
    icon: 'container'
  },
  {
    name: 'JENKINS',
    binary: 'AUTOMATION_ENGINE',
    code: 'PIPE // JENKINS',
    level: 90,
    metrics: [['JOB_QUEUE', '14'], ['FAIL_RATE', '0.2%']],
    icon: 'workflow'
  },
  {
    name: 'GITLAB CI/CD',
    binary: 'AUTOMATION_PIPELINE',
    code: 'PIPE // GITLAB',
    level: 92,
    logs: ['> build_job_04: SUCCESS', '> deploy_prod: IN_PROGRESS...'],
    icon: 'workflow'
  },
  {
    name: 'GIT / GITHUB',
    binary: 'VERSION_CONTROL',
    code: 'SCM // GIT',
    level: 88,
    chart: [22, 34, 18, 48, 72, 42, 26],
    icon: 'github'
  },
  {
    name: 'AWS / EC2',
    binary: 'CLOUD_INFRA',
    code: 'CLOUD // AWS',
    level: 85,
    chart: [62, 58, 71, 74, 68, 77, 80],
    icon: 'cloud'
  },
  {
    name: 'PYTHON',
    binary: 'SCRIPTING_ENGINE',
    code: 'LANG // PY',
    level: 94,
    metrics: [['SCRIPTS', '32'], ['AUTOMATION', 'HIGH']],
    icon: 'code2'
  },
  {
    name: 'BASH / LINUX',
    binary: 'SYSTEM_SHELL',
    code: 'OPS // LINUX',
    level: 84,
    metrics: [['SHELL_SCRIPTS', '18'], ['SERVERS', '12']],
    icon: 'terminalsquare'
  },
  {
    name: 'JAVASCRIPT',
    binary: 'WEB_RUNTIME',
    code: 'LANG // JS',
    level: 96,
    metrics: [['UI_MODULES', '27'], ['SERVICES', '14']],
    icon: 'braces'
  },
  {
    name: 'NODE.JS',
    binary: 'BACKEND_RUNTIME',
    code: 'RUNTIME // NODE',
    level: 90,
    metrics: [['APIS', '19'], ['EVENTS', '204']],
    icon: 'filecode2'
  },
  {
    name: 'REACT.JS',
    binary: 'UI_RUNTIME',
    code: 'FRAMEWORK // REACT',
    level: 91,
    metrics: [['COMPONENTS', '46'], ['ROUTES', '8']],
    icon: 'atom'
  },
  {
    name: 'MONGODB / SQL',
    binary: 'DATA_LAYER',
    code: 'DATA // PERSISTENT',
    level: 83,
    metrics: [['COLLECTIONS', '22'], ['QUERIES', '140']],
    icon: 'database'
  },
  {
    name: 'C / C++',
    binary: 'LOW_LEVEL_LANG',
    code: 'LANG // C',
    level: 78,
    metrics: [['ALGORITHMS', 'DSA'], ['SYSTEMS', 'FOUNDATION']],
    icon: 'binary'
  },
  {
    name: 'HTML / CSS',
    binary: 'MARKUP_STYLES',
    code: 'UI // HTML_CSS',
    level: 87,
    metrics: [['PAGES', '14'], ['STYLES', '96']],
    icon: 'filecode2'
  }
];

export const projects = [
  {
    id: 'incidentiq',
    name: 'IncidentIQ',
    repo: 'AKSHCHAUHAN1/IncidentIQ',
    type: 'AI incident intelligence platform',
    category: 'Observability / AIOps',
    description:
      'Microservice-based incident intelligence platform for monitoring websites, predicting anomalies, and tracking operational incidents.',
    about:
      'IncidentIQ combines a React dashboard, Node.js API gateway, website probing, data ingestion, and a Python ML service to surface incidents, anomaly patterns, predictions, and service health in one workflow.',
    github: 'https://github.com/AKSHCHAUHAN1/IncidentIQ.git',
    previewImage: '/incidentiq.png',
    screenshotLabel: 'IncidentIQ screenshot',
    stack: ['React', 'Node.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'PyTorch'],
    highlights: [
      'Website probing and data-ingestion services',
      'LSTM forecasting, Isolation Forest anomaly detection, and log classification',
      'Incident, analytics, approval, prediction, and site-management APIs'
    ],
    image: 'datacenter'
  },
  {
    id: 'modelflow',
    name: 'Modelflow',
    repo: 'Sanyamgoyal21/Modelflow',
    type: 'Zero-config ML deployment platform',
    category: 'MLOps / Deployment',
    description:
      'Platform that turns uploaded machine-learning models into production-ready API endpoints without requiring users to manage infrastructure.',
    about:
      'Modelflow is built for students and independent developers who need to deploy ML models quickly. It handles model upload, validation, containerization, inference serving, authentication, and endpoint management through a full-stack dashboard.',
    github: 'https://github.com/Sanyamgoyal21/Modelflow.git',
    previewImage: '/modelflow.png',
    screenshotLabel: 'Modelflow screenshot',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Python', 'Docker', 'AWS'],
    highlights: [
      'Model upload flow with validation and hosted inference APIs',
      'Google OAuth, dashboard management, and endpoint visibility',
      'Docker, Nginx, EC2, Auto Scaling Groups, and load-balancer oriented deployment'
    ],
    image: 'matrix'
  },
  {
    id: 'solaris',
    name: 'Solaris',
    repo: 'dhairyathareja/Solaris',
    type: 'Solar analysis and planning tool',
    category: 'Energy / Analytics',
    description:
      'Solar rooftop planning app that analyzes electricity bills, recommends system size, and models generation, savings, payback, and carbon offset.',
    about:
      'Solaris lets users upload electricity bills, extract monthly consumption, configure rooftop/system assumptions, and review solar feasibility through KPIs, charts, financial projections, and generated reports.',
    github: 'https://github.com/dhairyathareja/Solaris.git',
    previewImage: '/solaris.png',
    screenshotLabel: 'Solaris screenshot',
    stack: ['React', 'Vite', 'Three.js', 'GSAP', 'Recharts', 'Express', 'Docker'],
    highlights: [
      'Electricity bill upload and monthly consumption extraction',
      'Solar sizing, annual generation, grid offset, savings, payback, NPV, and IRR views',
      'Interactive dashboard with charts, report generation, and Docker/Nginx deployment setup'
    ],
    image: 'grid'
  }
];

export const blogPosts = [
  {
    title: 'The Future of AI Deployment: Building Zero-Configuration Pipelines on AWS',
    tag: 'MLOPS // DEPLOYMENT',
    id: 'AI_DEP_AWS',
    date: '2026.05.05',
    read: '6 MIN READ',
    image: '/article1.png',
    summary:
      'Machine learning models are changing faster than ever before, yet implementing them is still a huge challenge. The answer lies in zero-config deployment pipelines that automate infrastructure building.',
    body: [
      'Machine learning models are changing faster than ever before, yet implementing them is still a huge challenge. While data scientists are great at developing machine learning models, implementing their Python code into a highly available production-ready API requires expert knowledge of DevOps practices. This causes delays in release cycles and inconsistent environments. The answer lies in zero-config deployment pipelines that automate the tedious job of building cloud infrastructure.',
      '### The Problem of Implementing Machine Learning Models',
      'The conventional approach to implementation involves human intervention at almost every stage of the process. First, the engineer must verify the model itself, then create a unique Dockerfile, configure reverse proxies for API routing, provision servers, and deploy load balancers. Not only does this make room for human error, but it also takes up much-needed engineering time. In situations where a model requires scaling rapidly due to sudden traffic spikes, manual infrastructure cannot cope.',
      '### Zero-Configuration Deployment Pipeline',
      'In a zero-configuration platform, the infrastructure used for the project is abstracted away from the end-user. Ideally, the process would involve uploading a model, after which the pipeline will automate the entire process, including but not limited to packaging, configuring reverse proxies, and cloud deployment.',
      { type: 'image', src: '/article1.png', alt: 'Zero-Configuration AI Pipeline Architecture' },
      '### Infrastructure Design Using AWS',
      'Such a setup will require a blend of container orchestration tools and cloud technologies.',
      '**Packaging Using Docker and Reverse Proxies Using Nginx:** The initial step towards automation in our case involves packaging the model to be deployed using Docker. Additionally, we use nginx to configure reverse proxies to route all incoming HTTP requests from clients to the server hosting the model.',
      '**Availability using EC2, ASG, and ALB:** Once the workload is dockerized, the next step is to deploy it into the cloud. Instead of using only one Amazon EC2 instance, we leverage AWS’ auto scaling feature by placing the workload behind an application load balancer. As such, when many users connect to the API, AWS automatically spins more instances to distribute the request evenly before shutting them off when there is less traffic.',
      '### Conclusion',
      'A team can save up to 30% of time spent on deployment processes using such a pipeline and minimize DevOps operations during routine updates since there will be no need for human interaction with this system. Zero configuration represents the future of AI application development.',
      '### Frequently Asked Questions',
      '**Why do you recommend an Application Load Balancer (ALB) rather than a Classic Load Balancer?**',
      'ALBs are Layer 7 (HTTP/HTTPS) load balancers capable of directing traffic based on the URL path, making them perfect for routing requests to particular services or APIs that host several AI models.',
      '**Would this approach be costly for a project with limited resources?**',
      'Not really since it’s possible to adjust the minimum capacity of an Auto Scaling Group to just one small instance, allowing for efficient scaling and incurring costs only when required.',
      { type: 'cta', text: '(Call to action): Curious about my design for a zero-configuration platform? Feel free to explore the "Modelflow" project on my portfolio page or inspect the architecture codebase on my ', linkText: 'GitHub profile!', linkUrl: 'https://github.com/Sanyamgoyal21/Modelflow' }
    ]
  },
  {
    title: 'Shifting Left: The Case for DevSecOps in Cloud-Native Applications',
    tag: 'DEVSECOPS // CI-CD',
    id: 'SHIFT_LEFT_SEC',
    date: '2026.05.04',
    read: '5 MIN READ',
    image: '/article2.png',
    summary:
      'Explore how to integrate automated security tools directly into the CI/CD pipeline, shifting security left to catch vulnerabilities early and increase release speed.',
    body: [
      'As organizations seek to accelerate their software development processes, CI/CD pipelines have emerged as the norm in engineering practices. Nonetheless, rapid software delivery without proper security measures will eventually lead to catastrophic results. Traditionally, security testing is conducted towards the end of the development process, serving as an impenetrable barrier just before production. DevSecOps flips this paradigm on its head by emphasizing shifting left, where security controls are performed at the earliest stage of the CI/CD pipeline.',
      '### The Challenges of CI/CD Workflows in a DevOps Environment',
      'In conventional DevOps environments, code is compiled, tested, and then deployed in a staging environment prior to any security evaluation. In cases where significant security threats are identified in either the underlying Docker image or the Kubernetes deployment manifest, the release is put on hold until developers resolve the problem and reinitialize the pipeline.',
      '### Explanation of the "Shift Left" Approach',
      'To shift left, you have to embed automated security tools directly within the development process. The code will go through a series of stringent automated compliance tests before it is released into the main branch or production server.',
      { type: 'image', src: '/article2.png', alt: 'DevSecOps Shift Left Architecture' },
      '### Embedding Security Tools in GitLab CI/CD Pipeline',
      'Creating an effective pipeline requires tools that are designed for this purpose.',
      '**Image Scanning using Trivy:** Before a Docker image is built and deployed on a container registry, it should be scanned. Trivy is an open-source scanner for detecting vulnerabilities, which works seamlessly with GitLab CI. When the image is created with older versions of libraries containing vulnerabilities, Trivy scans will alert us about them. We can even set up the pipeline such that, in case of finding any \'HIGH\' or \'CRITICAL\' vulnerabilities, the image creation fails.',
      '**Policy-as-Code using Open Policy Agent (OPA):** While we take care of the security of our application, we need to consider securing the infrastructure as well. In orchestration tools such as Kubernetes (AWS EKS), OPA is a lifesaver for security professionals. We can write our own security policies through OPA. For example, it can automatically deny any deployment of Kubernetes pods as \'root\'.',
      '### Conclusion',
      'DevSecOps pipeline implementation shifts security challenges from a final challenge to an automated one. Enforcing vulnerability tests and policy-as-code prior to a production release allows engineering teams to reduce their number of critical vulnerabilities while increasing their release speed.',
      '### FAQ',
      '**Is the DevSecOps implementation going to require a complete restructure of your current pipeline infrastructure?**',
      'No, DevSecOps should be introduced incrementally. Start by introducing fast scanners such as Trivy into your current building phase before addressing Kubernetes policies.',
      '**What is Policy-as-Code?**',
      'This is the process of creating high-level code that represents your policies and security requirements, and using an automated tool such as OPA to test whether those policies are met by your deployment infrastructure.',
      { 
        type: 'cta', 
        parts: [
          '(Call to Action): Wondering how these tools perform in an actual CI/CD process? Feel free to connect with me via ',
          { text: 'LinkedIn', url: 'https://www.linkedin.com/in/akshchauhan1' },
          ' for a chat on cloud native security, or watch my DevSecOps demonstrations on my ',
          { text: 'GitHub profile!', url: 'https://github.com/AKSHCHAUHAN1' }
        ]
      }
    ]
  }
];

export const terminalHelp = [
  ['about', 'Display full about dossier'],
  ['skills', 'List complete skill matrix'],
  ['blogs', 'List all blogs with access IDs'],
  ['blog <id|name>', 'Open blog details by ID or title'],
  ['projects', 'List all project dossiers'],
  ['project <id|name>', 'Open project details by ID or name'],
  ['resume', 'Download tactical dossier'],
  ['history', 'Show command history'],
  ['history clear', 'Purge command history'],
  ['clear', 'Purge terminal output'],
  ['exit', 'Close terminal session']
];
