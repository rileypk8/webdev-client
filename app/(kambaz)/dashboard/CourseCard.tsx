import Link from "next/link";
import Image from "next/image";

export default function CourseCard({
  id,
  title,
  subtitle,
  image,
}: {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <div className="wd-dashboard-course border rounded-lg shadow overflow-hidden bg-white">
      <Link
        href={`/courses/${id}/home`}
        className="wd-dashboard-course-link block"
      >
        <Image
          src={image}
          width={200}
          height={150}
          alt={title}
          className="w-full h-36 object-cover"
        />
        <div className="p-3">
          <h5 className="font-bold truncate">{title}</h5>
          <p className="wd-dashboard-course-title text-sm text-gray-500 truncate">
            {subtitle}
          </p>
          <button
            type="button"
            className="mt-2 bg-red-700 text-white text-sm px-3 py-1 rounded"
          >
            Go
          </button>
        </div>
      </Link>
    </div>
  );
}
