// "use client";

import { coverLetterSchema } from "@/app/lib/schema";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";

const NewCoverLetter = async ({ params }) => {
  const id = await params;

  return (
    <div>
      <div className="container mx-auto space-y-4 py-6">
        <div className="flex flex-col space-y-2 mx-2">
          <Link href={"/ai-cover-letter"}>
            <Button variant="link" className="gap-2 pl-0">
              <ArrowLeft className="h-4 w-4" />
              Back to Cover Letters
            </Button>
          </Link>

          <div>
            <h1 className="text-6xl font-bold gradient-title">
              Create Cover Letter
            </h1>
            <p className="text-muted-foreground">
              Generate a tailored cover letter for your job application
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewCoverLetter;
