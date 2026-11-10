"use client";

import { useState } from "react";
import { Send, CheckCircle2, Sparkles, Building, Mail, Phone, MapPin, User, GraduationCap } from "lucide-react";

export default function SchoolInquiryForm() {
  const [formData, setFormData] = useState({
    contactName: "",
    schoolName: "",
    designation: "Principal / Correspondent",
    email: "",
    phone: "",
    location: "",
    board: "CBSE",
    studentCount: "500 - 1,000",
    programmes: ["elsl"],
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleProgramme = (id: string) => {
    setFormData((prev) => {
      const exists = prev.programmes.includes(id);
      return {
        ...prev,
        programmes: exists
          ? prev.programmes.filter((p) => p !== id)
          : [...prev.programmes, id],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div id="school-consultation" className="scroll-mt-24 w-full">
      <div className="bg-white rounded-3xl border border-[#E8E2D7] shadow-xl shadow-[#04315D]/5 p-6 sm:p-10 lg:p-12 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#A21246]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#04315D]/5 rounded-full blur-3xl pointer-events-none" />

        {isSubmitted ? (
          <div className="py-12 sm:py-16 text-center max-w-lg mx-auto">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#10B981]/10 text-[#10B981] flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#04315D] font-bold mb-3">
              Consultation Request Received
            </h3>
            <p className="text-sm sm:text-base text-[#556987] leading-relaxed mb-8">
              Thank you, <strong className="text-[#04315D]">{formData.contactName}</strong>. Our academic partnership team will review your inquiry for <strong className="text-[#04315D]">{formData.schoolName}</strong> and contact you within 24 hours with curriculum sample kits and implementation details.
            </p>
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#04315D] hover:bg-[#032446] text-white text-sm font-semibold transition-all duration-200"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative z-10 space-y-6 sm:space-y-8">
            <div className="border-b border-[#E8E2D7] pb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A21246]/10 text-xs font-semibold text-[#A21246] tracking-wider uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Partner With Ignis</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#04315D] font-bold mb-2">
                Bring Ignis Labs to Your School
              </h3>
              <p className="text-sm sm:text-[15px] text-[#556987] leading-relaxed max-w-2xl">
                Schedule a personalized consultation with our academic specialists to explore sample workbooks, observe live classroom demos, or request a customized pilot proposal.
              </p>
            </div>

            {/* Select Programmes of Interest */}
            <div>
              <label className="block text-xs font-bold font-mono tracking-wider uppercase text-[#04315D] mb-3">
                Programmes of Interest <span className="text-[#A21246]">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: "elsl",
                    title: "English & Life Skills (ELSL)",
                    desc: "Grades 1–10 • Fluency, voice & confidence",
                  },
                  {
                    id: "stem-labs",
                    title: "STEM Labs",
                    desc: "Grades 5–10 • Hands-on science & maths",
                  },
                  {
                    id: "career-awareness",
                    title: "Career Awareness",
                    desc: "Grades 8–12 • Pathways, readiness & mentoring",
                  },
                ].map((prog) => {
                  const checked = formData.programmes.includes(prog.id);
                  return (
                    <button
                      key={prog.id}
                      type="button"
                      onClick={() => toggleProgramme(prog.id)}
                      className={`text-left p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-200 cursor-pointer ${
                        checked
                          ? "bg-[#A21246]/5 border-[#A21246] shadow-xs"
                          : "bg-white border-[#E8E2D7] hover:border-[#04315D]/40"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-sm sm:text-[15px] text-[#04315D]">
                          {prog.title}
                        </span>
                        <div
                          className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                            checked
                              ? "bg-[#A21246] border-[#A21246] text-white"
                              : "border-[#CBD5E1] bg-white"
                          }`}
                        >
                          {checked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                      <p className="text-xs text-[#556987]">{prog.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Two-Column Grid of Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Contact Person Name */}
              <div>
                <label className="block text-xs font-bold font-mono tracking-wider uppercase text-[#04315D] mb-2">
                  Your Full Name <span className="text-[#A21246]">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="e.g. Dr. Ramesh Sharma"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E8E2D7] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:border-[#A21246] text-sm text-[#04315D] transition-colors"
                  />
                </div>
              </div>

              {/* Designation */}
              <div>
                <label className="block text-xs font-bold font-mono tracking-wider uppercase text-[#04315D] mb-2">
                  Designation / Role <span className="text-[#A21246]">*</span>
                </label>
                <div className="relative">
                  <GraduationCap className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E8E2D7] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:border-[#A21246] text-sm text-[#04315D] transition-colors appearance-none"
                  >
                    <option value="Principal / Correspondent">Principal / Correspondent</option>
                    <option value="School Director / Trustee">School Director / Trustee</option>
                    <option value="Academic Dean / Coordinator">Academic Dean / Coordinator</option>
                    <option value="Senior Teacher / HOD">Senior Teacher / HOD</option>
                    <option value="Other School Leader">Other School Leader</option>
                  </select>
                </div>
              </div>

              {/* School Name */}
              <div>
                <label className="block text-xs font-bold font-mono tracking-wider uppercase text-[#04315D] mb-2">
                  School / Institution Name <span className="text-[#A21246]">*</span>
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.schoolName}
                    onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                    placeholder="e.g. Sri Chaitanya Public School"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E8E2D7] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:border-[#A21246] text-sm text-[#04315D] transition-colors"
                  />
                </div>
              </div>

              {/* City / State */}
              <div>
                <label className="block text-xs font-bold font-mono tracking-wider uppercase text-[#04315D] mb-2">
                  City & State <span className="text-[#A21246]">*</span>
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Warangal, Telangana"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E8E2D7] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:border-[#A21246] text-sm text-[#04315D] transition-colors"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold font-mono tracking-wider uppercase text-[#04315D] mb-2">
                  Email Address <span className="text-[#A21246]">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@schoolname.edu.in"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E8E2D7] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:border-[#A21246] text-sm text-[#04315D] transition-colors"
                  />
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-bold font-mono tracking-wider uppercase text-[#04315D] mb-2">
                  Phone / WhatsApp Number <span className="text-[#A21246]">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E8E2D7] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:border-[#A21246] text-sm text-[#04315D] transition-colors"
                  />
                </div>
              </div>

              {/* Affiliation / Board */}
              <div>
                <label className="block text-xs font-bold font-mono tracking-wider uppercase text-[#04315D] mb-2">
                  Affiliation / Curriculum Board
                </label>
                <select
                  value={formData.board}
                  onChange={(e) => setFormData({ ...formData, board: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8E2D7] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:border-[#A21246] text-sm text-[#04315D] transition-colors appearance-none"
                >
                  <option value="CBSE">CBSE Board</option>
                  <option value="State Board">State Board</option>
                  <option value="ICSE">ICSE Board</option>
                  <option value="International / Cambridge">International / Cambridge / IB</option>
                  <option value="Other">Other / Multiple</option>
                </select>
              </div>

              {/* Student Strength */}
              <div>
                <label className="block text-xs font-bold font-mono tracking-wider uppercase text-[#04315D] mb-2">
                  Total Student Strength
                </label>
                <select
                  value={formData.studentCount}
                  onChange={(e) => setFormData({ ...formData, studentCount: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8E2D7] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:border-[#A21246] text-sm text-[#04315D] transition-colors appearance-none"
                >
                  <option value="Under 300">Under 300 Students</option>
                  <option value="300 - 500">300 - 500 Students</option>
                  <option value="500 - 1,000">500 - 1,000 Students</option>
                  <option value="1,000 - 2,500">1,000 - 2,500 Students</option>
                  <option value="2,500+">2,500+ Students (School Network)</option>
                </select>
              </div>
            </div>

            {/* Additional Message */}
            <div>
              <label className="block text-xs font-bold font-mono tracking-wider uppercase text-[#04315D] mb-2">
                Specific Goals or Questions (Optional)
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share any specific requirements, timeline, or current challenges in English fluency, STEM, or teacher capacity..."
                className="w-full p-4 rounded-xl border border-[#E8E2D7] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:border-[#A21246] text-sm text-[#04315D] transition-colors"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#556987]">
                We respect your privacy. No spam. Fast response within 1 business day.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#A21246] hover:bg-[#860C38] text-white text-[15px] font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-70"
              >
                <span>{isSubmitting ? "Submitting..." : "Schedule School Consultation"}</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

