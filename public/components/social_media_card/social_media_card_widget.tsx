'use client';

import Image from "next/image";

type socialMediaCardProps = {
  scr: string;
  name: string;
  username: string;
  url: string;
};

export default function SocialMediaCardWidget({
  scr,
  name,
  username,
  url,
}: socialMediaCardProps) {
  return (
    <div
      className="group flex cursor-pointer items-center justify-between rounded-2xl border border-[rgba(255,248,212,0.18)] bg-[rgba(255,248,212,0.045)] px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-secondary)] hover:bg-[var(--color-secondary)]"
      onClick={() => window.open(url, "_blank")}
    >
      <div className="flex min-w-0 items-center gap-4">
        <Image
          src={`/icon/${scr}.png`}
          alt="Social Media Card"
          width={80}
          height={80}
          className="h-12 w-12 shrink-0 object-contain max-[425px]:h-10 max-[425px]:w-10"
        />
        <div className="flex min-w-0 flex-col justify-center">
          <div className="text-sm sm:text-base font-extrabold text-[var(--color-secondary)] group-hover:text-[var(--color-primary)]">{name}</div>
          <div className="mt-1 truncate text-xs sm:text-sm font-semibold text-[rgba(255,248,212,0.68)] group-hover:text-[rgba(34,34,34,0.78)] max-[425px]:text-xs">{username}</div>
        </div>
      </div>
      <span className="ml-4 text-xl text-[rgba(255,248,212,0.56)] group-hover:text-[var(--color-primary)]">→</span>
    </div>
  );
}
