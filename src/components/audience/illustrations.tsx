type IllustrationProps = { className?: string };

/*
 * Decorative flat illustrations (inline SVG, no image requests).
 * They are aria-hidden because the card text already carries the meaning.
 * Floating animations use the `animate-bob` / `animate-bob2` utilities from tailwind.config.
 */

export function SchoolIllustration({ className }: IllustrationProps) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 400 230" className={className}>
      <g className="animate-bob2 motion-reduce:animate-none">
        <circle cx="338" cy="44" r="24" fill="#FFC98F" />
        <circle cx="338" cy="44" r="35" fill="none" stroke="#FFB27A" strokeWidth="2" strokeDasharray="3 7" />
      </g>
      <g className="animate-bob motion-reduce:animate-none" fill="#fff">
        <ellipse cx="62" cy="58" rx="30" ry="11" />
        <circle cx="52" cy="49" r="12" />
        <circle cx="74" cy="46" r="14" />
      </g>
      <path d="M0 196 Q100 170 200 184 T400 176 V230 H0Z" fill="#FFE3CB" />
      <path d="M0 214 Q120 196 240 208 T400 202 V230 H0Z" fill="#FFD1A6" />
      <rect x="62" y="114" width="92" height="72" fill="#fff" stroke="#D4500A" strokeWidth="2" />
      <rect x="57" y="104" width="102" height="10" rx="2" fill="#F59E3B" stroke="#D4500A" strokeWidth="2" />
      <rect x="246" y="114" width="92" height="72" fill="#fff" stroke="#D4500A" strokeWidth="2" />
      <rect x="241" y="104" width="102" height="10" rx="2" fill="#F59E3B" stroke="#D4500A" strokeWidth="2" />
      <g fill="#FFE3CB" stroke="#D4500A" strokeWidth="1.6">
        <rect x="76" y="126" width="22" height="22" rx="3" />
        <rect x="118" y="126" width="22" height="22" rx="3" />
        <rect x="76" y="154" width="22" height="22" rx="3" />
        <rect x="118" y="154" width="22" height="22" rx="3" />
        <rect x="260" y="126" width="22" height="22" rx="3" />
        <rect x="302" y="126" width="22" height="22" rx="3" />
        <rect x="260" y="154" width="22" height="22" rx="3" />
        <rect x="302" y="154" width="22" height="22" rx="3" />
      </g>
      <rect x="152" y="90" width="96" height="96" fill="#fff" stroke="#D4500A" strokeWidth="2" />
      <rect x="146" y="80" width="108" height="10" rx="2" fill="#D4500A" />
      <rect x="182" y="34" width="36" height="46" fill="#fff" stroke="#D4500A" strokeWidth="2" />
      <polygon points="176,34 200,10 224,34" fill="#D4500A" stroke="#D4500A" strokeWidth="2" strokeLinejoin="round" />
      <line x1="200" y1="10" x2="200" y2="0" stroke="#D4500A" strokeWidth="2" />
      <polygon points="200,0 214,4 200,8" fill="#F59E3B" />
      <circle cx="200" cy="55" r="11" fill="#fff" stroke="#D4500A" strokeWidth="2" />
      <path d="M200 48v7h5" fill="none" stroke="#D4500A" strokeWidth="1.8" strokeLinecap="round" />
      <g fill="#FFE3CB" stroke="#D4500A" strokeWidth="1.6">
        <rect x="163" y="98" width="20" height="22" rx="3" />
        <rect x="190" y="98" width="20" height="22" rx="3" />
        <rect x="217" y="98" width="20" height="22" rx="3" />
      </g>
      <rect x="172" y="126" width="56" height="14" rx="3" fill="#FFC98F" stroke="#D4500A" strokeWidth="1.4" />
      <path d="M192 133q4-3 8 0q4-3 8 0v4q-4-3-8 0q-4-3-8 0z" fill="#fff" stroke="#D4500A" strokeWidth="1" />
      <rect x="183" y="148" width="34" height="38" rx="4" fill="#D4500A" />
      <line x1="200" y1="148" x2="200" y2="186" stroke="#fff" strokeWidth="1.6" />
      <rect x="174" y="184" width="52" height="6" rx="2" fill="#F5C79C" />
      <g transform="translate(356 160)">
        <circle r="7" fill="#FFD1A6" />
        <path d="M-8 26V12a8 8 0 0 1 16 0V26Z" fill="#0F8F74" />
        <rect x="6" y="10" width="6" height="13" rx="2" fill="#F59E3B" />
      </g>
      <g transform="translate(374 164)">
        <circle r="6" fill="#FFD1A6" />
        <path d="M-7 22V10a7 7 0 0 1 14 0V22Z" fill="#E0457F" />
        <rect x="5" y="8" width="5" height="11" rx="2" fill="#D4500A" />
      </g>
      <g transform="rotate(-18 28 150)">
        <rect x="22" y="104" width="12" height="62" fill="#F59E3B" stroke="#D4500A" strokeWidth="1.6" />
        <polygon points="22,104 28,90 34,104" fill="#FFE3CB" stroke="#D4500A" strokeWidth="1.6" strokeLinejoin="round" />
        <rect x="22" y="166" width="12" height="9" fill="#F59BB9" stroke="#D4500A" strokeWidth="1.6" />
      </g>
      <g stroke="#F59E3B" strokeWidth="2" strokeLinecap="round">
        <path d="M110 60v8M106 64h8" />
        <path d="M280 34v8M276 38h8" />
      </g>
    </svg>
  );
}

export function CommunityIllustration({ className }: IllustrationProps) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 400 200" className={className}>
      <circle cx="190" cy="100" r="86" fill="#D2EFE5" />
      <path d="M0 172 Q100 156 200 168 T400 164 V200 H0Z" fill="#C4E8DC" />
      <polygon points="318,128 346,110 374,128" fill="#FFC0D4" stroke="#B3144A" strokeWidth="1.6" strokeLinejoin="round" />
      <g fill="#fff" stroke="#B3144A" strokeWidth="1.4">
        <rect x="324" y="130" width="7" height="32" />
        <rect x="336" y="130" width="7" height="32" />
        <rect x="348" y="130" width="7" height="32" />
        <rect x="360" y="130" width="7" height="32" />
      </g>
      <rect x="316" y="162" width="62" height="6" rx="2" fill="#F59BB9" />
      <g className="animate-bob motion-reduce:animate-none" fill="none" stroke="#0F8F74" strokeWidth="2" strokeDasharray="2 7" strokeLinecap="round">
        <path d="M62 96 Q100 30 190 52" />
        <path d="M132 82 Q150 54 190 52" />
        <path d="M212 90 Q215 60 190 52" />
        <path d="M280 96 Q250 36 190 52" />
      </g>
      <path className="animate-bob motion-reduce:animate-none" d="M190 66c-15-11-22-21-13-29a8.5 8.5 0 0 1 13 4.5a8.5 8.5 0 0 1 13-4.5c9 8 2 18-13 29z" fill="#E0457F" />
      <g transform="translate(62 108)">
        <circle cx="0" cy="0" r="11" fill="#FFD1A6" />
        <path d="M-17 60V30a17 17 0 0 1 34 0V60Z" fill="#0F8F74" />
      </g>
      <g transform="translate(132 100)">
        <circle cx="0" cy="0" r="11" fill="#FFD1A6" />
        <path d="M-17 68V30a17 17 0 0 1 34 0V68Z" fill="#E0457F" />
      </g>
      <g transform="translate(212 108)">
        <circle cx="0" cy="0" r="11" fill="#FFD1A6" />
        <path d="M-17 60V30a17 17 0 0 1 34 0V60Z" fill="#F59E3B" />
      </g>
      <g transform="translate(280 112)">
        <circle cx="0" cy="0" r="11" fill="#FFD1A6" />
        <path d="M-17 56V30a17 17 0 0 1 34 0V56Z" fill="#3FC5A6" />
      </g>
      <g stroke="#0F8F74" strokeWidth="2" strokeLinecap="round">
        <path d="M30 60v8M26 64h8" />
        <path d="M250 30v8M246 34h8" />
      </g>
    </svg>
  );
}

export function GrowthIllustration({ className }: IllustrationProps) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 400 230" className={className}>
      <circle cx="190" cy="120" r="104" fill="#FFE3EC" />
      <path d="M0 206 H400 V230 H0Z" fill="#FFD0E0" />
      <rect x="56" y="156" width="42" height="50" rx="8" fill="#FFC2D6" />
      <rect x="116" y="124" width="42" height="82" rx="8" fill="#FF9DBE" />
      <rect x="176" y="92" width="42" height="114" rx="8" fill="#F5709C" />
      <rect x="236" y="60" width="42" height="146" rx="8" fill="#D6165A" />
      <g className="animate-bob motion-reduce:animate-none">
        <path d="M77 140L137 108L197 78L257 46L322 22" fill="none" stroke="#B20F47" strokeWidth="2.5" strokeDasharray="3 7" strokeLinecap="round" />
        <polygon points="322,12 338,24 318,32" fill="#B20F47" />
        <g fill="#fff" stroke="#B20F47" strokeWidth="2">
          <circle cx="77" cy="140" r="5" />
          <circle cx="137" cy="108" r="5" />
          <circle cx="197" cy="78" r="5" />
          <circle cx="257" cy="46" r="5" />
        </g>
      </g>
      <g className="animate-bob2 motion-reduce:animate-none">
        <path d="M334 206V160" stroke="#2FA37F" strokeWidth="3" strokeLinecap="round" />
        <path d="M334 172q-30-2-32-30q28 0 32 30z" fill="#7FD8A8" />
        <path d="M334 160q28-2 30-30q-26 0-30 30z" fill="#3FC5A6" />
      </g>
      <g>
        <ellipse cx="364" cy="200" rx="20" ry="6" fill="#F59E3B" />
        <ellipse cx="364" cy="193" rx="20" ry="6" fill="#FFC98F" stroke="#D4500A" strokeWidth="1.4" />
        <ellipse cx="364" cy="186" rx="20" ry="6" fill="#FFC98F" stroke="#D4500A" strokeWidth="1.4" />
      </g>
      <g stroke="#D6165A" strokeWidth="2" strokeLinecap="round">
        <path d="M40 70v10M35 75h10" />
        <path d="M300 90v8M296 94h8" />
        <path d="M150 40v8M146 44h8" />
      </g>
    </svg>
  );
}
