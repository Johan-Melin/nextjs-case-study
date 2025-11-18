import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  link,
}: ProjectCardProps) {
  return (
    <div className="w-full xl:w-[calc(50%-1rem)] mb-8 xl:mb-12">
      <div className="group relative h-128 overflow-hidden rounded-xl border-2 border-gray-800">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
      </div>
    
      <div className="flex flex-row gap-6 p-6 w-full justify-between">
        <div className="flex-2 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        </div>
        <div className="flex-3 flex flex-col">
          <p className="text-gray-200 text-sm mb-4 line-clamp-2">{description}</p>
          <button
            className="flex items-center text-blue-300 hover:text-white transition-colors cursor-pointer w-fit"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}