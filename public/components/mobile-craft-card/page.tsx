"use client";
import { shimmer, toBase64 } from "@/utils/image_shimmer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./styles.css";
import "@/app/globals.css";
import { MobileCraft } from "@/app/my-craft/mobile-craft/models/mobile-craft";

export default function MobileCraftCard({ data }: { data?: MobileCraft }) {
  const isLoading =
    !data?.app_preview_image || !data?.app_launcher_image || !data?.name;

  const router = useRouter();

  return (
    <div
      className={`mobile-craft-card${isLoading ? " loading" : ""}`}
      onClick={() => {
        if (!isLoading && data.id) {
          router.push(`mobile-craft/${data.id}`);
        }
      }}
    >
      <div className="mobile-craft-card-image-wrapper">
        {isLoading ? (
          <div
            className="shimmer"
            style={{ width: "100%", height: "100%", borderRadius: 12 }}
          ></div>
        ) : (
          <Image
            src={data.app_preview_image}
            alt="Deskripsi gambar"
            fill
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(200, 200)
            )}`}
          />
        )}
      </div>
      <div className="mobile-craft-card-info">
        <div className="mobile-craft-card-info-img-wrapper">
          {isLoading ? (
            <div
              className="shimmer"
              style={{ width: "100%", height: "100%" }}
            ></div>
          ) : (
            <Image
              src={data.app_launcher_image}
              alt="Deskripsi gambar"
              fill
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(75, 75)
              )}`}
            />
          )}
        </div>
        <div className="mobile-craft-card-info-text">
          {isLoading ? (
            <div
              className="shimmer"
              style={{ width: "100%", height: "18px", borderRadius: 4 }}
            ></div>
          ) : (
            <h1>{data?.name}</h1>
          )}
          <div style={{ marginBottom: "8px" }}></div>
          {isLoading ? (
            <div
              className="shimmer"
              style={{ width: "40%", height: "15px", borderRadius: 4 }}
            ></div>
          ) : (
            <p>{data?.framework}</p>
          )}
        </div>
      </div>
    </div>
  );
}
