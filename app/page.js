import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="text-center items-center justify-center h-screen flex flex-col">
        <h1 className="text-5xl mb-5 font-semibold">
          Let&rsquo;s Build Somthing Now!
        </h1>
        <Link href="https://github.com/khabzox/TPL-NextJS/blob/main/app/page.js" target="_blank">
          <Button>Get Started with app/page.js</Button>
        </Link>
      </div>
    </>
  );
}
