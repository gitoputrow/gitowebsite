"use client";

import "./styles.css";
import "@/app/globals.css";
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

  return (
    <div className="mobile-craft-detail">
      <div className="mobile-craft-detail-header">
        <div className="mobile-craft-detail-header-img">
          <Image
            src={data?.app_launcher_image ?? ""}
            alt="deskripsi gambar"
            fill
            style={{ opacity: data ? 1 : 0, transition: "opacity 1s" }}
          />
        </div>
      </div>
      <div className="mobile-craft-detail-landing-page">
        <div className="mobile-craft-detail-landing-page-content">
          <h2 style={{ opacity: data ? 1 : 0, transition: "opacity 1s" }}>
            {data?.title ?? ""}
          </h2>
          <div style={{ marginBottom: "16px" }}></div>
          <h1 style={{ opacity: data ? 1 : 0, transition: "opacity 1s" }}>
            {data?.desc ?? ""}
          </h1>
          <div style={{ marginBottom: "16px" }}></div>
          <p style={{ opacity: data ? 1 : 0, transition: "opacity 1s" }}>
            {data?.tech_desc ?? ""}
          </p>
          <div style={{ marginBottom: "32px" }}></div>
          <div
            className="button-container"
            style={{ opacity: data ? 1 : 0, transition: "opacity 1s" }}
          >
            <div
              className="button-apk"
              onClick={() => {
                window.open(data?.app_link, "_blank");
              }}
            >
              Explore the App
            </div>
            <div
              className="button-source"
              onClick={() => {
                window.open(data?.source_code_link, "_blank");
              }}
            >
              See the Code
            </div>
          </div>
        </div>
        <div className="mobile-craft-detail-landing-page-img">
          <Image
            src={data?.landing_page_image ?? ""}
            alt="deskripsi gambar"
            fill
            style={{ opacity: data ? 1 : 0, transition: "opacity 1s" }}
          />
        </div>
      </div>
    </div>
  );
}
