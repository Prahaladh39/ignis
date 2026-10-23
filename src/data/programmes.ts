export interface ProgrammeItem {
  slug: string;
  num: string;
  title: string;
  eyebrow: string;
  description: string;
  brandColor: string;
  badgeBg: string;
  iconName: "message" | "atom" | "grad" | "network" | "spark";
  overview: string;
  keyPillars: {
    title: string;
    description: string;
  }[];
  realLifeExamples: string[];
  agencyOutcome: string;
  metrics: {
    stat: string;
    label: string;
  }[];
}

export const PROGRAMMES_DATA: ProgrammeItem[] = [
  {
    slug: "life-skills",
    num: "01",
    title: "Life Skills",
    eyebrow: "Agency, Confidence & Self-Determination",
    description:
      "Nurture critical thinking, decision-making, empathy and real-world agency for lifelong capability.",
    brandColor: "#A21246",
    badgeBg: "bg-[#A21246]/10 text-[#A21246]",
    iconName: "spark",
    overview:
      "At Ignis, Life Skills are not taught as an abstract theoretical lecture, but as an experiential practice embedded in every interaction. Through reflective dialogue, collaborative teamwork, self-awareness exercises, and social-emotional learning, students build the inner resilience, ethical clarity, and confidence to make decisions and shape their own futures.",
    keyPillars: [
      {
        title: "Agency & Decision-Making",
        description:
          "Empowering young people to evaluate choices, weigh consequences, set personal goals, and advocate for themselves and their peers.",
      },
      {
        title: "Critical & Creative Thinking",
        description:
          "Moving beyond rote acceptance of information to question assumptions, analyze complex situations, and design innovative solutions.",
      },
      {
        title: "Empathy & Interpersonal Dialogue",
        description:
          "Developing active listening, emotional regulation, mutual respect, and collaborative problem-solving across diverse community backgrounds.",
      },
      {
        title: "Civic & Community Leadership",
        description:
          "Translating personal capability into collective action—leading initiatives that address local challenges from gender equity to public health.",
      },
    ],
    realLifeExamples: [
      "Adolescent girls lead peer support circles addressing school retention, self-advocacy, and emotional well-being.",
      "Students organize community forums to identify local village challenges and present citizen petitions to local civic leaders.",
      "Peer mediation programs that resolve classroom conflicts constructively through guided dialogue and empathy.",
    ],
    agencyOutcome:
      "Learners transition from passive recipients of instruction into proactive agents who navigate life, education, and relationships with confidence.",
    metrics: [
      { stat: "600,000+", label: "Learners Empowered" },
      { stat: "+48%", label: "Growth in Self-Efficacy & Decision-Making" },
      { stat: "1,500+", label: "Partner Schools & Centers" },
    ],
  },
  {
    slug: "english-science-maths",
    num: "02",
    title: "English + Science + Maths",
    eyebrow: "Applied Foundational Subjects",
    description:
      "Integrate communication, inquiry and quantitative problem-solving through contextual, hands-on learning.",
    brandColor: "#0D5C4D",
    badgeBg: "bg-[#0D5C4D]/10 text-[#0D5C4D]",
    iconName: "atom",
    overview:
      "Ignis integrates English, Science, and Mathematics into an interconnected, experiential learning curriculum. Rather than memorizing abstract formulas or grammar rules for exams, students explore phenomena around them, articulate evidence-based arguments, and apply mathematical reasoning to everyday community challenges.",
    keyPillars: [
      {
        title: "Contextual Language Fluency",
        description:
          "English learned as a tool for voice, expression, and inquiry through regional stories, structured speaking circles, and student presentations.",
      },
      {
        title: "Tactile Science Experiments",
        description:
          "Low-cost hands-on investigations using local materials, turning classrooms into vibrant discovery spaces without expensive lab equipment.",
      },
      {
        title: "Real-World Quantitative Reasoning",
        description:
          "Mathematics connected to everyday life: budgeting, data interpretation, agricultural economics, and practical problem-solving.",
      },
      {
        title: "Integrated Problem Solving",
        description:
          "Cross-disciplinary projects that combine mathematical measurement, scientific inquiry, and English communication to address real-world questions.",
      },
    ],
    realLifeExamples: [
      "Students conduct local water quality tests in Science, calculate purification ratios in Maths, and present findings in English to school assemblies.",
      "Designing school energy conservation audits by reading meters, calculating power savings, and publishing bilingual community awareness posters.",
      "Surveying local agricultural yields and market prices to model fair pricing strategies alongside farming families.",
    ],
    agencyOutcome:
      "Students overcome fear of subjects, building conceptual mastery and practical capabilities that connect directly to their lives and aspirations.",
    metrics: [
      { stat: "450,000+", label: "Integrated Subject Learners" },
      { stat: "92%", label: "Applied Concept Mastery Rate" },
      { stat: "2,000+", label: "Hands-On Experiments Completed" },
    ],
  },
  {
    slug: "teacher-development",
    num: "03",
    title: "Teacher Development",
    eyebrow: "Classroom Democratic Leadership",
    description:
      "Help teachers create classrooms where learners question, participate and think independently.",
    brandColor: "#04315D",
    badgeBg: "bg-[#04315D]/10 text-[#04315D]",
    iconName: "grad",
    overview:
      "Sustainable educational change depends on the teacher. Through continuous in-service coaching and the transformative Rural Teacher Fellowship, Ignis empowers educators to shift from conventional lecture-heavy monologues to democratic facilitation, building classrooms where every child feels safe to question, think, and speak.",
    keyPillars: [
      {
        title: "Rural Teacher Fellowship",
        description:
          "A competitive, intensive year-long fellowship placing passionate young educators alongside experienced rural teachers to revolutionize classroom culture.",
      },
      {
        title: "Reflective Video Mentoring",
        description:
          "Bi-weekly classroom observation feedback loops using recorded teaching clips to analyze student talk-time and participation dynamics.",
      },
      {
        title: "Democratic Classroom Culture",
        description:
          "Replacing fear-based discipline and rote repetition with structured curiosity, circle time, and collaborative peer learning.",
      },
      {
        title: "Contextual Lesson Planning",
        description:
          "Equipping teachers to adapt standard state board curriculum frameworks to their specific vernacular and community context.",
      },
    ],
    realLifeExamples: [
      "Rural fellows transformed average student classroom speaking time from 14% to over 58%, dramatically boosting participation among first-generation female learners.",
      "Master teachers conducting cluster-level peer learning workshops across government residential schools.",
      "Educators designing indigenous teaching learning materials (TLMs) recognized by state educational research councils.",
    ],
    agencyOutcome:
      "Teachers become creative facilitators and community leaders who nurture critical thinking and independent problem-solving in their students.",
    metrics: [
      { stat: "4,000+", label: "Educators & Fellows Trained" },
      { stat: "58%", label: "Average Student Classroom Talk-Time" },
      { stat: "10+", label: "Years of Rural Fellowship" },
    ],
  },
  {
    slug: "learning-systems",
    num: "04",
    title: "Learning Systems",
    eyebrow: "Systemic Scale & Research",
    description:
      "Design curriculum, assessments, implementation models and digital tools that help programmes scale.",
    brandColor: "#B45309",
    badgeBg: "bg-[#B45309]/10 text-[#B45309]",
    iconName: "network",
    overview:
      "Ignis partners with state governments, school networks, philanthropic foundations, and corporate CSR initiatives to design systemic educational architectures. We provide end-to-end curriculum design, diagnostic assessment rubrics, and digital implementation models that scale quality without dilution.",
    keyPillars: [
      {
        title: "Custom Curriculum Engineering",
        description:
          "Designing contextualized textbook supplements, teacher guidebooks, and activity kits tailored to specific regional syllabi and bilingual requirements.",
      },
      {
        title: "Agency Assessment Rubrics",
        description:
          "Developing qualitative and longitudinal evaluation metrics that assess critical thinking, empathy, and initiative alongside standard academic benchmarks.",
      },
      {
        title: "Scalable Implementation Toolkits",
        description:
          "Turnkey school transformation frameworks complete with facilitator training protocols, monitoring dashboards, and quality assurance checkpoints.",
      },
      {
        title: "Policy & Research Advisory",
        description:
          "Collaborating with government education departments to align grassroots field evidence with the holistic goals of the National Education Policy (NEP 2020).",
      },
    ],
    realLifeExamples: [
      "Partnered with the Telangana Social Welfare Residential Educational Institutions Society (TGSWREIS) across hundreds of residential schools.",
      "Designed and deployed bilingual curriculum packages for state departments reaching underserved tribal and rural students across AP and Odisha.",
      "Audited CSR educational interventions measuring verified multi-year learning outcomes for philanthropic grantmakers.",
    ],
    agencyOutcome:
      "Large education systems transition from fragmented one-off programs to coherent, sustainable learning ecosystems that empower students across generations.",
    metrics: [
      { stat: "600,000+", label: "System-Wide Learners Reached" },
      { stat: "6", label: "Indian States with Active Systems" },
      { stat: "100%", label: "NEP 2020 Competency Alignment" },
    ],
  },
];
