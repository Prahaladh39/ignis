import Image from "next/image";
import {
  Search,
  BookOpenCheck,
  ClipboardList,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function ResearchCapacitySection() {
  const steps = [
    {
      title: "Survey",
      icon: Search,
      badgeColor: "bg-[#04315D]/10 text-[#04315D]",
      bulletColor: "text-[#04315D]",
      items: [
        "Closely study the cultural context of the target group",
        "Analyse the learning needs of the group",
      ],
    },
    {
      title: "Development",
      icon: BookOpenCheck,
      badgeColor: "bg-[#A21246]/10 text-[#A21246]",
      bulletColor: "text-[#A21246]",
      items: [
        "Develop learning program based on the findings",
        "Pilot and modify the model",
      ],
    },
    {
      title: "Implementation Support",
      icon: ClipboardList,
      badgeColor: "bg-[#2D6A4F]/10 text-[#2D6A4F]",
      bulletColor: "text-[#2D6A4F]",
      items: [
        "Recruit trainers, train of trainers",
        "Continuous monitoring",
        "Pre- and post-program assessments",
      ],
    },
  ];

  return (
    <section
      id="research-capacity-building"
      className="scroll-mt-20 lg:scroll-mt-24 py-10 sm:py-14 lg:py-16 bg-white border-b border-[#E8E2D7] relative overflow-hidden"
    >
      {/* Background Soft Gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#04315D]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#A21246]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content, Research Story, and 3 Methodology Steps */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A21246]/10 border border-[#A21246]/20 text-xs font-semibold tracking-wider text-[#A21246] uppercase mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pedagogical Rigour & Scale</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#04315D] font-normal tracking-tight leading-[1.15] mb-6">
              Research and Capacity Building
            </h2>

            {/* Paragraph 1 */}
            <p className="text-sm sm:text-[15px] text-[#556987] leading-relaxed mb-4">
              Ignis is fuelled by its best-in-class research which develops curriculum that is both age and culturally appropriate for the target beneficiaries. Ignis has supported English and Life Skills curriculum development for various organizations and foundations that work with vulnerable communities across India. The work involved studying the language skills of the students, mapping their exposure to English, mapping their cultural background, building a corpus of words appropriate for the developmental milestones and putting together a curriculum based on these findings.
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-[15px] text-[#556987] leading-relaxed mb-8">
              We also support organizations in developing educational support programs appropriate for their mission, suitable for the cultural contexts that they operate in. This involves skills survey, field-based research, curriculum development, training and capacity building, continual monitoring and implementation support.
            </p>

            {/* 3 Process Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {steps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={step.title}
                    className="p-5 rounded-2xl bg-[#F8F5EF] border border-[#E8E2D7] hover:border-[#A21246]/30 transition-all duration-300 hover:shadow-sm flex flex-col"
                  >
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${step.badgeColor}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="font-serif font-semibold text-[#04315D] text-base">
                        {step.title}
                      </h3>
                    </div>

                    <ul className="space-y-2 text-xs sm:text-[13px] text-[#556987] flex-1">
                      {step.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 leading-snug">
                          <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${step.bulletColor}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: 2 Visual Curriculum Images (Uncropped, well-balanced size, natural aspect ratios) */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-6 justify-center items-center">
            {/* Image 1: ELSL Readers & Textbooks Cover Fan */}
            <div className="w-full max-w-[420px] rounded-2xl overflow-hidden border border-[#E8E2D7] shadow-sm hover:shadow-md transition-shadow bg-white p-2.5">
              <Image
                src="/images/curriculum-workbooks.jpg"
                alt="Ignis English and Life Skills Lab - Foundation & Beginner Workbooks"
                width={1006}
                height={735}
                className="w-full h-auto object-contain rounded-xl"
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </div>

            {/* Image 2: ELSL Reader 2 Activity Book Cover (Uncropped) */}
            <div className="w-full max-w-[420px] rounded-2xl overflow-hidden border border-[#E8E2D7] shadow-sm hover:shadow-md transition-shadow bg-white p-2.5">
              <Image
                src="/images/elsl-reader.png"
                alt="ELSL Reader 2 - Contextual Learning & Illustrated Reading Materials"
                width={639}
                height={555}
                className="w-full h-auto object-contain rounded-xl"
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
