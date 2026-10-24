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
    slug: "life-skills-english",
    num: "01",
    title: "Life Skills + English",
    eyebrow: "Communication & Everyday Capability",
    description:
      "Build communication, confidence and everyday capabilities through contextual, participatory learning.",
    brandColor: "#96163F",
    badgeBg: "bg-[#96163F]/10 text-[#96163F]",
    iconName: "message",
    overview:
      "At Ignis, English is not taught as a foreign academic subject for exam scores, but as a practical medium for voice, civic dialogue, and self-advocacy. By integrating Life Skills directly into English language learning, students develop the self-assurance to articulate ideas, challenge assumptions, and participate actively in society.",
    keyPillars: [
      {
        title: "Contextual Storytelling",
        description:
          "Literature and reading material anchored in the lived realities and regional cultures of Indian students rather than distant, alien contexts.",
      },
      {
        title: "Participatory Speaking Circles",
        description:
          "Replacing passive grammar memorization with active peer debates, structured questioning, and student-led presentations.",
      },
      {
        title: "Bilingual Scaffolding",
        description:
          "Honoring regional mother tongues (Telugu, Odia, Hindi, Kannada, Marathi) as intellectual assets that bridge into fluent English communication.",
      },
      {
        title: "Everyday Life Capabilities",
        description:
          "Practice navigating real-life scenarios: speaking to officials, conducting community interviews, collaborating in teams, and expressing empathy.",
      },
    ],
    realLifeExamples: [
      "Grade 8 students in rural Mahabubnagar surveyed local water quality and drafted a bilingual petition presented directly to their village Gram Panchayat.",
      "Learners organize and moderate youth parliament discussions addressing school safety, gender equity, and peer support.",
      "Conducting structured oral interviews with community elders to compile regional histories into published school gazettes.",
    ],
    agencyOutcome:
      "Students transition from hesitant non-speakers into confident communicators who can lead discussions, defend their rights, and make their voices heard.",
    metrics: [
      { stat: "404,000+", label: "Direct Learners Enrolled" },
      { stat: "+42%", label: "Increase in Spontaneous Oral Expression" },
      { stat: "1,200+", label: "Participating Schools" },
    ],
  },
  {
    slug: "life-skills-science-maths",
    num: "02",
    title: "Life Skills + Science + Maths",
    eyebrow: "Inquiry, Reasoning & Problem Solving",
    description:
      "Turn concepts into exploration, observation, problem-solving and real-world understanding.",
    brandColor: "#0D5C4D",
    badgeBg: "bg-[#0D5C4D]/10 text-[#0D5C4D]",
    iconName: "atom",
    overview:
      "Science and Mathematics come alive when integrated with real-life skills and everyday exploration. Rather than memorizing formulas from chalkboards, Ignis students formulate questions, build low-cost hands-on experiments, and apply mathematical reasoning to community dilemmas—from agricultural economics to public health.",
    keyPillars: [
      {
        title: "Low-Cost Tactile Experiments",
        description:
          "Scientific investigation without expensive laboratory barriers, using locally accessible household and environmental materials.",
      },
      {
        title: "Real-World Quantitative Literacy",
        description:
          "Math applied to unit economics, household budgeting, crop yield estimation, and discerning high-interest debt cycles.",
      },
      {
        title: "Critical Skepticism & Evidence",
        description:
          "Empirical observation that encourages learners to question superstitions, test hypotheses, and demand verifiable evidence.",
      },
      {
        title: "Environmental & Civic Science",
        description:
          "Direct study of local ecosystems: soil testing, drinking water quality, seasonal weather cycles, and community energy consumption.",
      },
    ],
    realLifeExamples: [
      "Students in Chittoor tested soil pH levels across local farmlands to calculate optimal fertilizer ratios alongside their agricultural parents.",
      "Analyzing electricity meter readings and transformer loads to propose school-wide energy conservation practices.",
      "Calculating fair mandi market pricing using algebraic ratios, protecting smallholder farming families from exploitative middlemen.",
    ],
    agencyOutcome:
      "Learners stop fearing mathematical numbers and scientific jargon, using both as essential decision-making tools in their everyday lives.",
    metrics: [
      { stat: "850+", label: "School Science Inquiries" },
      { stat: "94%", label: "Concept Mastery in Applied Scenarios" },
      { stat: "180,000+", label: "STEM Learners Impacted" },
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
