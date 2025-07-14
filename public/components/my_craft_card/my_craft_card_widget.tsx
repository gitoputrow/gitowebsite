'use client';

import "./my_craft_card_styles.css";
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
            <div className="card-craft-styles" onClick={() => {
                router.push(`${pathname}/${page_name}`);
            }}>
                <Image
                    src={`/picture/${scr}.png`}
                    alt="Picture of the author"
                    width={200}
                    height={200}
                    className="logo-craft"
                />
                <div className="text-craft-styles">
                    <h1>{title}</h1>
                    <div style={{ marginBottom: "12px" }}></div>
                    <p>{desc}</p>
                </div>
            </div>
        </>
    );
}