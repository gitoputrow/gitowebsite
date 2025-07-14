"use client";

import "./styles.css";
import app from "@/firebaseConfig";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { MobileCraft } from "./models/mobile-craft";
import MobileCraftCard from "../../../../public/components/mobile-craft-card/page";

export default function MobileCraftPage() {
  const [data, setData] = useState<MobileCraft[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const db = getFirestore(app);
    const collectionRef = collection(db, "mobileCraft");
    const fetchData = async () => {
      setIsLoading(true);
      const querySnapshot = await getDocs(collectionRef);
      const result: MobileCraft[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as MobileCraft[];
      setData(result);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="main-mobile-craft">
      <div className="mobile-craft-appbar">
        <div className="full-circle-split"></div>
        <div>My Mobile App Creations</div>
      </div>
      <div className="mobile-craft-content">
        {isLoading ? [1, 2].map((i) => (
        <MobileCraftCard key={i} />
      )) : data.map((item) => (
          <MobileCraftCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
