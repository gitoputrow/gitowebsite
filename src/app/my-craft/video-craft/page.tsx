"use client";

import { useEffect, useState } from "react";
import VideoCraftCategoryWidget from "../../../../public/components/video_craft_category/video_craft_category_widget";
import "./styles.css";
import { VideoCraftCategory } from "./models/video-craft-category";
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
  const [categories, setCategories] = useState<VideoCraftCategory[]>([]);

  const [videos, setVideos] = useState<VideoCraft[]>([]);

  const [selectedCategory, setSelectedCategory] = useState<VideoCraftCategory>(
    {} as VideoCraftCategory
  );

  const fetchVideo = async (categoryId: string) => {
    if (!categoryId) return;
    const db = getFirestore(app);
    const q = query(
      collection(db, "videoCraft"),
      where("category_ids", "array-contains", categoryId),
      orderBy("date", "asc")
    );
    const querySnapshot = await getDocs(q);
    const result: VideoCraft[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as VideoCraft[];
    setVideos(result);
  };

  useEffect(() => {
    const db = getFirestore(app);
    const fetchData = async () => {
      const q = query(
        collection(db, "videoCraftCategories"),
        orderBy("order", "asc")
      );
      const querySnapshot = await getDocs(q);
      const result: VideoCraftCategory[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as VideoCraftCategory[];
      setCategories(result);
      setSelectedCategory(result[0]);
      fetchVideo(result[0].id);
    };
    fetchData();
  }, []);

  return (
    <div className="main-video-craft">
      <div className="video-craft-appbar">
        <div className="full-split-circle"></div>
        <div>My Video Craft</div>
      </div>
      <div style={{ marginBottom: "12px" }}></div>
      <div className="video-craft-category">
        {categories.length === 0
          ? [1, 2, 3].map((i) => <VideoCraftCategoryWidget key={i} />)
          : categories.map((data) => (
              <VideoCraftCategoryWidget
                key={data.id}
                data={data}
                isSelected={selectedCategory === data}
                onSelect={(categories) => {
                  setSelectedCategory(categories);
                  setVideos([]);
                  fetchVideo(categories.id);
                }}
              />
            ))}
      </div>
      <div style={{ marginBottom: "12px" }}></div>
      <div className="video-craft-content">
        {videos.length === 0
          ? [1, 2, 3].map((i) => <VideoCraftCardWidget key={i} />)
          : videos.map((data) => (
              <VideoCraftCardWidget key={data.id} data={data} />
            ))}
      </div>
    </div>
  );
}
