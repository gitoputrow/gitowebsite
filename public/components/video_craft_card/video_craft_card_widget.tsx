import { VideoCraft } from "@/app/my-craft/video-craft/models/video-craft";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function VideoCraftCardWidget({ data }: { data?: VideoCraft }) {
  const router = useRouter();
  const isLoading = !data?.thumbnail || !data?.title;

  return (
    <div
      className={`group flex min-w-0 flex-col border border-[rgba(255,248,212,0.14)] bg-[rgba(255,248,212,0.035)] p-3 transition-all duration-300 sm:p-4 ${
        isLoading
          ? "cursor-default"
          : "cursor-pointer hover:-translate-y-1 hover:border-[rgba(255,248,212,0.36)] hover:bg-[rgba(255,248,212,0.07)]"
      }`}
      onClick={() => {
        if (data?.id) {
          router.push(`video-craft/${data.id}`);
        }
      }}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-[rgba(255,248,212,0.06)]">
        {isLoading ? (
          <div className="shimmer h-full w-full" />
        ) : (
          <>
            <Image
              src={data.thumbnail}
              alt={`Thumbnail for ${data.title}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_46%,rgba(0,0,0,0.7)_100%)]" />
            <span className="absolute bottom-3 left-3 border border-[rgba(255,248,212,0.52)] bg-[rgba(0,0,0,0.38)] px-2.5 py-1 text-xs font-semibold text-[var(--color-secondary)]">
              {data.duration}
            </span>
          </>
        )}
      </div>

      <div className="flex min-h-28 flex-col justify-between px-1 pb-1 pt-4">
        {isLoading ? (
          <>
            <div className="shimmer h-5 w-4/5 rounded" />
            <div className="shimmer h-3 w-2/5 rounded" />
          </>
        ) : (
          <>
            <h3 className="line-clamp-2 text-lg font-bold leading-snug text-[var(--color-secondary)] sm:text-xl">
              {data.title}
            </h3>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(255,248,212,0.5)]">
              Watch story
            </p>
          </>
        )}
      </div>
    </div>
  );
}
