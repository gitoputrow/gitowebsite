"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import CraftCategoryWidget from "../../../../public/components/video_craft_category/video_craft_category_widget";
import { CraftCategory } from "./models/video-craft-category";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import app from "@/firebaseConfig";
import VideoCraftCardWidget from "../../../../public/components/video_craft_card/video_craft_card_widget";
import { VideoCraft } from "./models/video-craft";

export default function VideoCraftPage() {
  const [categories, setCategories] = useState<CraftCategory[]>([]);
  const [videos, setVideos] = useState<VideoCraft[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<CraftCategory>(
    {} as CraftCategory
  );
  const [isLoading, setIsLoading] = useState(true);

  const db = useMemo(() => getFirestore(app), []);

  const fetchVideos = useCallback(
    async (categoryId: string) => {
      if (!categoryId) {
        setVideos([]);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      const q = query(
        collection(db, "videoCraft"),
        where("category_ids", "array-contains", categoryId),
        orderBy("date", "desc")
      );
      const querySnapshot = await getDocs(q);
      const result: VideoCraft[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as VideoCraft[];
      console.log(result.length)
      setVideos(result);
      setIsLoading(false);
    },
    [db]
  );

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      const q = query(
        collection(db, "videoCraftCategories"),
        orderBy("order", "asc")
      );
      const querySnapshot = await getDocs(q);
      const result: CraftCategory[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CraftCategory[];

      setCategories(result);
      if (result[0]) {
        setSelectedCategory(result[0]);
        fetchVideos(result[0].id);
      } else {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, [db, fetchVideos]);

  console.log(videos.length)

  const projectCount = isLoading
    ? "..."
    : videos.length.toString().padStart(2, "0");

  return (

    

    <main className="min-h-screen px-6 py-12 sm:px-8 sm:py-16">
      <section className="mx-auto max-w-7xl">
        <div className="overflow-hidden border-y border-[rgba(255,248,212,0.16)] py-8 sm:py-12">
          <div className="flex flex-col gap-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(255,248,212,0.62)]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(255,248,212,0.36)] text-sm text-[var(--color-secondary)]">
                  V
                </span>
                Video craft
              </div>
              <p className="text-sm font-medium text-[rgba(255,248,212,0.5)]">
                Selected moving stories
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-[1.35fr_0.65fr] md:items-end">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[rgba(255,248,212,0.48)]">
                  A visual reel
                </p>
                <h1 className="max-w-[12ch] text-4xl font-extrabold leading-[1.04] text-[var(--color-secondary)] sm:text-5xl md:text-6xl">
                  Motion with something to say.
                </h1>
              </div>
              <div className="border-l border-[rgba(255,248,212,0.18)] pl-5 sm:pl-7">
                <p className="text-base leading-8 text-[rgba(255,248,212,0.68)] sm:text-lg sm:leading-8">
                  A collection of edits, stories, and visual experiments shaped
                  around pace, feeling, and the small details that make a scene
                  stay with you.
                </p>
              </div>
            </div>

            <div className="grid gap-px overflow-hidden border border-[rgba(255,248,212,0.14)] bg-[rgba(255,248,212,0.14)] sm:grid-cols-3">
              <div className="bg-[var(--color-primary)] px-5 py-5 sm:px-6">
                <p className="text-2xl font-extrabold text-[var(--color-secondary)] sm:text-3xl">
                  {projectCount}
                </p>
                <p className="mt-2 text-sm text-[rgba(255,248,212,0.56)]">
                  Videos in view
                </p>
              </div>
              <div className="bg-[var(--color-primary)] px-5 py-5 sm:px-6">
                <p className="text-2xl font-extrabold text-[var(--color-secondary)] sm:text-3xl">
                  {categories.length.toString().padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm text-[rgba(255,248,212,0.56)]">
                  Story formats
                </p>
              </div>
              <div className="bg-[rgba(255,248,212,0.06)] px-5 py-5 sm:px-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-secondary)]">
                  Now playing
                </p>
                <p className="mt-2 truncate text-sm text-[rgba(255,248,212,0.62)]">
                  {selectedCategory?.name || "Loading collection"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 sm:py-14">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(255,248,212,0.48)]">
                Browse the reel
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[var(--color-secondary)] sm:text-3xl">
                {selectedCategory?.name || "All stories"}
              </h2>
            </div>
            <p className="text-sm text-[rgba(255,248,212,0.5)]">
              Pick a format to change the cut
            </p>
          </div>

          <div className="flex w-full snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&>*]:shrink-0 [&>*]:snap-start">
            {categories.length === 0
              ? [1, 2, 3, 4].map((i) => <CraftCategoryWidget key={i} />)
              : categories.map((category) => (
                  <CraftCategoryWidget
                    key={category.id}
                    data={category}
                    isSelected={selectedCategory?.id === category.id}
                    onSelect={(category) => {
                      setSelectedCategory(category);
                      setVideos([]);
                      fetchVideos(category.id);
                    }}
                  />
                ))}
          </div>
        </div>

        <div className="border-t border-[rgba(255,248,212,0.12)] pt-8 sm:pt-10">
          {isLoading ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <VideoCraftCardWidget key={i} />
              ))}
            </div>
          ) : videos.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((video) => (
                <VideoCraftCardWidget key={video.id} data={video} />
              ))}
            </div>
          ) : (
            <div className="flex min-h-72 flex-col items-center justify-center border border-[rgba(255,248,212,0.14)] bg-[rgba(255,248,212,0.035)] px-6 text-center">
              <p className="text-xl font-bold text-[var(--color-secondary)] sm:text-2xl">
                This reel is still in the edit.
              </p>
              <p className="mt-3 max-w-md text-sm leading-7 text-[rgba(255,248,212,0.58)]">
                There are no published videos in this category yet. Choose
                another format to keep exploring.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
