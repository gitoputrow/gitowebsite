"use client";

import app from "@/firebaseConfig";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useCallback, useEffect, useMemo, useState } from "react";
import { MobileCraft } from "./models/mobile-craft";
import MobileCraftCard from "../../../../public/components/mobile-craft-card/page";
import { CraftCategory } from "../video-craft/models/video-craft-category";
import CraftCategoryWidget from "../../../../public/components/video_craft_category/video_craft_category_widget";

export default function AppCraftPage() {
  const [data, setData] = useState<MobileCraft[]>([]);
  const [categories, setCategories] = useState<CraftCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<CraftCategory>(
    {} as CraftCategory
  );

  const db = useMemo(() => getFirestore(app), []);

  const fetchApp = useCallback(async (categoryId: string) => {
    setIsLoading(true);
    const collectionRef = collection(db, "mobileCraft");
    const q = query(
      collectionRef,
      where("category_ids", "array-contains", categoryId)
    );
    const querySnapshot = await getDocs(q);
    const result: MobileCraft[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as MobileCraft[];
    setData(result);
    setIsLoading(false);
  }, [db]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const querySnapshot = await getDocs(collection(db, "appCraftCategories"));
      const result: CraftCategory[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CraftCategory[];
      setCategories(result);
      if (result[0]) {
        setSelectedCategory(result[0]);
        fetchApp(result[0].id);
      } else {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [db, fetchApp]);

  const projectCount = isLoading
    ? "..."
    : data.length.toString().padStart(2, "0");
  const categoryCount = categories.length.toString().padStart(2, "0");

  return (
    <main className="min-h-screen px-6 py-12 sm:px-8">
      <section className="mx-auto flex max-w-7xl flex-col gap-12">
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[rgba(255,248,212,0.18)] bg-[rgba(255,248,212,0.05)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(255,248,212,0.68)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-secondary)]" />
              App craft
            </div>
            <h1 className="max-w-[11ch] text-4xl font-extrabold leading-none text-[var(--color-secondary)] sm:text-5xl md:text-6xl">
              Featured App Showcase
            </h1>
          </div>

          <div className="flex flex-col gap-6">
            <p className="max-w-[58ch] text-base leading-8 text-[rgba(255,248,212,0.68)] sm:text-lg sm:leading-[1.85]">
              A curated shelf of mobile products shaped around clean flows,
              useful features, and interface details that make each experience
              feel direct, polished, and easy to explore.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[rgba(255,248,212,0.14)] bg-[rgba(255,248,212,0.04)] p-5">
                <p className="text-2xl font-extrabold text-[var(--color-secondary)] sm:text-3xl">
                  {projectCount}
                </p>
                <p className="mt-2 text-sm font-semibold text-[rgba(255,248,212,0.58)]">
                  Shown projects
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-[rgba(255,248,212,0.14)] bg-[rgba(255,248,212,0.04)] p-5">
                <p className="text-2xl font-extrabold text-[var(--color-secondary)] sm:text-3xl">
                  {categoryCount}
                </p>
                <p className="mt-2 text-sm font-semibold text-[rgba(255,248,212,0.58)]">
                  Craft categories
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-y border-[rgba(255,248,212,0.12)] py-6">
          
          <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(255,248,212,0.5)]">
                Filter
              </p>
              <h2 className="mt-2 text-xl font-bold text-[var(--color-secondary)] sm:text-2xl">
                {selectedCategory?.name || "Choose a category"}
              </h2>
            </div>

          <div className="flex w-full snap-x snap-mandatory flex-row gap-4 overflow-x-auto pb-1 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&>*]:shrink-0 [&>*]:snap-start">
            {categories.length === 0
              ? [1, 2, 3, 4].map((i) => <CraftCategoryWidget key={i} />)
              : categories.map((category) => (
                  <CraftCategoryWidget
                    key={category.id}
                    data={category}
                    isSelected={selectedCategory?.id === category.id}
                    onSelect={(category) => {
                      setSelectedCategory(category);
                      setData([]);
                      fetchApp(category.id);
                    }}
                  />
                ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:justify-start">
          {isLoading ? (
            [1, 2, 3].map((i) => <MobileCraftCard key={i} />)
          ) : data.length > 0 ? (
            data.map((item) => <MobileCraftCard key={item.id} data={item} />)
          ) : (
            <div className="flex min-h-[260px] w-full flex-col items-center justify-center rounded-[1.5rem] border border-[rgba(255,248,212,0.14)] bg-[rgba(255,248,212,0.035)] px-6 text-center">
              <p className="text-xl font-bold text-[var(--color-secondary)] sm:text-2xl">
                No projects found
              </p>
              <p className="mt-3 max-w-md text-sm leading-7 text-[rgba(255,248,212,0.58)]">
                This category is ready, but the app showcase has not been
                published yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
