import Card from "@/components/Card";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaAddressBook, FaAddressCard, FaHome, FaJava } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-black-100 relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: "Home", link: "/", icon: <FaHome />},
          {name: "About", link: "/about", icon: <FaAddressBook/>},
          {name: "Projects", link: "/projects", icon: <FaJava/>},
          {name: "Contact", link: "/contact", icon: <FaAddressCard/>},
        ]} />
        <Hero />
        <Card/>
        <Grid />
      </div>
    </main>
  );
}
