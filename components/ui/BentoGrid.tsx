import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  img,
  headline,
  stylemain,
  style1,
  style2
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  headline?: string ;
  stylemain?: string;
  style1?: string;
  style2?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:border-white/[0.2] border border-transparent justify-between flex flex-col items-center px-3 pt-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {header}
      <div className={`group-hover/bento:translate-x-2 transition duration-200 ${stylemain}`}>
        {icon}
        <div className={`${style1}`}>
          <img src={img} alt={title} className="object-cover" />
        </div>
        
      <div className={`${style2}`}>
        <div className="font-sans font-bold text-2xl text-neutral-600 dark:text-neutral-200 mt-2">
          {title}
        </div>
        <div>
          {headline}
        </div>
        <div className=" mt-3 font-sans font-normal text-neutral-600 text-[15px] dark:text-neutral-300">
          {description}
        </div>
        </div>
      </div>
    </div>
  );
};
