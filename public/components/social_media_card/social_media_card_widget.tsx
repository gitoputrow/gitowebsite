'use client';

import "./social_media_card_styles.css";
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
      className="main"
      onClick={() => window.open(url, "_blank")}
      style={{ cursor: "pointer" }}
    >
      <Image
        src={`/icon/${scr}.png`}
        alt="Social Media Card"
        width={80}
        height={80}
        className="logos"
      />
      <div style={{ marginRight: "16px" }}></div>
      <div className="social-media-info">
        <div className="social-media-name">{name}</div>
        <div style={{ marginTop: "4px" }}></div>
        <div className="username">{username}</div>
      </div>
    </div>
  );
}
