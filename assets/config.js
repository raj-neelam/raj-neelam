/**
 * ════════════════════════════════════════════════════════
 *  config.js — Central configuration for Raj Gaurav's portfolio
 *  Edit this file to update all site content without touching
 *  index.html, style.css, or script.js.
 * ════════════════════════════════════════════════════════
 */

/* ── Personal Info ── */
const CONFIG_PERSONAL = {
    name: 'Raj Gaurav',
    tagline: 'AI/ML Engineer',          // shown under name
    location: 'Roorkee, India',
    birthday: 'July 14, 2003',
    email: 'rajneelamgaurav@gmail.com',
    phone: '+91 6206295560',
    website: 'https://rajgaurav.site',
    avatar: 'https://github.com/raj-neelam.png',
    // Roles cycled in the typewriter — add/remove freely
    roles: [
        'AI/ML Engineer',
        'Deep Learning Dev',
        'Agentic AI Builder',
        'RL Researcher',
        'GDG Core Member',
    ],
};

/* ── Socials ── */
const CONFIG_SOCIALS = [
    { icon: 'fab fa-github', url: 'https://github.com/raj-neelam', label: 'GitHub' },
    { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/raj-neelam-80666920b/', label: 'LinkedIn' },
    { icon: 'fab fa-x-twitter', url: 'https://twitter.com/RajNGaurav', label: 'Twitter' },
    { icon: 'fab fa-instagram', url: 'https://www.instagram.com/raj_gaurav_7_/', label: 'Instagram' },
    { icon: 'fab fa-discord', url: 'https://discord.com/users/rajneelamgaurav', label: 'Discord' },
];

/* ── Navigation Tabs ── */
const CONFIG_NAV = [
    { id: 'about', label: 'About', icon: 'fas fa-user' },
    { id: 'resume', label: 'Resume', icon: 'fas fa-file-lines' },
    { id: 'projects', label: 'Projects', icon: 'fas fa-folder-open' },
    { id: 'mywork', label: 'My Work', icon: 'fab fa-github' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-paper-plane' },
];

/* ── Stats (About section counters) ── */
const CONFIG_STATS = [
    { value: 5, suffix: '+', label: 'Years Learning' },
    { value: 12, suffix: '+', label: 'Projects Built' },
    { value: 20, suffix: '+', label: 'Technologies' },
    { value: 600, suffix: '+', label: 'Students Taught' },
];

/* ── Services / What I Do ── */
const CONFIG_SERVICES = [
    { icon: 'fas fa-brain', title: 'Machine Learning', desc: 'End-to-end ML pipelines — data, training, evaluation, deployment.' },
    { icon: 'fas fa-gamepad', title: 'Reinforcement Learning', desc: 'Reward-driven agents that learn robust strategies from experience.' },
    { icon: 'fas fa-magic', title: 'Generative AI', desc: 'Building & fine-tuning LLMs, image models and agentic systems.' },
    { icon: 'fas fa-robot', title: 'Agentic Automation', desc: 'Multi-step autonomous agents that execute tasks end-to-end.' },
    { icon: 'fas fa-microchip', title: 'Custom AI Solutions', desc: 'Lightweight, deployable AI tailored to your product needs.' },
    { icon: 'fas fa-chalkboard-user', title: 'Teaching & Workshops', desc: 'Demos and mentoring that make complex AI accessible.' },
];

/* ────────────────────────────────────────────────────
   RESUME
   ──────────────────────────────────────────────────── */

/* Education — add/remove objects freely */
const CONFIG_EDUCATION = [
    {
        date: '2023 — 2027',
        title: 'Quantum University, Roorkee',
        body: 'B.Tech CSE — AI & ML specialization',
    },
    {
        date: '2021 — 2023',
        title: 'DAV Dhanupura, Ara',
        body: 'Intermediate — Science stream',
    },
    {
        date: '2018 — 2021',
        title: 'DAV Pusauli, Kaimur',
        body: 'Matriculation',
    },
];

/* Experience — add/remove objects freely */
const CONFIG_EXPERIENCE = [
    {
        date: '2026 — Present',
        title: 'Research Assistant',
        body: 'Working under professors on research papers.',
    },
    {
        date: '2025 — 2026',
        title: 'Core Team — GDG',
        body: 'Taught 100s about GenAI & cloud. Organised international hackathons.',
    },
    {
        date: '2023 — 2024',
        title: 'Research Projects',
        body: 'Deepfake detection, neural network experiments.',
    },
    {
        date: '2021 — 2023',
        title: 'Self-learning Phase',
        body: 'Python, C, ML, DL, cloud — self-taught foundation.',
    },
];

/**
 * Skills — each group has a label and a list of skill objects.
 * skill.width = percentage (0-100) for the bar fill.
 */
const CONFIG_SKILLS = [
    {
        group: 'Core AI/ML',
        items: [
            { name: 'Machine Learning', width: 80 },
            { name: 'Deep Learning', width: 75 },
            { name: 'Reinforcement Learning', width: 65 },
        ],
    },
    {
        group: 'Languages',
        items: [
            { name: 'Python', width: 90 },
            { name: 'JavaScript', width: 60 },
            { name: 'C / C++', width: 55 },
        ],
    },
    {
        group: 'Frameworks & Tools',
        items: [
            { name: 'PyTorch / TensorFlow', width: 75 },
            { name: 'LangChain / LangGraph', width: 70 },
            { name: 'Cloud & Git', width: 65 },
        ],
    },
];

/**
 * Tech Stack groups — shown as chip tags in Resume.
 */
const CONFIG_TECH_STACK = [
    {
        group: 'AI/ML',
        chips: ['PyTorch', 'TensorFlow', 'scikit-learn', 'OpenCV', 'LangChain', 'LangGraph', 'n8n', 'Pandas', 'PyAutoGUI'],
    },
    {
        group: 'Web & App',
        chips: ['FastAPI', 'React', 'Node.js', 'Flutter', 'MongoDB', 'Docker'],
    },
    {
        group: 'Visualization',
        chips: ['Plotly', 'Matplotlib', 'TensorBoard', 'Pygame'],
    },
    {
        group: 'Hardware / IoT',
        chips: ['Arduino', 'ESP32', 'Raspberry Pi'],
    },
    {
        group: 'DevOps',
        chips: ['Git', 'GitHub', 'Render', 'Vercel', 'Postman'],
    },
];

/* ────────────────────────────────────────────────────
   PROJECTS
   Each project:
     name        — display title
     cover       — image filename inside assets/images/ (or null)
     icon        — FA class used when no image
     category    — used for filter chip label
     github      — GitHub repo URL  (null to hide GH button)
     demo        — Live demo / try-it URL (null to hide Try button)
     description — short blurb shown on the card
   ──────────────────────────────────────────────────── */
const CONFIG_PROJECTS = [
    {
        name: 'Movie Recommendation System',
        cover: 'Movie-Recommendation-System.png',
        icon: 'fas fa-film',
        category: 'Machine Learning',
        github: 'https://github.com/raj-neelam/movie-recommendation-system',
        demo: null,
        description: 'Content-based & collaborative filtering engine built with Python & scikit-learn.',
    },
    {
        name: 'Digit Recognition',
        cover: 'Digit-Recognition.png',
        icon: 'fas fa-eye',
        category: 'Deep Learning',
        github: 'https://github.com/raj-neelam/Digit-Recognition',
        demo: 'https://raj-neelam.github.io/Digit-Recognition/',
        description: 'CNN trained on MNIST with a canvas web UI to draw and classify digits in real time.',
    },
    {
        name: 'Flappy Bird NEAT AI',
        cover: 'Flappy-Bird-NEAT-AI-Trainer.png',
        icon: 'fas fa-gamepad',
        category: 'Reinforcement Learning',
        github: 'https://github.com/raj-neelam/Flappy-Bird-NEAT-AI-Trainer',
        demo: 'https://raj-neelam.github.io/Flappy-Bird-NEAT-AI-Trainer/',
        description: 'Neuroevolution agent that learns to play Flappy Bird from scratch via NEAT.',
    },
    {
        name: 'Neural Network Visualizer',
        cover: 'Neural-Network-Playground.png',
        icon: 'fas fa-chart-line',
        category: 'Deep Learning',
        github: 'https://github.com/raj-neelam/Neural-network-Visualizer',
        demo: 'https://raj-neelam.github.io/Neural-network-Visualizer/',
        description: 'Interactive network that visualises layer activations and weight matrices.',
    },
    {
        name: 'Titanic Survival Prediction',
        cover: 'titanic-survival.png',
        icon: 'fas fa-ship',
        category: 'Machine Learning',
        github: 'https://github.com/raj-neelam/titanic-survival',
        demo: 'https://titanic-survival-1jwj.onrender.com/',
        description: 'Classic ML pipeline — feature engineering, XGBoost, & Streamlit dashboard.',
    },
    {
        name: 'Linear Regression Visualizer',
        cover: 'Visualize-Linear-Regression.png',
        icon: 'fas fa-chart-line',
        category: 'Machine Learning',
        github: 'https://github.com/raj-neelam/Visualize-Linear-Regression',
        demo: 'https://raj-neelam.github.io/Visualize-Linear-Regression/',
        description: 'Animated gradient descent on a live scatter plot — great for teaching ML basics.',
    },
    {
        name: 'MNIST Autoencoder Visualization',
        cover: 'MNIST-Autoencoder-Visualization.png',
        icon: 'fas fa-chart-line',
        category: 'Deep Learning',
        github: 'https://github.com/raj-neelam/MNIST-Autoencoder-Visualization',
        demo: 'https://raj-neelam.github.io/MNIST-Autoencoder-Visualization/',
        description: 'A very simple MNIST-Digit autoencoder for 2D Latent Space Visualization along with the Model Training Code and visualization Website Code ',
    },
    {
        name: 'Language Translation with Transformers',
        cover: 'Language-Translation-with-Transformers.png',
        icon: 'fas fa-chart-line',
        category: 'Transformers',
        github: 'https://github.com/raj-neelam/Language-Translation-with-Transformers',
        demo: null,
        description: 'Language translation using progressively advanced models, from Seq2Seq RNNs to a custom coded Transformer. ',
    },
    {
        name: 'CharGPT',
        cover: 'CharGPT.png',
        icon: 'fas fa-chart-line',
        category: 'Transformers',
        github: 'https://github.com/raj-neelam/CharGPT',
        demo: null,
        description: 'A custom-built GPT-like character language model demonstrating Transformer internals, efficient training, and story-style text generation. ',
    },
];

/* ── GitHub username for My Work section ── */
const CONFIG_GITHUB_USER = 'raj-neelam';

/* ── Contact map embed (Google Maps iframe src) ── */
const CONFIG_MAP_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55361.614822005315!2d77.85362601237544!3d29.86136305384657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb36e08b35119%3A0x798f5dc25ebd0a72!2sRoorkee%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1736681777777!5m2!1sen!2sin';
