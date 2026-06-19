"use client";

import { getFirestore, doc, getDoc } from "firebase/firestore";
import { MobileCraft } from "../models/mobile-craft";
import { useEffect, useState } from "react";
import app from "@/firebaseConfig";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function MobileAppDetailPage() {
  const [data, setData] = useState<MobileCraft>();
  const params = useParams();
  const slug = params?.slug as string;

  useEffect(() => {
    const db = getFirestore(app);
    const fetchData = async () => {
      const docSnap = await getDoc(doc(db, "mobileCraftDetail", slug));
      if (docSnap.exists()) {
        setData(docSnap.data() as MobileCraft);
      }
    };
    fetchData();
  }, [slug]);

  const openUrl = (url?: string) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <main className="min-h-screen px-6 py-10 sm:px-8 sm:py-28">
      <section className="mx-auto flex max-w-7xl flex-col gap-12">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div className="flex flex-col gap-8">
            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[rgba(255,248,212,0.18)] bg-[rgba(255,248,212,0.05)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(255,248,212,0.68)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-secondary)]" />
              App detail
            </div>

            <div className="flex items-center gap-5">
              <div className="relative aspect-square w-20 overflow-hidden rounded-[1.35rem] border border-[rgba(255,248,212,0.16)] bg-[rgba(255,248,212,0.04)] shadow-[0_18px_50px_rgba(0,0,0,0.34)] sm:w-24">
                {data ? (
                  <Image
                    src={data.app_launcher_image}
                    alt={`${data.name} app icon`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="shimmer h-full w-full" />
                )}
              </div>
              <div>
                {data ? (
                  <>
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-[rgba(255,248,212,0.54)]">
                      {data.framework}
                    </p>
                    <h1 className="mt-2 text-2xl font-extrabold leading-none text-[var(--color-secondary)] sm:text-4xl md:text-5xl">
                      {data.title}
                    </h1>
                  </>
                ) : (
                  <div className="flex flex-col gap-3">
                    <div className="shimmer h-4 w-28 rounded-md" />
                    <div className="shimmer h-12 w-64 rounded-lg sm:w-80" />
                  </div>
                )}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 text-xs sm:text-sm">
              <button
                className="cursor-pointer rounded-full border border-[var(--color-secondary)] bg-[var(--color-secondary)] px-6 py-2 sm:py-3 font-bold text-[var(--color-primary)] transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-default disabled:opacity-40 disabled:hover:translate-y-0"
                disabled={!data?.app_link}
                onClick={() => openUrl(data?.app_link)}
              >
                Explore the App
              </button>
              <button
                className="cursor-pointer rounded-full border border-[rgba(255,248,212,0.26)] px-6 py-2 sm:py-3 font-bold text-[var(--color-secondary)] transition-colors duration-300 hover:border-[var(--color-secondary)] disabled:cursor-default disabled:opacity-40"
                disabled={!data?.source_code_link}
                onClick={() => openUrl(data?.source_code_link)}
              >
                See the Code
              </button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[640px]">
            <div className="relative aspect-[12/13] overflow-hidden">
              {data ? (
                <Image
                  src={data.landing_page_image}
                  alt={`${data.name} landing page preview`}
                  fill
                  className="object-fill"
                  priority
                />
              ) : (
                <div className="shimmer h-full w-full" />
              )}
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[1.5rem] border border-[rgba(255,248,212,0.14)] bg-[rgba(255,248,212,0.04)] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(255,248,212,0.5)]">
              Overview
            </p>
            {data ? (
              <p className="mt-5 text-sm leading-8 text-[rgba(255,248,212,0.72)] sm:text-base sm:leading-9">
                {data.desc}
              </p>
            ) : (
              <div className="mt-5 flex flex-col gap-3">
                <div className="shimmer h-5 w-full rounded-md" />
                <div className="shimmer h-5 w-11/12 rounded-md" />
                <div className="shimmer h-5 w-4/5 rounded-md" />
              </div>
            )}
          </article>

          <aside className="rounded-[1.5rem] border border-[rgba(255,248,212,0.14)] bg-[rgba(255,248,212,0.035)] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(255,248,212,0.5)]">
              Tech notes
            </p>
            {data ? (
              <p className="mt-5 text-sm leading-8 text-[rgba(255,248,212,0.62)]">
                {data.tech_desc}
              </p>
            ) : (
              <div className="mt-5 flex flex-col gap-3">
                <div className="shimmer h-4 w-full rounded-md" />
                <div className="shimmer h-4 w-10/12 rounded-md" />
                <div className="shimmer h-4 w-7/12 rounded-md" />
              </div>
            )}
          </aside>
        </div>

        <div className="relative overflow-hidden rounded-[1.5rem] border border-[rgba(255,248,212,0.14)] bg-[rgba(255,248,212,0.035)]">
          <div className="relative aspect-[16/9] w-full">
            {data ? (
              <Image
                src={data.app_preview_image}
                alt={`${data.name} app screen preview`}
                fill
                className="object-cover"
              />
            ) : (
              <div className="shimmer h-full w-full" />
            )}
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(20,20,20,0.82),transparent)] p-6 sm:p-8">
              <p className="max-w-2xl text-lg font-bold text-[var(--color-secondary)] sm:text-2xl">
                {data?.name || "Loading app showcase"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
