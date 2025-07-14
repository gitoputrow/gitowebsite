import { VideoCraft } from "@/app/my-craft/video-craft/models/video-craft";
import "./video_craft_card_styles.css";
import "@/app/globals.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function VideoCraftCardWidget({ data }: { data?: VideoCraft }) {

  const router = useRouter();

  return (
    <div className="video-craft-card-widget" onClick={() => {
      if (data) {
        router.push(`video-craft/${data.id}`);
      }
    }}>
      <div className="video-craft-card-thumbnail">
        {!data ? (
          <div
            className="shimmer"
            style={{ width: "100%", height: "100%" }}
          ></div>
        ) : (
          <Image src={data.thumbnail} alt="Thumbnail" fill />
        )}
      </div>
      <div style={{ marginBottom: "12px" }}></div>
      {!data ? (
        <div
          className="shimmer"
          style={{ width: "100%", height: "20px", borderRadius: "8px" }}
        ></div>
      ) : (
        <div className="video-craft-card-title">{data.title}</div>
      )}
      <div style={{ marginBottom: "12px" }}></div>
      {!data ? (
        <div
          className="shimmer"
          style={{ width: "50%", height: "20px", borderRadius: "8px" }}
        ></div>
      ) : (
        <div className="video-craft-card-duration">Duration : {data.duration}</div>
      )}
    </div>
  );
}
