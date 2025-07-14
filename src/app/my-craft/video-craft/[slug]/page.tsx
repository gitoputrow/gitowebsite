"use client";

import { useParams } from "next/navigation";
import { VideoCraft } from "../models/video-craft";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import app from "@/firebaseConfig";
import "./styles.css";

export default function VideoCraftDetailPage() {
  const [data, setData] = useState<VideoCraft>();
  const params = useParams();
  const slug = params?.slug as string;

  useEffect(() => {
    const db = getFirestore(app);
    const fetch = async () => {
      const docSnap = await getDoc(doc(db, "videoCraftDetail", slug));
      if (docSnap.exists()) {
        setData(docSnap.data() as VideoCraft);
      }
    };
    fetch();
  }, [slug]);

  return (
    <div className="video-craft-detail-page-main">
      {data ? (
        <video width="100%" controls src={data?.video_url} />
      ) : (
        <div
          className="shimmer"
          style={{ width: "100%", aspectRatio: "16/9" }}
        ></div>
      )}
      {/* <div style={{ marginBottom: "24px" }}></div> */}
      <div style={{ width: "100%", padding: "24px" }}>
        {data ? (
          <h1>{data?.title}</h1>
        ) : (
          <div
            className="shimmer"
            style={{ width: "60%", height: "32px", borderRadius: "8px" }}
          ></div>
        )}
        <div style={{ marginBottom: "16px" }}></div>
        {data ? (
          <p>{data?.desc}</p>
        ) : (
          <div
            className="shimmer"
            style={{ width: "100%", height: "100px", borderRadius: "8px" }}
          ></div>
        )}
      </div>
    </div>
  );
}
