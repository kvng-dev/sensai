import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Quiz from "../_components/quiz";

const MockInterview = () => {
  return (
    <div className="container mx-auto space-y-4 py-6">
      <div className="flex flex-col space-y-2 mx-2">
        <Link href={"/interview"}>
          <Button variant="link" className="gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Back to Interview Prep
          </Button>
        </Link>

        <div>
          <h1 className="text-6xl font-bold gradient-title">Mock Interview</h1>
          <p className="text-muted-foreground">
            This is a mock interview preparation platform, designed to help
            candidates prepare for various job interviews. You can practice
            questions, practice coding, and practice coding-related skills. Feel
            free to explore the platform and create your own customized practice
            sets.{" "}
            <strong>
              Remember, this is a mock interview, and you should not expect to
              pass.
            </strong>
          </p>
        </div>
      </div>
      <Quiz />
    </div>
  );
};
export default MockInterview;
