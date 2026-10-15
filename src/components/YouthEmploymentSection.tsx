import Image from "next/image";
import { Sparkles, Briefcase, GraduationCap } from "lucide-react";

export default function YouthEmploymentSection() {
  return (
    <section
      id="youth-employment-programme"
      className="scroll-mt-20 lg:scroll-mt-24 py-10 sm:py-14 lg:py-16 bg-white border-b border-[#E8E2D7] relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#04315D]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#A21246]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#04315D]/10 border border-[#04315D]/20 text-xs font-semibold tracking-wider text-[#04315D] uppercase mb-4 w-fit">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Higher Education & Workforce</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#04315D] font-normal tracking-tight leading-[1.15] mb-5">
              Employment Enhancement Programme for Youth
            </h2>

            {/* Paragraph 1 - Reduced typography size */}
            <p className="text-sm sm:text-[15px] text-[#556987] leading-relaxed mb-4">
              Ignis has also trained over <strong className="text-[#04315D] font-semibold">4,000 young graduates</strong> from various colleges and universities, like Nagarjuna University, Guntur; the Dr. B R Ambedkar Open University and the National Institute of Technology, Surathkal, ASCI PGDM Hospital (Management). Apart from these, Ignis also trains professionals in organisations like GVK Bio, Mylan etc., in English and Professional Communication Skills.
            </p>

            {/* Paragraph 2 - Reduced typography size */}
            <p className="text-sm sm:text-[15px] text-[#556987] leading-relaxed">
              The wide range of age groups and sectors help Ignis understand prevalent learning cultures, practices and the consequences. This helps us design purposeful curricula based on a deeper understanding of the larger consequence.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="w-full max-w-[480px] rounded-2xl overflow-hidden border border-[#E8E2D7] shadow-sm hover:shadow-md transition-all duration-300 bg-white p-2.5">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/youth-enhancement.png"
                  alt="Ignis Employment Enhancement Programme for Youth training session in progress"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
