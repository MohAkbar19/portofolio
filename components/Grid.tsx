import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about" className="px-6 sm:px-[38px] mt-32">
      <BentoGrid className="w-full mx-auto">
      {gridItems.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          className={i === 0 || i === 3 ? "md:col-span-2" : ""}
          img={item.img}
          headline={item.headline}
        />
      ))}
    </BentoGrid>
    </section>
  );
};

export default Grid;