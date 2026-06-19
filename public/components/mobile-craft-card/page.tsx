"use client";
import { shimmer, toBase64 } from "@/utils/image_shimmer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MobileCraft } from "@/app/my-craft/app-craft/models/mobile-craft";

export default function MobileCraftCard({ data }: { data?: MobileCraft }) {
  const isLoading =
    !data?.app_preview_image || !data?.app_launcher_image || !data?.name;

  const router = useRouter();

  return (
    <div
      className={`group relative flex w-full flex-col overflow-hidden rounded-[1.5rem] border border-[rgba(255,248,212,0.12)] bg-[rgba(255,248,212,0.04)] p-4 transition-all duration-300 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] ${
        isLoading
          ? "cursor-default"
          : "cursor-pointer hover:-translate-y-1 hover:border-[rgba(255,248,212,0.34)] hover:bg-[rgba(255,248,212,0.075)] hover:shadow-[0_24px_70px_rgba(0,0,0,0.28)]"
      }`}
      onClick={() => {
        if (!isLoading && data.id) {
          router.push(`app-craft/${data.id}`);
        }
      }}
    >
      <div className="relative aspect-[7/4] w-full overflow-hidden rounded-[1.15rem] bg-[rgba(20,20,20,0.5)]">
        {isLoading ? (
          <div
            className="shimmer"
            style={{ width: "100%", height: "100%", borderRadius: 18 }}
          ></div>
        ) : (
          <>
            <Image
              src={data.app_preview_image}
              alt={`${data.name} app preview`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(200, 200)
              )}`}
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_top,rgba(20,20,20,0.72),transparent)]" />
          </>
        )}
      </div>

      <div className="relative -mt-7 flex w-full flex-row items-end justify-between gap-4 px-2">
        <div className="relative aspect-square w-20 overflow-hidden rounded-[1.25rem] border border-[rgba(255,248,212,0.16)] bg-[var(--color-card)] shadow-[0_14px_34px_rgba(0,0,0,0.28)] sm:w-24">
          {isLoading ? (
            <div
              className="shimmer"
              style={{ width: "100%", height: "100%" }}
            ></div>
          ) : (
            <Image
              src={data.app_launcher_image}
              alt={`${data.name} app icon`}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(75, 75)
              )}`}
            />
          )}
        </div>

        {!isLoading && (
          <div className="mb-2 rounded-full border border-[rgba(255,248,212,0.16)] bg-[rgba(20,20,20,0.52)] px-3 py-1 text-xs font-semibold text-[rgba(255,248,212,0.72)] transition-colors duration-300 group-hover:border-[rgba(255,248,212,0.3)] group-hover:text-[var(--color-secondary)]">
            View detail
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
        <div className="text-[var(--color-secondary)]">
          {isLoading ? (
            <div
              className="shimmer"
              style={{ width: "82%", height: "22px", borderRadius: 8 }}
            ></div>
          ) : (
            <h1 className="line-clamp-2 text-lg font-bold leading-snug sm:text-xl">
              {data?.name}
            </h1>
          )}
          <div className="mb-3" />
          {isLoading ? (
            <div
              className="shimmer"
              style={{ width: "44%", height: "16px", borderRadius: 8 }}
            ></div>
          ) : (
            <p className="text-sm font-semibold uppercase tracking-wide text-[rgba(255,248,212,0.52)]">
              {data?.framework}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
