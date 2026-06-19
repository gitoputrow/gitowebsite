'use client';

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

type myCraftCardProps = {
    scr: string;
    title: string;
    desc: string;
    page_name: string;
};

export default function MyCraftCardWidget({scr, title, desc,page_name}: myCraftCardProps) {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <>
            <div className="group grid min-h-[360px] w-full cursor-pointer grid-rows-[auto_1fr_auto] rounded-2xl border border-[rgba(255,248,212,0.18)] bg-[rgba(255,248,212,0.045)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:shadow-[0_28px_80px_rgba(0,0,0,0.34)] max-[425px]:min-h-0 max-[425px]:p-6" onClick={() => {
                router.push(`${pathname === "/" ? "/my-craft" : pathname}/${page_name}`);
            }}>
                <div className="flex items-start justify-between gap-4">
                    <Image
                        src={`/picture/${scr}.png`}
                        alt="Craft category icon"
                        width={200}
                        height={200}
                        className="h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-105 max-[425px]:h-20 max-[425px]:w-20"
                    />
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(255,248,212,0.28)] text-xl text-[var(--color-secondary)] transition-colors duration-300 group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)]">
                        →
                    </div>
                </div>
                <div className="mt-10 self-end max-[425px]:mt-8">
                    <h1 className=" text-left text-xl sm:text-4xl md:text-5xl font-extrabold leading-[1.2] text-[var(--color-secondary)] group-hover:text-[var(--color-primary)]">{title}</h1>
                    <div className="mb-5" />
                    <p className="text-left text-xs sm:text-sm leading-[1.85] text-[rgba(255,248,212,0.72)] group-hover:text-[rgba(34,34,34,0.82)]">{desc}</p>
                </div>
                <div className="mt-8 h-px w-full bg-[rgba(255,248,212,0.16)] group-hover:bg-[rgba(34,34,34,0.22)]" />
            </div>
        </>
    );
}
