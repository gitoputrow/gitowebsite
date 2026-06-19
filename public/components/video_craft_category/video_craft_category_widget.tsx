import { CraftCategory } from "@/app/my-craft/video-craft/models/video-craft-category";

export default function CraftCategoryWidget({
  data,
  isSelected = false,
  onSelect = () => {},
}: {
  data?: CraftCategory;
  isSelected?: boolean;
  onSelect?: (category: CraftCategory) => void;
}) {
  const isLoading = !data?.name || !data?.id;

  return isLoading ? (
    <div
      className="shimmer border border-transparent px-4 py-2.5 text-sm text-transparent"
    >
      Loading
    </div>
  ) : (
    <div
      className={`shrink-0 snap-start whitespace-nowrap border px-4 py-2.5 text-sm font-semibold transition-colors duration-300 hover:cursor-pointer sm:px-5 ${
        isSelected
          ? "border-[var(--color-secondary)] bg-[var(--color-secondary)] text-[var(--color-primary)]"
          : "border-[rgba(255,248,212,0.22)] text-[rgba(255,248,212,0.68)] hover:border-[rgba(255,248,212,0.5)] hover:text-[var(--color-secondary)]"
      }`}
      onClick={() => onSelect(data)}
    >
      {isLoading ? "loading" : data.name}
    </div>
  );
}
