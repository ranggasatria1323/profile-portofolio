import React, { useState } from "react";
import WorkCategory from "./WorkCategory";
import ProjectGallery from "./ProjectGalery";
import { Box, Code2, Image, Video } from "lucide-react";

type Category =
  | "3D Portofolio"
  | "Motion Graphic"
  | "Web Development"
  | "Another Arts";

const FeaturedWork: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<Category>("3D Portofolio");

  const categories: { name: Category; icon: React.ReactNode; color: string }[] =
    [
      {
        name: "3D Portofolio",
        icon: <Box className="w-6 h-6" />,
        color: "from-purple-500 to-indigo-500",
      },
      {
        name: "Motion Graphic",
        icon: <Video className="w-6 h-6" />,
        color: "from-yellow-500 to-orange-500",
      },
      {
        name: "Web Development",
        icon: <Code2 className="w-6 h-6" />,
        color: "from-sky-500 to-blue-500",
      },
      {
        name: "Another Arts",
        icon: <Image className="w-6 h-6" />,
        color: "from-gray-900 to-gray-500",
      },
    ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Featured Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my portfolio across different disciplines, showcasing
            creativity, technical skill, and attention to detail.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center mb-16 space-y-4 md:space-y-0 md:space-x-8">
          {categories.map((category) => (
            <WorkCategory
              key={category.name}
              title={category.name}
              icon={category.icon}
              isActive={activeCategory === category.name}
              colorClass={category.color}
              onClick={() => setActiveCategory(category.name)}
            />
          ))}
        </div>

        <ProjectGallery category={activeCategory} />
      </div>
    </section>
  );
};

export default FeaturedWork;
