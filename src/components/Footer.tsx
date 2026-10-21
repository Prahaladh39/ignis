import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#04315D] text-white border-t border-[#032446]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-6 group">
                <Image
                  src="/images/ignis_logo_white.png"
                  alt="Ignis Careers"
                  width={140}
                  height={65}
                  className="h-14 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
                />
              </Link>

              <p className="text-[14.5px] text-white/70 leading-relaxed max-w-sm mb-6">
                Ignis integrates Life Skills with English, Science and Maths to help young learners build knowledge, confidence and agency to make decisions, solve problems, communicate and participate in the world around them.
              </p>
            </div>

            <div className="text-xs text-white/50 space-y-1">
              <p>Hyderabad Headquarters • Field Offices across TS, AP & Odisha</p>
              <p>Reaching 600,000+ students across Indian education systems</p>
            </div>
          </div>

          {/* Programmes Column */}
          <div>
            <h4 className="font-serif text-[16px] font-bold text-white mb-4">
              What We Build
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
              <li>
                <Link
                  href="/programmes/english-life-skills"
                  className="hover:text-white transition-colors"
                >
                  English + Life Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/programmes/science-maths"
                  className="hover:text-white transition-colors"
                >
                  Science + Maths
                </Link>
              </li>
              <li>
                <Link
                  href="/programmes/teacher-development"
                  className="hover:text-white transition-colors"
                >
                  Teacher Development
                </Link>
              </li>
              <li>
                <Link
                  href="/programmes/learning-systems"
                  className="hover:text-white transition-colors"
                >
                  Learning Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* The Ignis Model Column */}
          <div>
            <h4 className="font-serif text-[16px] font-bold text-white mb-4">
              The Ignis Model
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
              <li>
                <Link href="/#usp-model" className="hover:text-white transition-colors">
                  The Core Proposition
                </Link>
              </li>
              <li>
                <Link href="/#agency" className="hover:text-white transition-colors">
                  What Agency Means
                </Link>
              </li>
              <li>
                <Link href="/#learning-cycle" className="hover:text-white transition-colors">
                  6-Step Learning Cycle
                </Link>
              </li>
              <li>
                <Link href="/#impact" className="hover:text-white transition-colors">
                  12 Years of Impact
                </Link>
              </li>
              <li>
                <Link href="/#contexts" className="hover:text-white transition-colors">
                  Contextualised Spread
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Dialogue */}
          <div>
            <h4 className="font-serif text-[16px] font-bold text-white mb-4">
              Let’s Talk
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-white/70">
              <a
                href="mailto:contact@igniscareers.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#A21246]" />
                <span>contact@igniscareers.com</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#A21246] shrink-0 mt-0.5" />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Ignis Careers Private Limited. All rights reserved.</p>
          <p className="italic">
            &ldquo;Learning that gives young people the confidence to act.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
