import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function LifeSkillsGirlsSection() {
  return (
    <section
      id="life-skills-girls"
      className="scroll-mt-20 lg:scroll-mt-24 py-10 sm:py-14 lg:py-16 bg-[#F8F5EF] border-b border-[#E8E2D7] relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#A21246]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#04315D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="w-full max-w-[480px] rounded-2xl overflow-hidden border border-[#E8E2D7] shadow-md hover:shadow-xl transition-all duration-300 bg-white p-2.5 group">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/life-skills-girls.png"
                  alt="Young girls in classroom celebrating agency and learning with Ignis"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Text & Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A21246]/10 border border-[#A21246]/20 text-xs font-semibold tracking-wider text-[#A21246] uppercase mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Gender Equity & Empowerment</span>
            </div>

            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#04315D] font-normal tracking-tight leading-[1.15] mb-6">
              Life Skills for Girls
            </h2>

            {/* Paragraph 1 */}
            <p className="text-sm sm:text-[15px] text-[#556987] leading-relaxed mb-4">
              Women, particularly the girl child, have been traditionally deprioritized in the socio milieu. A primary issue that needs addressing is the limited access to quality education and an emancipatory curriculum to enable girls to take charge of and chalk out their own destiny. While the state has established schools for vulnerable communities that deliver a standard NCERT syllabus, there are major gaps in providing actual life skills and awareness of socio-economic empowerment; nutrition, health and hygiene; reproductive health; education and career awareness; financial independence; legal remedies and entitlements.
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-[15px] text-[#556987] leading-relaxed">
              Ignis Careers has developed a 3-level program appropriate for the age groups between 13 and 18. This program integrates basic life skills along with awareness about general and reproductive health, education and career opportunities, legal rights, etc. We have developed urban and rural models taking into account the socio-cultural variations. We adapt the course based on the cultural nuances of the place of implementation. The initiative empowers girls with not only information and guidance but also skills to negotiate skewed gender dynamics.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
