"use client";

import "./styles.css";
import app from "@/firebaseConfig";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { MobileCraft } from "./models/mobile-craft";
import MobileCraftCard from "../../../../public/components/mobile-craft-card/page";
import { CraftCategory } from "../video-craft/models/video-craft-category";
import CraftCategoryWidget from "../../../../public/components/video_craft_category/video_craft_category_widget";

export default function AppCraftPage() {
  const [data, setData] = useState<MobileCraft[]>([]);
  const [categories, setCategories] = useState<CraftCategory[]>([]); // <VideoCraftCategory>
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<CraftCategory>(
    {} as CraftCategory
  );

  const db = getFirestore(app);

  const fetchApp = async (categoryId: string) => {
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
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const querySnapshot = await getDocs(collection(db, "appCraftCategories"));
      const result: CraftCategory[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CraftCategory[];
      setCategories(result);
      setSelectedCategory(result[0]);
      fetchApp(result[0].id);
      
    };
    fetchData();
  }, []);
  return (
    <div className="main-mobile-craft">
      <div className="mobile-craft-appbar">
        <div className="full-circle-split"></div>
        <div>My Mobile App Creations</div>
      </div>
      <div className="app-craft-category">
        {categories.length === 0
          ? [1, 2, 3].map((i) => <CraftCategoryWidget key={i} />)
          : categories.map((data) => (
              <CraftCategoryWidget
                key={data.id}
                data={data}
                isSelected={selectedCategory === data}
                onSelect={(categories) => {
                  setSelectedCategory(categories);
                  setData([]);
                  fetchApp(categories.id);
                }}
              />
            ))}
      </div>
      <div className="mobile-craft-content">
        {isLoading
          ? [1, 2].map((i) => <MobileCraftCard key={i} />)
          : data.map((item) => <MobileCraftCard key={item.id} data={item} />)}
      </div>
    </div>
  );
}
