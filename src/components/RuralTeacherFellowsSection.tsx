"use client";

import { useState } from "react";
import {
  GraduationCap,
  School,
  MapPin,
  BookOpen,
  Play,
  Video,
  X,
  ExternalLink,
} from "lucide-react";

interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  subtitle: string;
  tag: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: "video-1",
    youtubeId: "ijH1tiP5HQg",
    title: "Ground Realities & Fellow Impact",
    subtitle: "How rural fellows spark classroom confidence & community transformation",
    tag: "Field Stories",
  },
  {
    id: "video-2",
    youtubeId: "wX1sKjGs5_8",
    title: "Classroom Learning in Action",
    subtitle: "English and life skills immersion in rural government schools",
    tag: "Classroom Practice",
  },
  {
    id: "video-3",
    youtubeId: "J-DMQStUyvU",
    title: "Fellow Voices & Perspectives",
    subtitle: "Teacher aspirants sharing their journey from trainees to community leaders",
    tag: "Fellow Voices",
  },
];

export default function RuralTeacherFellowsSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section
      id="rural-teacher-fellows"
      className="scroll-mt-20 lg:scroll-mt-24 py-10 sm:py-14 lg:py-16 bg-[#F8F5EF] border-b border-[#E8E2D7] relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#A21246]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#04315D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A21246]/10 border border-[#A21246]/20 text-xs font-semibold tracking-wider text-[#A21246] uppercase mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Fellowship Initiative</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#04315D] font-normal tracking-tight">
            Rural Teacher Fellows Programme
          </h2>

          {/* Editorial Diamond Divider */}
          <div className="flex items-center justify-center gap-4 my-5">
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#A21246]/40" />
            <div className="w-2 h-2 rotate-45 bg-[#A21246]" />
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#A21246]/40" />
          </div>
        </div>

        {/* Narrative & Highlights - 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {/* Card 1: Reach & Collaboration */}
          <div className="flex flex-col p-7 lg:p-8 rounded-2xl bg-white border border-[#E8E2D7] shadow-xs hover:shadow-md hover:border-[#A21246]/30 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#A21246]/10 text-[#A21246] flex items-center justify-center mb-6 flex-shrink-0">
              <School className="w-6 h-6" />
            </div>
            <div className="space-y-3 flex-1 flex flex-col">
              <h3 className="text-xl font-serif font-semibold text-[#04315D]">
                Collaborative Grassroots Reach
              </h3>
              <p className="text-[#556987] text-sm sm:text-[15px] leading-relaxed flex-1">
                The teacher fellowship program is implemented in collaboration with CSR funds and NGOs. Ignis has so far worked with over <strong className="text-[#04315D] font-semibold">88 government schools</strong> reaching about <strong className="text-[#04315D] font-semibold">26,000 students</strong> across <strong className="text-[#04315D] font-semibold">Telangana, Andhra Pradesh, Karnataka, and Maharashtra</strong>.
              </p>
            </div>
          </div>

          {/* Card 2: Pilot & Community Grounding */}
          <div className="flex flex-col p-7 lg:p-8 rounded-2xl bg-white border border-[#E8E2D7] shadow-xs hover:shadow-md hover:border-[#04315D]/30 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#04315D]/10 text-[#04315D] flex items-center justify-center mb-6 flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="space-y-3 flex-1 flex flex-col">
              <h3 className="text-xl font-serif font-semibold text-[#04315D]">
                Local Fellowship & Capacity Building
              </h3>
              <p className="text-[#556987] text-sm sm:text-[15px] leading-relaxed flex-1">
                Our pilot program was implemented in the rural mandals of Khammam District, Telangana. Ignis recruits and trains teacher aspirants directly from the community, providing a 1-year fellowship in developing areas and a 2-year tenure in remote regions needing deep foundational scaffolding.
              </p>
            </div>
          </div>

          {/* Card 3: Contextual Learning Material */}
          <div className="flex flex-col p-7 lg:p-8 rounded-2xl bg-white border border-[#E8E2D7] shadow-xs hover:shadow-md hover:border-[#2D6A4F]/30 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#2D6A4F]/10 text-[#2D6A4F] flex items-center justify-center mb-6 flex-shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="space-y-3 flex-1 flex flex-col">
              <h3 className="text-xl font-serif font-semibold text-[#04315D]">
                Contextual Learning & Lab Curricula
              </h3>
              <p className="text-[#556987] text-sm sm:text-[15px] leading-relaxed flex-1">
                While the Rural Teacher Fellows Program primarily uses course material prepared for the English and Life Skills Lab, in remote areas and unique cultural contexts, we develop culturally appropriate complementary learning material.
              </p>
            </div>
          </div>
        </div>

        {/* 3 YouTube Videos Showcase */}
        <div className="pt-8 border-t border-[#E8E2D7]">
          {/* Subheader */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#04315D]/10 text-[#04315D] text-xs font-semibold tracking-wider uppercase mb-3">
              <Video className="w-3.5 h-3.5" />
              <span>Watch on the Ground</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#04315D] font-normal tracking-tight">
              Fellowship in Action
            </h3>
            <p className="text-sm sm:text-base text-[#556987] mt-2">
              Witness firsthand classroom experiences, teacher testimonials, and community feedback.
            </p>
          </div>

          {/* 3 Video Cards - Only the Video Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {VIDEOS.map((video) => (
              <div
                key={video.id}
                className="relative aspect-video w-full rounded-2xl overflow-hidden border border-[#E8E2D7] shadow-sm hover:shadow-xl transition-all duration-300 bg-[#07223F] hover:-translate-y-1"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

