"use client";

import { useParams } from "next/navigation";
import { VideoCraft } from "../models/video-craft";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import app from "@/firebaseConfig";

export default function VideoCraftDetailPage() {
  const [data, setData] = useState<VideoCraft>();
  const params = useParams();
  const slug = params?.slug as string;

  useEffect(() => {
    const db = getFirestore(app);
    const fetchVideo = async () => {
      const docSnap = await getDoc(doc(db, "videoCraftDetail", slug));
      if (docSnap.exists()) {
        setData(docSnap.data() as VideoCraft);
      }
    };

    fetchVideo();
  }, [slug]);

  return (
    <main className="min-h-screen px-6 py-12 sm:px-8 sm:py-16">
      <section className="mx-auto flex max-w-7xl flex-col gap-10 sm:gap-14">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[rgba(255,248,212,0.14)] pb-5">
          <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(255,248,212,0.62)]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(255,248,212,0.36)] text-sm text-[var(--color-secondary)]">
              V
            </span>
            Video craft / screening room
          </div>
          {data ? (
            <p className="text-sm font-medium text-[rgba(255,248,212,0.52)]">
              {data.duration} runtime
            </p>
          ) : (
            <div className="shimmer h-4 w-24 rounded" />
          )}
        </div>

        <div className="relative overflow-hidden border border-[rgba(255,248,212,0.16)] bg-black shadow-[0_28px_80px_rgba(0,0,0,0.34)]">
          <div className="relative aspect-video w-full">
            {data?.video_url ? (
              <video
                className="h-full w-full bg-black object-contain"
                controls
                poster={data.thumbnail}
                preload="metadata"
                src={data.video_url}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="shimmer h-full w-full" />
            )}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(255,248,212,0.48)]">
              Featured story
            </p>
            {data ? (
              <h1 className="mt-4 max-w-[18ch] text-3xl font-extrabold leading-tight text-[var(--color-secondary)] sm:text-4xl md:text-5xl">
                {data.title}
              </h1>
            ) : (
              <div className="mt-4 flex flex-col gap-3">
                <div className="shimmer h-10 w-5/6 rounded sm:h-12" />
                <div className="shimmer h-10 w-3/5 rounded sm:h-12" />
              </div>
            )}
          </div>

          <aside className="border-l border-[rgba(255,248,212,0.16)] pl-5 sm:pl-7">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(255,248,212,0.48)]">
              Project notes
            </p>
            {data ? (
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[rgba(255,248,212,0.66)]">
                <p>
                  <span className="text-[rgba(255,248,212,0.44)]">Format </span>
                  {data.category || "Video story"}
                </p>
                <p>
                  <span className="text-[rgba(255,248,212,0.44)]">Duration </span>
                  {data.duration}
                </p>
              </div>
            ) : (
              <div className="mt-4 flex gap-3">
                <div className="shimmer h-4 w-24 rounded" />
                <div className="shimmer h-4 w-20 rounded" />
              </div>
            )}
          </aside>
        </div>

        <div className="grid gap-px border-y border-[rgba(255,248,212,0.14)] bg-[rgba(255,248,212,0.14)] md:grid-cols-[0.32fr_0.68fr]">
          <div className="bg-[rgba(255,248,212,0.05)] px-5 py-6 sm:px-7 sm:py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(255,248,212,0.48)]">
              About the cut
            </p>
            <p className="mt-3 text-sm leading-7 text-[rgba(255,248,212,0.58)]">
              A closer look at the intent behind this piece.
            </p>
          </div>
          <article className="bg-[var(--color-primary)] px-5 py-6 sm:px-7 sm:py-8">
            {data ? (
              <p className="max-w-3xl text-sm leading-8 text-[rgba(255,248,212,0.74)] sm:text-base sm:leading-9">
                {data.desc}
              </p>
            ) : (
              <div className="flex max-w-3xl flex-col gap-3">
                <div className="shimmer h-5 w-full rounded" />
                <div className="shimmer h-5 w-11/12 rounded" />
                <div className="shimmer h-5 w-4/5 rounded" />
              </div>
            )}
          </article>
        </div>
      </section>
    </main>
  );
}
