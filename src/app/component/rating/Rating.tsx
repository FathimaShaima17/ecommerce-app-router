import { StarIcon } from "@heroicons/react/24/solid";

export default function Rating({ value = 4, count = 128 }) {
  return (
    <div className="flex items-center gap-1 mt-1">
      {[1,2,3,4,5].map((star) => (
        <StarIcon
          key={star}
          className={`h-4 w-4 ${
            star <= value ? "text-yellow-400" : "text-zinc-300"
          }`}
        />
      ))}
      <span className="text-xs text-zinc-500 ml-1">({count})</span>
    </div>
  );
}
