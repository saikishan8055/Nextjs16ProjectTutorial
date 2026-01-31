import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ImageTabs from "@/components/ImagesTabs";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-6xl font-bold">
              A better way to track your job application
            </h1>
            <p className="text-muted-foreground mb-10 text-xl">
              Capture,Organize, and manage your job search in one place
            </p>
            <div className="items-center gap-4 flex flex-col">
              <Link href="/sign-up" className="w-full sm:w-auto">
                <Button  size="lg" className="h-12 px-8 font-medium cursor-pointer">
                  Start for free <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <p>No Credit Card required</p>
            </div>
          </div>
        </section> 
        <ImageTabs/>     
      </main>
    </div>
  );
}
