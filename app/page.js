import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="text-center items-center justify-center h-screen flex flex-col">
        <h1 className="text-5xl mb-5 font-semibold">Let&rsquo;s Build Somthing Now!</h1>
        <Button>Get Started with app/page.js</Button>
      </div>
    </>
  );
}