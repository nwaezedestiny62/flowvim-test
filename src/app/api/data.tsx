// Solution / Services Highlights
export const solutionData = [
  {
    title: "Training & Development",
    icon: "mdi:school",
    description: "Equip your teams with practical skills and knowledge aligned to your business goals and growth objectives."
  },
  {
    title: "Business Strategy",
    icon: "mdi:briefcase-outline",
    description: "Develop clear, actionable strategies that bridge vision and execution for sustainable growth."
  },
  {
    title: "Process Optimization",
    icon: "mdi:timeline-check",
    description: "Streamline operations, eliminate bottlenecks, and build efficient, scalable systems."
  },
  {
    title: "Performance Management",
    icon: "mdi:chart-line",
    description: "Drive accountability, productivity, and measurable results across your organization."
  },
  {
    title: "HR Management Solutions",
    icon: "mdi:account-tie-outline",
    description: "Align talent acquisition, engagement, and development with your strategic objectives."
  },
  {
    title: "Change Management",
    icon: "mdi:shuffle-variant",
    description: "Navigate transitions smoothly while maintaining productivity and employee engagement."
  },
  {
    title: "Organizational Strategy",
    icon: "mdi:target",
    description: "Build strong foundations through alignment of people, processes, and performance."
  },
  {
    title: "Leadership Development",
    icon: "mdi:account-tie",
    description: "Develop confident leaders and high-performing teams ready to drive success."
  }
];

export const companies = [
  { image: "/images/companies/brand-1.webp" },
  { image: "/images/companies/brand-2.webp" },
  { image: "/images/companies/brand-3.webp" },
  { image: "/images/companies/brand-4.webp" },
  { image: "/images/companies/brand-5.webp" },
  { image: "/images/companies/brand-6.webp" },
  { image: "/images/companies/brand-7.webp" },
  { image: "/images/companies/brand-8.webp" },
  { image: "/images/companies/brand-9.webp" },
  { image: "/images/companies/brand-10.webp" },
];

export const blogs = [
  {
    id: 1,
    title: "SME Growth in Nigeria",
    slug: "strategic-hr-management-sme-growth-nigeria",
    image: "/images/blog/blog-1.jpg",
    date: "12 Jun",
    category: "HR",
    author: "Flowvim Team",
    description: "Discover how Nigerian businesses are using strategic human capital management to improve performance, reduce turnover, and scale sustainably.",
  },
  {
    id: 2,
    title: "Process Optimization",
    slug: "process-optimization-operational-excellence",
    image: "/images/blog/blog-2.jpg",
    date: "08 Jun",
    category: "Operations",
    author: "Flowvim Team",
    description: "Learn how identifying and eliminating bottlenecks can dramatically increase efficiency, cut costs, and improve service delivery.",
  },
  {
    id: 3,
    title: "Leadership Development",
    slug: "leadership-development-changing-business-landscape",
    image: "/images/blog/blog-3.jpg",
    date: "03 Jun",
    category: "Leadership",
    author: "Flowvim Team",
    description: "Why investing in leadership capability is critical for Nigerian organizations navigating growth, change, and competition.",
  },
];

export const testimonial = [
  {
    id: 1,
    text: "Flowvim helped us restructure our operations and build a strong performance culture. Within six months, productivity increased significantly and staff turnover dropped. Highly recommended.",
    name: "Michael Johnson",
    position: "CEO, NovaTech Solutions",
    image: "/images/testimonials/user.jpg",
  },
  {
    id: 2,
    text: "Their strategic guidance and leadership training transformed how we operate. The team is more aligned, motivated, and results-focused than ever before.",
    name: "Sarah Williams",
    position: "Managing Director, Elevate Holdings",
    image: "/images/testimonials/user2.jpg",
  },
  {
    id: 3,
    text: "The process optimization and HR systems they implemented saved us time and money while improving overall performance. A true partner in our growth journey.",
    name: "David Anderson",
    position: "Founder & CEO, Nexa Group",
    image: "/images/testimonials/user3.jpg",
  },
];

export const footerLinks = [
  // Services
  { link: "HR Management Solutions" },
  { link: "Process Optimization" },
  { link: "Organizational Strategy" },
  { link: "Performance Management" },
  { link: "Capacity Building" },
  { link: "Change Management" },

  // Resources
  { link: "About Us" },
  { link: "Case Studies" },
  { link: "Blog" },
  { link: "Careers" },
  { link: "FAQs" },
  { link: "Contact" },

  // Bottom Footer
  { link: "Privacy Policy" },
  { link: "Terms of Service" },
  { link: "Cookie Policy" },
];

// Team Members
export const team = [
  {
    id: 1,
    name: "Samson Robert-Okorie",
    post: "Principal Consultant & Founder",
    image: "/images/team/team-1.webp",
  },
  {
    id: 2,
    name: "Dr. Aisha Bello",
    post: "Head of HR Solutions",
    image: "/images/team/team-2.webp",
  },
  {
    id: 3,
    name: "Emmanuel Okonkwo",
    post: "Lead Strategy Consultant",
    image: "/images/team/team-3.webp",
  },
  {
    id: 4,
    name: "Fatima Adebayo",
    post: "Senior Performance Coach",
    image: "/images/team/team-4.webp",
  },
  {
    id: 5,
    name: "Chinedu Eze",
    post: "Operations & Process Expert",
    image: "/images/team/team-5.webp",
  },
  {
    id: 6,
    name: "Oluwaseun Adeyemi",
    post: "Change Management Specialist",
    image: "/images/team/team-6.webp",
  },
  {
    id: 7,
    name: "Ngozi Okoro",
    post: "Leadership Development Consultant",
    image: "/images/team/team-7.webp",
  },
  {
    id: 8,
    name: "Tunde Babalola",
    post: "Business Analyst",
    image: "/images/team/team-8.webp",
  },
];

// Services
import service1 from "@/../public/images/services/service-01.webp";
import service2 from "@/../public/images/services/service-02.webp";

export const services = [
  {
    slug: "hr-management",
    icon: "mdi:account-tie-outline",
    image: service1,
    title: "HR Management Solutions",
    description: "Align talent with business goals through strategic human capital development and performance systems.",
    details: {
      intro: "Your people are your greatest asset.",
      content: "Flowvim provides strategic HR solutions that help organizations attract, engage, retain top talent, and build a high-performing workforce.",
      features: [
        "Talent Acquisition & Management",
        "Employee Engagement Strategies",
        "Performance Management Systems",
        "Training & Development Programs",
        "HR Policy & Compliance",
        "Organizational Culture Building",
        "Leadership Development",
      ],
    },
    href: "/services/hr-management",
  },
  {
    slug: "process-optimization",
    icon: "mdi:timeline-check",
    image: service2,
    title: "Process Optimization",
    description: "Streamline operations, eliminate inefficiencies, and build scalable systems for peak performance.",
    details: {
      intro: "Efficient processes drive sustainable growth.",
      content: "We analyze workflows, remove bottlenecks, and implement practical improvements that increase productivity and reduce costs.",
      features: [
        "Workflow Analysis & Redesign",
        "Operational Efficiency Audits",
        "Standard Operating Procedures (SOPs)",
        "Bottleneck Elimination",
        "Resource Optimization",
        "Continuous Improvement Frameworks",
      ],
    },
    href: "/services/process-optimization",
  },
  {
    slug: "organizational-strategy",
    icon: "mdi:target",
    image: service1,
    title: "Organizational Strategy",
    description: "Develop clear strategic roadmaps that align people, processes, and performance for sustainable growth.",
    details: {
      intro: "Strategy without execution is just a dream.",
      content: "We partner with leaders to create practical, actionable strategies focused on operational excellence and long-term success.",
      features: [
        "Strategic Planning & Roadmapping",
        "Business Model Alignment",
        "Growth Strategy Development",
        "Competitive Positioning",
        "Risk Assessment & Mitigation",
        "Strategy Execution Support",
      ],
    },
    href: "/services/organizational-strategy",
  },
  {
    slug: "performance-management",
    icon: "mdi:chart-line",
    image: service2,
    title: "Performance Management",
    description: "Drive accountability, productivity, and continuous improvement across your organization.",
    details: {
      intro: "What gets measured gets managed.",
      content: "We design performance systems that foster accountability, recognize excellence, and support data-driven decisions.",
      features: [
        "KPI Development & Tracking",
        "Performance Appraisal Systems",
        "Goal Setting & Alignment",
        "Feedback & Coaching Frameworks",
        "Rewards & Recognition Programs",
      ],
    },
    href: "/services/performance-management",
  },
  {
    slug: "capacity-building",
    icon: "mdi:school",
    image: service1,
    title: "Capacity Building & Training",
    description: "Equip your team with the skills and mindset needed to excel in today’s competitive environment.",
    details: {
      intro: "Empowered teams deliver extraordinary results.",
      content: "Our tailored training programs build competence, confidence, and capability at every level of your organization.",
      features: [
        "Customized Training Programs",
        "Leadership Development",
        "Team Effectiveness Workshops",
        "Skills Gap Analysis",
        "Executive Coaching",
      ],
    },
    href: "/services/capacity-building",
  },
  {
    slug: "change-management",
    icon: "mdi:shuffle-variant",
    image: service2,
    title: "Change Management",
    description: "Navigate transitions smoothly with strategies that ensure employee buy-in and business continuity.",
    details: {
      intro: "Change is constant. Successful change is intentional.",
      content: "We help organizations manage restructuring, digital transformation, and cultural shifts effectively.",
      features: [
        "Change Strategy Development",
        "Stakeholder Engagement",
        "Communication Planning",
        "Resistance Management",
        "Cultural Transformation",
      ],
    },
    href: "/services/change-management",
  },
];