import Link from "next/link";
import Image from "next/image";

export default function CourseCard({
  _id,
  name,
  description,
  image,
}: {
  _id: string;
  name: string;
  description: string;
  image: string;
}) {
  return (
    <div className="wd-dashboard-course border rounded-lg shadow overflow-hidden bg-white">
      <Link
        href={`/courses/${_id}/home`}
        className="wd-dashboard-course-link block"
      >
        <Image
          src={image}
          width={200}
          height={150}
          alt={name}
          className="w-full h-36 object-cover"
        />
        <div className="p-3">
          <h5 className="wd-dashboard-course-title font-bold truncate">
            {name}
          </h5>
          <p className="wd-dashboard-course-description text-sm text-gray-500 truncate">
            {description}
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
