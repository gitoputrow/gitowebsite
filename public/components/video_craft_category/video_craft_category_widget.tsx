import { CraftCategory } from "@/app/my-craft/video-craft/models/video-craft-category";
import "./video_craft_category_style.css";

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
      className="shimmer"
      style={{
        borderRadius: 28,
        padding: "12px 16px",
        color: "transparent",
        fontSize: 14,
      }}
    >
      Loading
    </div>
  ) : (
    <div
      className={`video-craft-category-widget-main${
        isSelected ? " selected" : ""
      }`}
      onClick={() => onSelect(data)}
    >
      {isLoading ? "loading" : data.name}
    </div>
  );
}
