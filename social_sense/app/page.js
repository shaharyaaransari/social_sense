import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="">
      <h2 className="mb-4 text-center">Home Page</h2>
      <div style={{margin:"auto"}} className="w-full max-w-md flex items-center border-black">
        <Link href="/frame1">
          
            <Button className="text-center w-full">Frame 1</Button>
          
        </Link>
      </div>
    </main>
  );
}
