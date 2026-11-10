import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const pages = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "For Schools", href: "/for-schools" },
    { name: "Impact", href: "/impact" },
    { name: "CSR Support", href: "/csr-support" },
  ];

  return (
    <footer className="w-full bg-[#F8F5EF] text-[#2D3748] border-t border-[#E8E2D7]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-5 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Brand Logo - Exact same as Navbar */}
          <Link href="/" className="flex items-center group py-1">
            <Image
              src="/images/ignis_logo_clean.png"
              alt="Ignis"
              width={120}
              height={56}
              className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
            />
          </Link>

          {/* Pages */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {pages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="text-[13.5px] sm:text-[14.5px] font-medium text-[#2D3748] hover:text-[#A21246] transition-colors"
              >
                {page.name}
              </Link>
            ))}
          </nav>

          {/* Minimal Copyright */}
          <p className="text-xs text-[#556987] text-center sm:text-right">
            © {new Date().getFullYear()} Ignis Careers
          </p>
        </div>
      </div>
    </footer>
  );
}
